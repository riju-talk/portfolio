// HeadComponent.jsx
"use client";                    // make sure this is a Client Component
import React from "react";

// Pull in the CommonJS build of Layout (which always has the sub-components attached):
import Layout from "antd/lib/layout";
//import "antd/dist/antd";     // load the CSS so the component actually renders

// Now Layout.Header is guaranteed to be defined:
const { Header } = Layout;

export default function HeadComponent() {
  return (
    <Header style={{ background: "#fff", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Home</span>
        <span>About</span>
      </div>
    </Header>
  );
}
