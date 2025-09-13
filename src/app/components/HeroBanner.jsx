import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import ShortCarousel from "@/app/components/ShortCarousel";



export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden mb-8 ">
      <div className="relative flex items-center justify-between p-6 md:p-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            WAN 2.2
          </h1>

          <main className="flex flex-col lg:flex-row items-start gap-5">
            
            <Carousel />
            <div>
              <ShortCarousel />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
