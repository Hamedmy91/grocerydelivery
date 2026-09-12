"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { getListProduct } from "../Api/Request";
import Image from "next/image";
import { FaStar, FaPlus } from "react-icons/fa";
import Link from "next/link";

const PopProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getListProduct,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <>
      <div className="bg-[#faf7f2] flex flex-col gap-3 pl-4 sm:flex sm:flex-col sm:gap-8">
        <div className="flex justify-between items-center pr-4 sm:flex sm:flex-row sm:justify-between sm:w-350 sm:h-14">
          <div className="flex flex-col gap-1 sm:pl-42">
            <h1 className="text-2xl font-medium text-header">
              Popular Products
            </h1>

            <p className="text-[14px] font-medium text-[#6b7280]">
              Top-rated products this season
            </p>
          </div>

          <Link
            href="/Products"
            className="flex gap-2 text-header-res-1 items-center"
          >
            <p className="text-[14px] font-medium">View All</p>

            <i>
              <IoArrowForward />
            </i>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 relative sm:grid sm:grid-cols-5 sm:pl-32 ">
          {products?.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-white outline-1 outline-amber-50 rounded-[10px] w-41 h-80 mb-10 sm:w-54.5 sm:h-80.75 "
            >
              <div className="relative">
                <div className="absolute top-2 left-2 text-white bg-header-res-1 text-[10px] rounded-full px-2 py-1 font-medium z-10">
                  <span>{product.discount}% OFF</span>
                </div>
                <Image
                  src={product.image}
                  alt={product.description}
                  width={132}
                  height={132}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col p-4 gap-2">
                <div>
                  <p className="text-[#3f3f47] font-medium text-[14px] ">
                    {product.name}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-amber-400 text-[12px]" />
                  <span className="text-[12px] font-medium text-header">
                    {product.rating}
                  </span>
                  <span className="text-[12px] text-[#6b7280]">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="relative pr-6">
                  <div className="flex items-center justify-around gap-1">
                    <span className="text-[15px] font-semibold text-header">
                      ${product.price}.0
                    </span>
                    <span className="text-[12px] text-[#6b7280]">
                      /{product.unit}
                    </span>
                    <p>
                      {product.originalPrice && (
                        <span className="text-[12px] text-[#9ca3af] line-through">
                          ${product.originalPrice}.0
                        </span>
                      )}
                    </p>
                  </div>

                  <button className="absolute -right-1 -bottom-1 bg-header-res-1 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                    <FaPlus className="text-[11px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopProducts;
