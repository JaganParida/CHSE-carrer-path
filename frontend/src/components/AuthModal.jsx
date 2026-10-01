import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { IconClose, IconUser, IconCrown } from "./Icons.jsx";

export const AuthModal = () => {
  const { authModalOpen, setAuthModalOpen, authMode, setAuthMode, login, register } = useAuth();
  const { showToast } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stream, setStream] = useState("Science");
  const [userClass, setUserClass] = useState("12");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (authMode === "login") {
      const res = await login(email, password);
      setLoading(false);
      if (res.success) {
        showToast("Signed in successfully!", "success");
        setAuthModalOpen(false);
      } else {
        showToast(res.message || "Invalid email or password.", "error");
      }
    } else {
      const res = await register({ name, email, password, stream, class: userClass, role });
      setLoading(false);
      if (res.success) {
        showToast("Account created successfully!", "success");
        setAuthModalOpen(false);
      } else {
        showToast(res.message || "Registration failed.", "error");
      }
    }
  };

  return (
    <div
      onClick={() => setAuthModalOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0a0a0a] rounded-3xl border border-[#262626] p-6 sm:p-8 shadow-2xl relative text-white"
      >
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white transition-colors"
        >
          <IconClose size={16} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-white mb-3">
            {authMode === "login" ? <IconUser size={20} /> : <IconCrown size={20} />}
          </div>
          <h2 className="text-xl font-black text-white tracking-tight">
            {authMode === "login" ? "Sign In to CHSETube" : "Create Student Account"}
          </h2>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
            {authMode === "login"
              ? "Access your saved chapters, personalized study streak, and notes"
              : "Register to save your CHSE syllabus progress across all your devices"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "register" && (
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-[#262626] text-sm text-white placeholder-neutral-600 focus:border-white focus:ring-1 focus:ring-white outline-none"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-[#262626] text-sm text-white placeholder-neutral-600 focus:border-white focus:ring-1 focus:ring-white outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-[#262626] text-sm text-white placeholder-neutral-600 focus:border-white focus:ring-1 focus:ring-white outline-none"
            />
          </div>

          {authMode === "register" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">Class</label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black border border-[#262626]">
                    {["11", "12"].map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => setUserClass(cls)}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          userClass === cls
                            ? "bg-white text-black shadow-sm"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Class {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-[#262626] text-xs font-bold text-white focus:border-white focus:ring-1 focus:ring-white outline-none"
                  >
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">Account Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      role === "student"
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-black text-neutral-400 border-[#262626] hover:text-white"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("admin")}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      role === "admin"
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-black text-neutral-400 border-[#262626] hover:text-white"
                    }`}
                  >
                    Admin
                  </button>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-bold text-black bg-white hover:bg-neutral-200 transition-all mt-2 disabled:opacity-50 shadow-sm"
          >
            {loading ? "Please wait..." : authMode === "login" ? "Sign In to Dashboard" : "Create Student Account"}
          </button>
        </form>

        {/* Switch mode */}
        <div className="mt-5 text-center text-xs text-neutral-400">
          {authMode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("register")}
                className="text-white font-bold hover:underline"
              >
                Create one now
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className="text-white font-bold hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
