"use client";
import React from "react";
import Section01 from "./components/section01";
import Section02 from "./components/Section02";

export default function Page() {
  return (
    <div className="w-full min-h-screen overflow-hidden text-base">
      <Section01 />
      <Section02 />
    </div>
  );
}
