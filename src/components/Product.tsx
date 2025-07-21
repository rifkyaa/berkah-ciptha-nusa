"use client";
import { Container } from "./Container";
import { useState } from "react";
import Image from "next/image";

const dataProject = [
  {
    id: 1,
    srcGambar: "/img/imgProduct.png",
    kategori: "fashion",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    srcGambar: "/img/imgProduct2.png",
    kategori: "fashion",
    span: "col-span-2 row-span-2",
  },
  {
    id: 3,
    srcGambar: "/img/imgProduct3.jpg",
    kategori: "fashion",
    span: "col-span-2 row-span-2",
  },
  {
    id: 4,
    srcGambar: "/img/imgProduct4.png",
    kategori: "home decoration",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    srcGambar: "/img/imgProduct5.jpg",
    kategori: "home decoration",
    span: "col-span-2 row-span-2",
  },
  {
    id: 6,
    srcGambar: "/img/imgProduct6.jpg",
    kategori: "food & beverage",
    span: "col-span-2 row-span-1",
  },
  {
    id: 7,
    srcGambar: "/img/imgProduct7.jpg",
    kategori: "home decoration",
    span: "col-span-2 row-span-2",
  },
  {
    id: 8,
    srcGambar: "/img/imgProduct8.jpg",
    kategori: "furniture",
    span: "col-span-2 row-span-2",
  },
];

const categories = ["all", "furniture", "home decoration", "fashion", "food & beverage"];

export const Product = () => {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? dataProject
      : dataProject.filter((item) => item.kategori === filter);

  return (
    <Container className="!p-0">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl p-4 mx-auto">
        {/* Tombol Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                filter === cat
                  ? "bg-[#910705]  text-white"
                  : "bg-gray-100 dark:text-trueGray-900 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Project Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-md shadow-sm ${item.span}`}
            >
              <Image
                src={item.srcGambar}
                alt={item.kategori}
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
