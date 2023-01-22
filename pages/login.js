import React, { useEffect } from "react";
import Router from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { Button, Input } from '@chakra-ui/react'
import Link from "next/link";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const WithMaterialUI = () => {
  // const { state } = useCount();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) Router.push("/");
  }, [currentUser]);
  // const { dispatch } = useCount();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const email = formik.values.email;
      const password = formik.values.password;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userData = userCredential.user;
          // ...
          // console.log(userData);

          if (currentUser) {
            Router.push("/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
  });

  return (
    <>
      <div
        style={{
          width: "50%",
          marginLeft: "37%",
        }}
      >
        <h1 style={{ marginTop: "15vh", marginBottom: "30px" }}>Welcome Back!!!</h1>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={formik.handleSubmit}
        >
          <p style={{ fontSize: "14px" }}>Email</p>
          <Input
            style={{ width: "50%" }}
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outline"
            placeholder="Enter your email"
            marginBottom='30px'
          />
          <p style={{ fontSize: "14px" }}>Password</p>

          <Input
            style={{ width: "50%" }}
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant="outline"
            placeholder="Enter your password"
            marginBottom='30px'
          />
          <Link href="/forgotPassword">
            <span
              style={{
                fontSize: "14px",
                color: "#3f51b5",
                marginLeft: "auto",
                marginTop: "15px",
              }}
            >
              Forgot password
            </span>
          </Link>
          <Button
            style={{ width: "50%", marginTop: "15px", borderRadius: "5px" }}
            colorScheme="green"
            variant="solid"
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </form>
        <p
          style={{
            fontSize: "14px",
            marginLeft: "10%",
            color: "grey",
            marginTop: "30px",
          }}
        >
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <span style={{ textDecoration: "none", color: "#3f51b5" }}>Sign up</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default WithMaterialUI;
