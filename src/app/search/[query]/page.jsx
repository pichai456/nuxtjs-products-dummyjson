"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function ProductsData() {
  const param = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApiProductsSearch = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${param.query}`
      );
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApiProductsSearch();
  }, []);

  return (
    <div className="container text-center mx-auto">
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-5">
            {products.map((val, index) => (
              <Link
                key={val.title}
                href="/product/[id]"
                as={`/product/${val.id}`}
              >
                <div className="shadow-lg rounded-lg mx-10 my-5 p-3  flex flex-col items-center justify-start min-w-56 max-w-xs">
                  <div className="relative w-56 h-56 rounded-lg">
                    <Image
                      className="items-start justify-start rounded-lg"
                      src={val.thumbnail}
                      layout="fill"
                      objectFit="contain"
                      alt="img product"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-2 line-clamp-1">
                    {val.title}
                  </h3>
                  <p className="text-base text-gray-400 mt-2 line-clamp-2">
                    {val.description}
                  </p>
                  <div className="flex flex-row w-full justify-between mt-2">
                    <h4 className="text-base font-semibold text-red-800">
                      ฿ {val.price}
                    </h4>
                    <h4 className="text-base font-semibold ">
                      Rating: {val.rating}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsData;
