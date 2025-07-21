import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { navigation } from "@/components/dataLink"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div className="relative  border-t border-gray-100 dark:border-trueGray-700">
      <Container>
        <div className="grid mx-6 max-w-screen-xl grid-cols-1 gap-10 pt-10 mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-trueGray-900 dark:text-gray-100"
              >
                <Image
                  src="/img/logoBCN.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Berkah Ciptha Nusa</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Berkah Ciptha Nusha adalah pelaku usaha di bidang properti dan ekspor produk lokal seperti dekorasi rumah, fashion, dan F&B.
            </div>
            <div>
              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                <a
                  href="https://www.instagram.com/berkahciptha/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2"
                >
                  <FaInstagram className="text-3xl"/>
                  <span>Berkah Ciptha Nusa</span>
                </a>
              </div>

              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                <a
                  href="https://api.whatsapp.com/send?phone=6289668686789&text=Halo, Admin Berkah Ciptha Nusa! Saya Ingin bertanya lebih lanjut."
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-3xl"/>
                  <span>089668686789</span>
                </a>
              </div>

              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                <a
                  href="mailto:berkahcipthanusa@gmail.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2"
                >
                  <MdEmail className="text-3xl"/>
                  <span>berkahcipthanusa@gmail.com</span>
                </a>
              </div>

              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                <a
                  href="https://share.google/snLAOKbHzEa7nnWTR"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2"
                >
                  <CiLocationOn className="text-3xl"/>
                  <span>Jl.Sersan Bajuri no 108 Bandung Jawa Barat</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#910705] dark:hover:text-trueGray-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Berkah Ciptha Nusa{" "}
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

