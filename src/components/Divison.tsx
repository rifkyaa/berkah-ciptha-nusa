import { Container } from "./Container"
import {
  FaCouch,
  FaPaintRoller,
  FaBuilding,
  FaUtensils,
} from 'react-icons/fa';

import { GiClothes } from 'react-icons/gi';

const divisions = [
  {
    name: 'Furniture & Decoration',
    icon: <FaCouch className="text-4xl" />,
    description:
      'Furniture dan dekorasi berkualitas tinggi untuk rumah, kantor, dan ruang komersial. Dari desain klasik hingga modern, setiap detail dibuat dengan material terbaik untuk mempercantik dan memperkuat karakter ruang Anda.',
  },
  {
    name: 'Fashion',
    icon: <GiClothes className="text-4xl" />,
    description:
      'Produk fashion trendi dan nyaman, mulai dari pakaian, aksesori, hingga batik untuk pria dan wanita.',
  },
  {
    name: 'Property',
    icon: <FaBuilding className="text-4xl" />,
    description:
      'Pengembangan dan pengelolaan properti berkelanjutan, mencakup hunian dan komersial dengan lokasi strategis dan desain modern.',
  },
  {
    name: 'Food & Beverage',
    icon: <FaUtensils className="text-4xl" />,
    description:
      'Menyediakan berbagai produk seperti kopi, teh, dan minuman lainnya, dengan cita rasa berkualitas untuk menemani setiap momen Anda.',
  },
];

export const Division = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {divisions.map((div, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-center mb-3 text-trueGray-900">{div.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center dark:text-trueGray-900">{div.name}</h3>
              <p className="text-sm text-gray-600 text-center">{div.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

