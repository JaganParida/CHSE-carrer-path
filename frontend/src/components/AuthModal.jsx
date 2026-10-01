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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-obsidian-800 text-slate-400 hover:text-white transition-colors"
        >
          <IconClose size={16} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 mx-auto flex items-center justify-center text-white mb-3 shadow-lg shadow-brand-500/25">
            {authMode === "login" ? <IconUser size={20} /> : <IconCrown size={20} />}
          </div>
          <h2 className="text-xl font-black text-white tracking-tight">
            {authMode === "login" ? "Sign in to CHSE Odisha" : "Create Student Account"}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {authMode === "login"
              ? "Enter your email and password to access your dashboard"
              : "Register your account to track your syllabus, notes, and study progress"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "register" && (
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-slate-700 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-slate-700 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-slate-700 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          {authMode === "register" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Class</label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-slate-800">
                    {["11", "12"].map((cls) => (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => setUserClass(cls)}
                        className={`py-1 rounded-lg text-xs font-bold transition-all ${
                          userClass === cls
                            ? "bg-brand-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Class {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-obsidian-900 border border-slate-700 text-xs font-bold text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  >
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Account Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`py-2 rounded-xl text-xs font-extrabold border transition-all ${
                      role === "student"
                        ? "bg-brand-600/30 text-brand-300 border-brand-500"
                        : "bg-obsidian-900 text-slate-400 border-slate-800"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("admin")}
                    className={`py-2 rounded-xl text-xs font-extrabold border transition-all ${
                      role === "admin"
                        ? "bg-amber-600 text-white border-amber-500"
                        : "bg-obsidian-900 text-slate-400 border-slate-800"
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
            className="w-full py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 transition-all mt-2"
          >
            {loading ? "Processing..." : authMode === "login" ? "Sign In to Dashboard" : "Create My Account"}
          </button>
        </form>

        {/* Switch mode */}
        <div className="mt-5 text-center text-xs text-slate-400">
          {authMode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("register")}
                className="text-brand-400 font-bold hover:underline"
              >
                Register now
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className="text-brand-400 font-bold hover:underline"
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
