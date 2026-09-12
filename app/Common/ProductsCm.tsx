"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { getListProduct } from "../Api/Request";

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

const normalizeCategory = (value: string) => {
  return value.toLowerCase().trim().replace(/&/g, "and").replace(/\s+/g, " ");
};

// ============================================
// STAR RATING (small helper component)
// ============================================
const StarRating = ({
  rating = 4.5,
  reviewCount = 12,
}: {
  rating?: number;
  reviewCount?: number;
}) => {
  return (
    <div className="flex items-center gap-1 text-xs mt-1">
      <svg
        className="w-3.5 h-3.5 text-orange-400 fill-orange-400"
        viewBox="0 0 20 20"
      >
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
      </svg>
      <span className="font-medium text-gray-800">
        {Number(rating).toFixed(1)}
      </span>
      <span className="text-gray-400">({reviewCount})</span>
    </div>
  );
};

// ============================================
// PRODUCT CARD
// ============================================
const ProductCard = ({ product }: { product: any }) => {
  const price = Number(product.price) || 0;

  // Support either an explicit oldPrice/discount from the API,
  // or fall back gracefully if they don't exist.
  // If only "discount" (%) comes from the API, derive oldPrice from it.
  // If only "oldPrice" comes from the API, derive discount % from it.
  const rawOldPrice = product.oldPrice ? Number(product.oldPrice) : null;
  const rawDiscount = product.discount ? Number(product.discount) : null;

  const oldPrice =
    rawOldPrice ?? (rawDiscount ? price / (1 - rawDiscount / 100) : null);

  const discountPercent =
    rawDiscount ??
    (rawOldPrice && rawOldPrice > price
      ? Math.round(((rawOldPrice - price) / rawOldPrice) * 100)
      : null);

  const unit = product.unit ? `/${product.unit}` : "";

  return (
    <Link
      href={`/Products/${product.id}`}
      className="group relative flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      {/* Discount badge */}
      {discountPercent ? (
        <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {discountPercent}% OFF
        </span>
      ) : null}

      {/* Image */}
      <div className="relative aspect-square bg-white overflow-hidden flex items-center justify-center p-6">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || "Product"}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="p-4 pt-0 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-[15px] line-clamp-2">
          {product.name}
        </h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-bold text-gray-900">
              ${price.toFixed(2)}
              <span className="text-xs font-normal text-gray-500">{unit}</span>
            </span>

            {oldPrice ? (
              <span className="text-sm text-gray-400 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: hook up add-to-cart logic here
            }}
            aria-label="Add to cart"
            className="shrink-0 w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

const ProductsCm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getListProduct,
  });

  // URL values
  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "All Categories";
  const urlMinPrice = searchParams.get("minPrice") || "";
  const urlMaxPrice = searchParams.get("maxPrice") || "";
  const urlSort = searchParams.get("sort") || "Newest";

  // Local states
  const [searchQuery, setSearchQuery] = React.useState(urlSearch);
  const [activeCategory, setActiveCategory] = React.useState(urlCategory);
  const [minPrice, setMinPrice] = React.useState(urlMinPrice);
  const [maxPrice, setMaxPrice] = React.useState(urlMaxPrice);
  const [sortOption, setSortOption] = React.useState(urlSort);

  // Mobile filter
  const [showFilters, setShowFilters] = React.useState(false);

  // Sync state with URL
  React.useEffect(() => {
    setSearchQuery(urlSearch);
  }, [urlSearch]);

  React.useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  React.useEffect(() => {
    setMinPrice(urlMinPrice);
  }, [urlMinPrice]);

  React.useEffect(() => {
    setMaxPrice(urlMaxPrice);
  }, [urlMaxPrice]);

  React.useEffect(() => {
    setSortOption(urlSort);
  }, [urlSort]);

  // Update URL
  const updateUrl = React.useCallback(
    (values: {
      search?: string;
      category?: string;
      minPrice?: string;
      maxPrice?: string;
      sort?: string;
    }) => {
      const params = new URLSearchParams(searchParams.toString());

      if (values.search !== undefined) {
        if (values.search.trim()) {
          params.set("search", values.search.trim());
        } else {
          params.delete("search");
        }
      }

      if (values.category !== undefined) {
        if (values.category && values.category !== "All Categories") {
          params.set("category", values.category);
        } else {
          params.delete("category");
        }
      }

      if (values.minPrice !== undefined) {
        if (values.minPrice) {
          params.set("minPrice", values.minPrice);
        } else {
          params.delete("minPrice");
        }
      }

      if (values.maxPrice !== undefined) {
        if (values.maxPrice) {
          params.set("maxPrice", values.maxPrice);
        } else {
          params.delete("maxPrice");
        }
      }

      if (values.sort !== undefined) {
        if (values.sort && values.sort !== "Newest") {
          params.set("sort", values.sort);
        } else {
          params.delete("sort");
        }
      }

      const queryString = params.toString();

      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    },
    [router, pathname, searchParams],
  );

  // ============================================
  // FILTER PRODUCTS
  // ============================================
  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    // -----------------------------
    // SEARCH
    // -----------------------------
    const q = searchQuery.trim().toLowerCase();

    if (q) {
      result = result.filter((product) => {
        const name = String(product.name ?? "").toLowerCase();

        const description = String(product.description ?? "").toLowerCase();

        const category = String(product.category ?? "").toLowerCase();

        return (
          name.includes(q) || description.includes(q) || category.includes(q)
        );
      });
    }

    // -----------------------------
    // CATEGORY
    // -----------------------------
    if (activeCategory !== "All Categories") {
      const selectedCategory = normalizeCategory(activeCategory);

      result = result.filter((product) => {
        const productCategory = normalizeCategory(
          String(product.category ?? ""),
        );

        return productCategory === selectedCategory;
      });
    }

    // -----------------------------
    // MIN PRICE
    // -----------------------------
    if (minPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) >= Number(minPrice),
      );
    }

    // -----------------------------
    // MAX PRICE
    // -----------------------------
    if (maxPrice !== "") {
      result = result.filter(
        (product) => Number(product.price) <= Number(maxPrice),
      );
    }

    // -----------------------------
    // SORT
    // -----------------------------
    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortOption === "Price: High to Low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sortOption === "Name: A-Z") {
      result.sort((a, b) =>
        String(a.name ?? "").localeCompare(String(b.name ?? "")),
      );
    }

    if (sortOption === "Name: Z-A") {
      result.sort((a, b) =>
        String(b.name ?? "").localeCompare(String(a.name ?? "")),
      );
    }

    return result;
  }, [products, searchQuery, activeCategory, minPrice, maxPrice, sortOption]);

  // ============================================
  // HANDLERS
  // ============================================

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    updateUrl({
      category,
    });
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMinPrice(value);

    updateUrl({
      minPrice: value,
    });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMaxPrice(value);

    updateUrl({
      maxPrice: value,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setSortOption(value);

    updateUrl({
      sort: value,
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All Categories");
    setMinPrice("");
    setMaxPrice("");
    setSortOption("Newest");

    router.push(pathname);
  };

  // ============================================
  // LOADING
  // ============================================
  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-center items-center min-h-75">
            <p className="text-gray-500 text-lg">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // ERROR
  // ============================================
  if (error) {
    return (
      <div className="min-h-screen w-full bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-center items-center min-h-75">
            <p className="text-red-500 text-lg">Failed to load products.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#faf7f2]">
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* ========================================
          HEADER
      ======================================== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>

            <p className="text-gray-500 mt-1">
              {searchQuery
                ? `Search results for "${searchQuery}"`
                : "Browse our products"}
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-600">
              Sort:
            </label>

            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            >
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Name: A-Z">Name: A-Z</option>
              <option value="Name: Z-A">Name: Z-A</option>
            </select>
          </div>
        </div>

        {/* ========================================
          SEARCH RESULT INFO
      ======================================== */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredProducts.length}
              </span>{" "}
              product
              {filteredProducts.length !== 1 ? "s" : ""} for{" "}
              <span className="font-semibold text-gray-900">
                "{searchQuery}"
              </span>
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                updateUrl({
                  search: "",
                });
              }}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ========================================
          MOBILE FILTER BUTTON
      ======================================== */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden w-full mb-4 border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
          {/* ======================================
            SIDEBAR
        ====================================== */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="border border-gray-200 rounded-2xl p-5 sticky top-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-gray-900">Filters</h2>

                <button
                  onClick={clearFilters}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Clear
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-gray-800">
                  Categories
                </h3>

                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                        activeCategory === category
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mt-7">
                <h3 className="text-sm font-semibold mb-3 text-gray-800">
                  Price
                </h3>

                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                  />

                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* ======================================
            PRODUCTS
        ====================================== */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="min-h-75 flex flex-col justify-center items-center text-center border border-dashed border-gray-300 rounded-2xl">
                <h2 className="text-xl font-semibold text-gray-800">
                  No products found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try another search or change your filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-5 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-500">
                  {filteredProducts.length} products
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCm;
