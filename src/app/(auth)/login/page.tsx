"use client";
import React from "react";
import Login from "@/components/auth/login/login";
import withAuth from "@/hooks/useAuth";

const LoginPage = () => {
  return <Login />;
};

export default withAuth(LoginPage);