import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { IconClose, IconUser, IconCrown, IconEye, IconEyeOff } from "./Icons.jsx";

export const AuthModal = () => {
  const { authModalOpen, setAuthModalOpen, authMode, setAuthMode, login, register } = useAuth();
  const { showToast } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [stream, setStream] = useState("Science");
  const [userClass, setUserClass] = useState("12");
  const [loading, setLoading] = useState(false);

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (authMode === "login") {
      const res = await login(email.trim(), password);
      setLoading(false);
      if (res.success) {
        showToast("Signed in successfully!", "success");
        setAuthModalOpen(false);
      } else {
        showToast(res.message || "Invalid email or password.", "error");
      }
    } else {
      // Registration is strictly for student accounts
      const res = await register({
        name: name.trim(),
        email: email.trim(),
        password,
        stream,
        class: userClass,
        role: "student",
      });
      setLoading(false);
      if (res.success) {
        showToast("Student account created successfully!", "success");
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
            <IconUser size={18} />
          </div>
          <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
            {authMode === "login" ? "Sign In to CHSETube" : "Create Student Account"}
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
            {authMode === "login"
              ? "Access your enrolled syllabus, study streaks, and autosaved notes"
              : "Register your free student profile to sync your CHSE syllabus progress"}
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
                placeholder="Enter your student name"
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
              autoComplete="email"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-zinc-300">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                {showPassword ? <IconEyeOff size={13} /> : <IconEye size={13} />}
                <span>{showPassword ? "Hide" : "Show"}</span>
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete={authMode === "login" ? "current-password" : "new-password"}
                className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 outline-none transition-colors font-sans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 p-1"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IconEyeOff size={15} /> : <IconEye size={15} />}
              </button>
            </div>
          </div>

          {authMode === "register" && (
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Class (+2)</label>
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
                  className="w-full px-3 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs font-semibold text-zinc-200 focus:border-zinc-400 outline-none transition-colors"
                >
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            </div>
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
