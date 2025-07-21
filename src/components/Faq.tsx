"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        !open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#910705] dark:text-white`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Apa saja lini bisnis yang dijalankan oleh perusahaan ini?",
    answer: "Kami berfokus di lima bidang utama: Furniture, Home Decoration, Fashion, Property, dan Food & Beverage (F&B). Setiap lini dikembangkan dengan standar kualitas dan inovasi yang tinggi.",
  },
  {
    question: "Apakah perusahaan menerima pesanan custom (desain khusus)?",
    answer: "Tentu! Kami menerima pesanan custom, terutama untuk produk furniture dan batik. Tim kami siap membantu mewujudkan desain sesuai kebutuhan Anda.",
  },
  {
    question: "Di mana lokasi kantor atau showroom perusahaan?",
    answer: "Alamat lengkap di Jl.Sersan Bajuri no 108 Bandung Jawa Barat. Silakan kunjungi langsung atau buat janji temu terlebih dahulu.",
  },
  {
    question: "Apakah ada garansi untuk produk yang dibeli?",
    answer:
      "Ya, kami memberikan garansi untuk produk tertentu. Informasi garansi akan disampaikan saat pembelian atau pemesanan dilakukan.",
  },
];
