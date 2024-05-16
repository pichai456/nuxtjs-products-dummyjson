"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
function ProductDetailPage() {
  const param = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApiProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${param.id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApiProducts();
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <div className="container mx-auto bg-white p-3 mt-10">
        <div className="flex flex-row justify-around">
          {loading ? (
            <p className="">Loading...</p>
          ) : (
            <>
              <div className="rounded-md p-10">
                <Image
                  src={product?.thumbnail}
                  width={500}
                  height={500}
                  alt="img product"
                />
              </div>
              <div className="p-10">
                <h2 className="text-3xl font-semibold">{product?.title}</h2>
                <p className="text-red-500 mt-4">Rating : {product?.rating}</p>
                <div className="px-8 py-4 bg-gray-100 rounded-sm mt-4">
                  <p className="text-3xl text-red-500 mt-4">
                    ฿ {product?.price}
                  </p>
                </div>
                <p className="text-gray-500 mt-4">{product?.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
