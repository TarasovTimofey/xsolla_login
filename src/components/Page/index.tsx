import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import "./styles.css";

const Page = () => {
  return (
    <div className="page">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Page;
