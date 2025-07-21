import Image from "next/image";
import { Container } from "@/components/Container";
import { FaWhatsapp } from "react-icons/fa";
import imgHero from "@/../public/img/imgHero.png";
import imgHero2 from "@/../public/img/imgHero2.png";
import imgHero3 from "@/../public/img/imgHero3.png";
import imgHero4 from "@/../public/img/imgHero4.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-col md:flex-row pt-14">
        <div className="flex items-center w-full lg:w-1/2 lg:ml-7">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:leading-tight dark:text-white text-center md:text-start">
              Mendorong Pertumbuhan Ekonomi Lewat Properti & Ekspor Unggulan
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 xl:text-xl dark:text-gray-300 text-center md:text-start">
              Berkah Ciptha Nusa adalah pelaku usaha di bidang properti dan ekspor produk lokal seperti dekorasi rumah, fashion, dan F&B.
            </p>

            <div className="flex flex-col items-center md:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://api.whatsapp.com/send?phone=6289668686789&text=Halo, Admin Berkah Ciptha Nusa! Saya Ingin bertanya lebih lanjut."
                target="_blank"
                rel="noopener"
                className="px-4 py-3 md:px-6 md:py-4 text-md md:text-lg font-medium text-center text-white bg-[#910705] hover:bg-[#910705b5] dark:text-[#213559] dark:bg-white rounded-md flex items-center justify-center gap-2">
                Info Lebih Lanjut
                <FaWhatsapp className="text-xl md:text-2xl"/>
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:p-8">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-center bg-gray-100 shadow-md">
              <Image src={imgHero} alt="Furniture Image" width={300} height={300} className=" object-cover"></Image>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-bl-[90px] lg:rounded-bl-[100px] shadow-md">
              <Image src={imgHero2} alt="Furniture Image" width={300} height={300} className=" object-cover "></Image>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-tr-[90px] lg:rounded-tr-[100px] shadow-md">
              <Image src={imgHero3} alt="Furniture Image" width={300} height={300} className=" object-cover"></Image>
            </div>
            <div className="flex items-center justify-center bg-gray-100 shadow-md">
              <Image src={imgHero4} alt="Furniture Image" width={300} height={300} className=" object-cover"></Image>
            </div>
          </div>
        </div>
      </Container>
    
    </>
  );
}

