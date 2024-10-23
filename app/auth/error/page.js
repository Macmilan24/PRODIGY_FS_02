"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/signin"); // Redirect to sign-in page after 5 seconds
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-400 via-yellow-500 to-orange-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Oops!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Something went wrong. Redirecting you to the sign-in page...
        </p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
