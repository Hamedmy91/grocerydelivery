"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getListProduct } from "../Api/Request";
import Image from "next/image";
import { FaStar, FaPlus } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FiSliders } from "react-icons/fi";

const CATEGORIES = [
  "All Categories",
  "Fruits & Vegetables",
  "Personal Care",
  "Pantry Staples",
  "Bakery",
  "Beverages",
  "Meat & Seafood",
  "Snacks",
  "Frozen Foods",
  "Baby Care",
  "Dairy & Eggs",
];

const ProductsCm = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getListProduct,
  });

  const [activeCategory, setActiveCategory] = React.useState("All Categories");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [sortOption, setSortOption] = React.useState("Newest");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];

    let result = [...products];

    if (activeCategory !== "All Categories") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (minPrice !== "") {
      result = result.filter((p) => Number(p.price) >= Number(minPrice));
    }
    if (maxPrice !== "") {
      result = result.filter((p) => Number(p.price) <= Number(maxPrice));
    }

    switch (sortOption) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Top Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "A to Z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, activeCategory, minPrice, maxPrice, sortOption]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <div className="bg-[#faf7f2] flex flex-col gap-4 p-4 lg:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1">
        <Link href="/">
          <CiHome />
        </Link>
        <p>/</p>
        <span className="text-header font-medium">All Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar - desktop only */}
        <aside className="hidden lg:flex lg:flex-col gap-6 bg-white rounded-[10px] p-4 w-64 shrink-0 h-fit">
          <div>
            <p className="font-semibold text-header mb-3">Categories</p>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-3 py-2 rounded-lg text-[14px] transition-colors ${
                    activeCategory === cat
                      ? "bg-header text-white font-medium"
                      : "text-[#4b5563] hover:bg-[#f3f4f6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-header mb-3">Price Range</p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[14px] text-header placeholder-[#9ca3af] focus:outline-none focus:border-header"
              />
              <span className="text-[#9ca3af]">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[14px] text-header placeholder-[#9ca3af] focus:outline-none focus:border-header"
              />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-header text-[24px] font-medium">
                All Products
              </p>
              <p className="text-[#6b7280] text-[14px] font-medium">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Filters button - mobile/tablet only, sidebar covers this on desktop */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex gap-2 border items-center h-9.5 px-3 rounded-[10px] border-[#e5e7eb] text-header bg-white"
              >
                <FiSliders className="rotate-90" />
                <p>Filters</p>
              </button>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border h-9.5 px-3 rounded-[10px] border-[#e5e7eb] text-header bg-white"
              >
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low → High</option>
                <option value="Price: High to Low">Price: High → Low</option>
                <option value="Top Rated">Top Rated</option>
                <option value="A to Z">A → Z</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-white outline-1 outline-amber-50 rounded-[10px] w-full h-80 flex flex-col"
              >
                <div className="relative">
                  <div className="absolute top-2 left-2 text-white bg-header-res-1 text-[10px] rounded-full px-2 py-1 font-medium z-10">
                    <span>{product.discount}% OFF</span>
                  </div>
                  <Image
                    src={product.image}
                    alt={product.description}
                    width={200}
                    height={160}
                    className="object-contain w-full h-40"
                  />
                </div>
                <div className="flex flex-col p-4 gap-2 flex-1">
                  <p className="text-[#3f3f47] font-medium text-[14px]">
                    {product.name}
                  </p>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-amber-400 text-[12px]" />
                    <span className="text-[12px] font-medium text-header">
                      {product.rating}
                    </span>
                    <span className="text-[12px] text-[#6b7280]">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="relative pr-6 mt-auto">
                    <div className="flex items-center gap-1 flex-wrap">
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

                    <button className="absolute -right-1 -bottom-1 bg-header-res-1 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                      <FaPlus className="text-[11px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer - full screen */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-x-0 top-36 bottom-0 z-50 bg-white flex flex-col p-4 gap-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-header text-[18px]">Filters</p>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-[#6b7280] text-[24px] leading-none"
              aria-label="Close filters"
            >
              ×
            </button>
          </div>

          <div>
            <p className="font-semibold text-header mb-3">Categories</p>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-3 py-2 rounded-lg text-[14px] transition-colors ${
                    activeCategory === cat
                      ? "bg-header text-white font-medium"
                      : "text-[#4b5563] hover:bg-[#f3f4f6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-header mb-3">Price Range</p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[14px] text-header placeholder-[#9ca3af] focus:outline-none focus:border-header"
              />
              <span className="text-[#9ca3af]">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[14px] text-header placeholder-[#9ca3af] focus:outline-none focus:border-header"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCm;
