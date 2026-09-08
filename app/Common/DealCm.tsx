"use client";

import React from "react";
import { IoFlashSharp } from "react-icons/io5";
import { FaStar, FaPlus } from "react-icons/fa";
import Image from "next/image";

const DealCm = () => {
  const products = [
    {
      id: "960d497e-91a6-4ec8-a9d9-603dd0e0eb49",
      name: "Wheat Flour 5kg",
      description: "Soft and fluffy rotis, Rich in nutrients",
      price: 230,
      originalPrice: 250,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ooitbkcjcky0gkjmkatb.png",
      unit: "5kg",
      rating: 4.5,
      reviewCount: 12,
      discount: 8,
    },
    {
      id: "25ce3571-36e7-4c60-bd89-4eb9e9aaffe7",
      name: "Barley 1kg",
      description: "Rich in fiber, Helps digestion",
      price: 140,
      originalPrice: 150,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
      unit: "1kg",
      rating: 4.5,
      reviewCount: 12,
      discount: 7,
    },
    {
      id: "f502d816-96ed-4c1d-a522-5c5aaf0dffcb",
      name: "Brown Rice 1kg",
      description: "Whole grain and nutritious",
      price: 110,
      originalPrice: 120,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dboutcrkdjhoxcvbbqne.png",
      unit: "1kg",
      rating: 4.5,
      reviewCount: 12,
      discount: 8,
    },
    {
      id: "55ec1ca3-b532-487a-971e-a834d0b22b83",
      name: "Apple 1 kg",
      description: "Boosts immunity, Rich in fiber",
      price: 90,
      originalPrice: 100,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/pjt1y6xdo46tluemhf0o.png",
      unit: "1kg",
      rating: 4.5,
      reviewCount: 12,
      discount: 10,
    },
    {
      id: "c2c9bf4e-ab63-45b0-9741-ef9145e7d43d",
      name: "Eggs 12 pcs",
      description:
        "Farm fresh, Rich in protein, Ideal for breakfast and baking",
      price: 85,
      originalPrice: 90,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/cnjrpbcnqesqxy1wr30g.png",
      unit: "12pcs",
      rating: 4.5,
      reviewCount: 12,
      discount: 6,
    },
    {
      id: "6279edfc-9e44-47f8-9db7-ac08554806bb",
      name: "Paneer 200g",
      description:
        "Soft and fresh, Rich in protein, Ideal for curries and snacks",
      price: 85,
      originalPrice: 90,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vihqr6wquv57byurvz46.png",
      unit: "200g",
      rating: 4.5,
      reviewCount: 12,
      discount: 6,
    },
    {
      id: "2be20bf2-0599-455f-8a79-8c925a2db7cc",
      name: "Coca-Cola 1.5L",
      description: "Perfect for parties and gatherings, Best served chilled",
      price: 75,
      originalPrice: 80,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/eljxcdud6fduwfim5rdx.png",
      unit: "1.5L",
      rating: 4.5,
      reviewCount: 12,
      discount: 6,
    },
    {
      id: "5c9718a1-6a46-4f84-bd09-4cb7b9b79e9b",
      name: "Orange 1 kg",
      description:
        "Juicy and sweet, Rich in Vitamin C, Perfect for juices and salads",
      price: 75,
      originalPrice: 80,
      image:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/r1wxfortw5h12g7egx7k.png",
      unit: "1kg",
      rating: 4.5,
      reviewCount: 12,
      discount: 6,
    },
  ];

  return (
    <section className="w-full bg-[#faf7f2]">
      <div className="w-full bg-[#ea580c] px-4 py-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <IoFlashSharp className="text-2xl" />

            <h2 className="text-2xl font-semibold sm:text-3xl">Flash Deals</h2>

            <IoFlashSharp className="text-2xl" />
          </div>

          <p className="max-w-xl text-sm font-medium text-white/80 sm:text-base">
            Limited-time offers on your favorite organic products. Grab them
            before they&apos;re gone!
          </p>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 px-3 py-6 sm:grid-cols-3 sm:gap-4 sm:px-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#eee8df] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute left-2 top-2 z-10 rounded-full bg-[#ea580c] px-2.5 py-1 text-[10px] font-semibold text-white">
              {product.discount}% OFF
            </div>

            <div className="relative flex h-36 w-full items-center justify-center bg-white p-4 sm:h-44">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 sm:h-57.5! "
              />
            </div>

            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-[#3f3f47]">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-1">
                <FaStar className="text-[11px] text-amber-400" />

                <span className="text-xs font-medium text-[#374151]">
                  {product.rating}
                </span>
                <span className="text-xs text-[#9ca3af]">
                  ({product.reviewCount})
                </span>
              </div>
              <div className="relative mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-header">
                    ${product.price}.0
                  </span>

                  <span className="text-[12px] text-[#6b7280]">
                    /{product.unit}
                  </span>

                  {product.originalPrice && (
                    <span className="text-[12px] text-[#9ca3af] line-through">
                      ${product.originalPrice}.0
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="absolute right-0 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-header-res-1 text-white shadow-md"
                >
                  <FaPlus className="text-[11px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealCm;
