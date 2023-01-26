import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

export function withProtected(Component) {
  return function WithProtected(props) {
    const { currentUser } = useAuth();
    const router = useRouter();
    if (!currentUser) {
      useEffect(() => {
        router.replace("/login");
      }, [currentUser]); 
      return <Loading />;
    }
    return <Component {...props} />;
  };
}
