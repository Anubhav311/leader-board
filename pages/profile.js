import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { withProtected } from "../components/ProtectedRoute";

function Profile() {
  const { logout } = useAuth();

  return (
    <Layout>
      <div style={{ marginTop: "80px" }}>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </Layout>
  );
}

export default withProtected(Profile);