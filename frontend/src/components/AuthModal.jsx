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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#111215] rounded-xl border border-[#27292f] p-6 sm:p-8 shadow-2xl relative text-zinc-100"
      >
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <IconClose size={16} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#18191d] border border-[#27292f] mx-auto flex items-center justify-center text-zinc-200 mb-3 shadow-sm">
            {authMode === "login" ? <IconUser size={18} /> : <IconCrown size={18} />}
          </div>
          <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
            {authMode === "login" ? "Sign In to CHSETube" : "Create Student Account"}
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
            {authMode === "login"
              ? "Access your saved chapters, personalized study streak, and notes"
              : "Register to save your CHSE syllabus progress across all your devices"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "register" && (
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors"
            />
          </div>

          {authMode === "register" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Class</label>
                  <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-[#0c0d0f] border border-[#23252a]">
                    {["11", "12"].map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => setUserClass(cls)}
                        className={`py-1.5 rounded-md text-xs font-semibold transition-all ${
                          userClass === cls
                            ? "bg-zinc-100 text-zinc-950 shadow-sm"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        Class {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs font-semibold text-zinc-200 focus:border-zinc-400 outline-none transition-colors"
                  >
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Account Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                      role === "student"
                        ? "bg-zinc-100 text-zinc-950 border-white shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border-[#23252a] hover:text-zinc-200"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("admin")}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                      role === "admin"
                        ? "bg-zinc-100 text-zinc-950 border-white shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border-[#23252a] hover:text-zinc-200"
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
            className="w-full py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all mt-2 disabled:opacity-50 shadow-sm"
          >
            {loading ? "Please wait..." : authMode === "login" ? "Sign In to Dashboard" : "Create Student Account"}
          </button>
        </form>

        {/* Switch mode */}
        <div className="mt-5 text-center text-xs text-zinc-400">
          {authMode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("register")}
                className="text-zinc-200 font-semibold hover:underline"
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
                className="text-zinc-200 font-semibold hover:underline"
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
