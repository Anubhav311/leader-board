import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40vh" }}
    >
      <Spinner size="xl" color="green" thickness="3px" emptyColor="gray.200" />
    </div>
  );
}
