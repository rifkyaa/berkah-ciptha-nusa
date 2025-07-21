import { Container } from "./Container";

export const About = () => {
  return (
    <Container className="!p-0">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl p-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <div className="flex flex-col items-start justify-items-center gap-2 bg-gray-100 w-full h-full p-8 rounded-lg shadow-md">
                <h1 className="text-4xl text-gray-500">Visi</h1>
                <p className="text-gray-500">Menjadi perusahaan terkemuka di Indonesia yang menyediakan kebutuhan hunian, gaya hidup, dan investasi properti, dengan mengedepankan kualitas,inovasi, dan kepuasan pelanggan.</p>
            </div>
            <div className="flex flex-col items-start justify-items-center gap-2 bg-gray-100 w-full h-full p-8 rounded-lg shadow-md">
                <h1 className="text-4xl text-gray-500">Misi</h1>
                <ul className="text-gray-500 list-disc list-inside">
                    <li>Memberikan produk furnitur,dekorasi rumah, dan fashion berkualitas tinggi dengan desain inovatif dan harga kompetitif.</li>
                    <li>Mengembangkan properti yang berkualitas dan dengan lokasi yang strategis.</li>
                    <li>Membangun hubungan jangka panjang yang kuat dengan pelanggan, pemasok,dan karyawan.</li>
                    <li>Berkontribusi pada perekonomian Indonesia melalui penciptaan lapangan kerja dan pengembangan usaha yang berkelanjutan.</li>
                </ul>
            </div>
        </div>
      </div>
    </Container>
  );
};
