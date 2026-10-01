import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("chsetube_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("chsetube_token") || null;
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'register'
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  // Synchronize user to localStorage for instant cached reads
  useEffect(() => {
    if (user) {
      localStorage.setItem("chsetube_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("chsetube_user");
    }
  }, [user]);

  // ON MOUNT: Check server session via secure HttpOnly cookie
  // This guarantees user is never logged out on hard refresh!
  useEffect(() => {
    let isMounted = true;

    const verifyServerSession = async () => {
      try {
        const headers = { "Content-Type": "application/json" };
        const localToken = localStorage.getItem("chsetube_token");
        if (localToken) {
          headers["Authorization"] = `Bearer ${localToken}`;
        }

        const res = await fetch("/api/auth/me", {
          method: "GET",
          headers,
          credentials: "include", // Transmits secure httpOnly HTTPS cookie automatically
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user && isMounted) {
            setUser(data.user);
            localStorage.setItem("chsetube_user", JSON.stringify(data.user));
          }
        }
      } catch (err) {
        console.warn("Server session validation offline or using cached state.");
      } finally {
        if (isMounted) setIsLoadingSession(false);
      }
    };

    verifyServerSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Sets HttpOnly cookie in browser
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(data.user);
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("chsetube_token", data.token);
        }
        return { success: true };
      } else {
        return { success: false, message: data.message || "Invalid email or password." };
      }
    } catch (e) {
      return { success: false, message: "Network connection error. Please try again." };
    }
  };

  const register = async ({ name, email, password, stream, class: userClass, role }) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Sets HttpOnly cookie in browser
        body: JSON.stringify({ name, email, password, stream, class: userClass, role }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(data.user);
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("chsetube_token", data.token);
        }
        return { success: true };
      } else {
        return { success: false, message: data.message || "Registration failed." };
      }
    } catch (e) {
      return { success: false, message: "Network connection error. Please try again." };
    }
  };

  const logout = async () => {
    // 1. Immediately reset client state so UI reacts instantly without network lag
    setUser(null);
    setToken(null);
    try {
      localStorage.removeItem("chsetube_token");
      localStorage.removeItem("chsetube_user");
    } catch (e) {}

    // 2. Ensure scroll position is reset to top so landing page displays properly
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // 3. Clear server session cookie asynchronously
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      console.warn("Server logout notification skipped:", e);
    }
  };

  const updateProfile = (fields) => {
    setUser((prev) => {
      const updated = { ...prev, ...fields };
      localStorage.setItem("chsetube_user", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user),
        isAdmin: user?.role === "admin",
        isLoadingSession,
        login,
        register,
        logout,
        updateProfile,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        setAuthMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
