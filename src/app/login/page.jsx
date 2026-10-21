"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

export default function LoginPage() {
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setAuthError("");
    setIsSubmitting(true);
    try {
      await loginWithEmail(data.email, data.password);
      router.push("/");
    } catch (err) {
      setAuthError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError("");
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      setAuthError(err.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 border border-base-200 shadow-xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Welcome Back</h1>
          <p className="text-sm text-base-content/70 mt-1">
            Sign in to add and manage hardware products
          </p>
        </div>

        {authError && (
          <div className="alert alert-error text-sm mb-4 py-2.5">
            <FiAlertCircle className="w-4 h-4 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <div className="relative">
              <FiMail className="w-4 h-4 absolute left-3.5 top-3.5 text-base-content/50" />
              <input
                type="email"
                placeholder="you@example.com"
                className={`input input-bordered w-full pl-10 ${errors.email ? "input-error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-error text-xs mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <FiLock className="w-4 h-4 absolute left-3.5 top-3.5 text-base-content/50" />
              <input
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full pl-10 ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters required" },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-error text-xs mt-1">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full mt-2">
            {isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
          </button>
        </form>

        <div className="divider text-xs text-base-content/50">OR CONTINUE WITH</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full gap-2">
          <FcGoogle className="w-5 h-5" />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-base-content/70 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="link link-primary font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}