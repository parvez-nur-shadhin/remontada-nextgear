"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock, FiImage, FiAlertCircle } from "react-icons/fi";

export default function RegisterPage() {
  const { registerWithEmail, loginWithGoogle } = useAuth();
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
      await registerWithEmail(data.name, data.email, data.password, data.photoURL);
      router.push("/");
    } catch (err) {
      setAuthError(err.message || "Registration failed. Try another email.");
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
          <h1 className="text-2xl sm:text-3xl font-extrabold">Create an Account</h1>
          <p className="text-sm text-base-content/70 mt-1">
            Join NextGear to add and manage products
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
              <span className="label-text font-medium">Full Name</span>
            </label>
            <div className="relative">
              <FiUser className="w-4 h-4 absolute left-3.5 top-3.5 text-base-content/50" />
              <input
                type="text"
                placeholder="John Doe"
                className={`input input-bordered w-full pl-10 ${errors.name ? "input-error" : ""}`}
                {...register("name", { required: "Full name is required" })}
              />
            </div>
            {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
          </div>

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
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-error text-xs mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Avatar URL (Optional)</span>
            </label>
            <div className="relative">
              <FiImage className="w-4 h-4 absolute left-3.5 top-3.5 text-base-content/50" />
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                className="input input-bordered w-full pl-10"
                {...register("photoURL")}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <FiLock className="w-4 h-4 absolute left-3.5 top-3.5 text-base-content/50" />
              <input
                type="password"
                placeholder="At least 6 characters"
                className={`input input-bordered w-full pl-10 ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-error text-xs mt-1">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full mt-2">
            {isSubmitting ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="divider text-xs text-base-content/50">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full gap-2">
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-base-content/70 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="link link-primary font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}