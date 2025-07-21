import { Container } from "./Container";
import Image from "next/image";

const dataProject = [
  {
    id: 1,
    srcGambar: "/img/imgProject.png",
  },
  {
    id: 2,
    srcGambar: "/img/imgProject2.png",
  },
  {
    id: 3,
    srcGambar: "/img/imgProject3.png",
  },
  {
    id: 4,
    srcGambar: "/img/imgProject4.png",
  },
];


export const Project = () => {
  return (
    <Container className="!p-0">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl p-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full lg:w-1/2 ">
        {dataProject.map((item) => (
            <div
            key={item.id}
            className="overflow-hidden rounded-md shadow-lg w-full"
            >
            <Image
                src={item.srcGambar}
                alt="Project Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-[25rem] hover:scale-105 transition-transform duration-300"
            ></Image>
            </div>
        ))}
        </div>
      </div>
    </Container>
  );
};
