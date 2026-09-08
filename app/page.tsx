"use client"
import React from "react";
import Hero from "./Common/Hero";
import Categories from "./Common/Categories";
import PopProducts from "./Common/PopProducts";
import Store from "./Common/Store";
import Newsletter from "./Common/Newsletter";

const page = () => {
  return (
    <>
      <div >
        <Hero/>
        <Categories/>
        <PopProducts/>
        <Store/>
        <Newsletter/>
      </div>
    </>
  );
};

export default page;
