import React, { useEffect } from "react";
import Router from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

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
        <h1 style={{ marginTop: "15vh" }}>Welcome to EPVI</h1>
        <p style={{ marginTop: "25px", marginBottom: "30px", color: "grey" }}>
          Please Enter your details.
        </p>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={formik.handleSubmit}
        >
          <p style={{ fontSize: "14px" }}>Email</p>
          <input
            style={{ width: "50%" }}
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            placeholder="Enter your email"
          />
          <p style={{ fontSize: "14px" }}>Password</p>

          <input
            style={{ width: "50%" }}
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant="outlined"
            placeholder="Enter your password"
          />
          <Link href="/forgotPassword">
            <span
              style={{
                fontSize: "14px",
                color: "#3f51b5",
                marginLeft: "17%",
                marginTop: "15px",
              }}
            >
              Forgot password
            </span>
          </Link>
          <button
            style={{ width: "50%", marginTop: "15px", borderRadius: "5px" }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Sign in
          </button>
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
