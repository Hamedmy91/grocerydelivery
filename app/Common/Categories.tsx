"use client";

import React from "react";
import Image from "next/image";
const Categories = () => {
  const categories = [
    {
      image: "/fruits_vegetables.webp",
      alt: "fruits_vegetables",
      title: "Fruits & Vegetables",
    },
    {
      image: "/personal_care.webp",
      alt: "personal_care",
      title: "Personal Care",
    },
    {
      image: "/groceries.webp",
      alt: "groceries",
      title: "Pantry Staples",
    },
    {
      image: "/bakery.webp",
      alt: "bakery",
      title: "Bakery",
    },
    {
      image: "/drinks.webp",
      alt: "drinks",
      title: "Beverages",
    },
    {
      image: "/meat_seafood.webp",
      alt: "meat_seafood",
      title: "Meat & Seafood",
    },
    {
      image: "/snacks.webp",
      alt: "snacks",
      title: "Snacks",
    },
    {
      image: "/frozen_foods.webp",
      alt: "frozen_foods",
      title: "Frozen Foods",
    },
    {
      image: "/baby_care.webp",
      alt: "baby_care",
      title: "Baby Care",
    },
    {
      image: "/dairy_eggs.webp",
      alt: "dairy_eggs",
      title: "Dairy & Eggs",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-4 bg-[#faf7f2] p-5  ">
      <div className="flex flex-col gap-2  sm:pl-42">
        <h1 className="text-2xl font-medium text-header">Browse Categories</h1>

        <p className="text-[14px] font-medium text-[#6b7280]">
          Find exactly what you need using
        </p>
      </div>
      <div className=" flex w-full gap-5 overflow-x-auto scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing sm:justify-center sm:pl-20 ">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex w-18 shrink-0 flex-col items-center gap-3 sm:w-26"
          >
            <Image
              src={category.image}
              alt={category.alt}
              width={104}
              height={104}
              className="h-18 w-18 rounded-xl border border-[#ffeed4] bg-[#ffeed4] object-contain sm:h-26 sm:w-26"
            />
            <p className="h-7.5 w-18 text-center text-[12px] font-medium text-header-res sm:w-26">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
