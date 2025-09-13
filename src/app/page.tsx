
import icon from "@/app/assets/images/kicon.png";
import Image from "next/image";
import icon2 from "@/app/assets/images/mobbin.png";
import HeroBanner from "@/app/components/HeroBanner";
import FeatureCard from "@/app/components/FeatureCard";
import { 
  Image as ImageIcon,
  Video as VideoIcon,
  Zap as RealtimeIcon,
  Sparkles as EnhancerIcon,
  Edit as EditIcon,
  Mic as VideoLipsyncIcon,
  Move as MotionTransferIcon,
  Cpu as TrainIcon
} from "lucide-react";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4 shadow-lg  rounded-lg ">
      <Sidebar />
      <HeroBanner />

      {/* Generate Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Generate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={
              <ImageIcon className="w-8 h-8" style={{ color: "#FF6B6B" }} />
            }
            title="Image"
            desc="Generate images with custom styles in Flux and Ideogram."
            newTag={true}
          />

          <FeatureCard
            icon={<VideoIcon className="w-8 h-8 text-blue-600" />}
            title="Video"
            desc="Generate videos with Halus, Pika, Runway, Luma, and more."
            newTag={false}
          />

          <FeatureCard
            icon={<RealtimeIcon className="w-8 h-8 text-yellow-600" />}
            title="Realtime"
            desc="Realtime AI rendering on a canvas. Instant feedback loops."
            newTag={true}
          />

          <FeatureCard
            icon={<EnhancerIcon className="w-8 h-8 text-purple-600" />}
            title="Enhancer"
            desc="Upscale and enhance images and videos up to 22K."
            newTag={true}
          />

          <FeatureCard
            icon={<EditIcon className="w-8 h-8 text-green-600" />}
            title="Edit"
            desc="Add objects, change style, or expand photos and generations."
            newTag={true}
          />

          <FeatureCard
            icon={<VideoLipsyncIcon className="w-8 h-8 text-pink-600" />}
            title="Video Lip-sync"
            desc="Lip sync any video to any audio."
            newTag={true}
          />

          <FeatureCard
            icon={<MotionTransferIcon className="w-8 h-8 text-indigo-600" />}
            title="Motion Transfer"
            desc="Transfer motion to images and animate characters."
            newTag={true}
          />

          <FeatureCard
            icon={<TrainIcon className="w-8 h-8 text-orange-600" />}
            title="Train"
            desc="Teach Krea to replicate your style, products, or characters."
            newTag={false}
          />
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-semibold">General</p>
          <p className="font-semibold">logout</p>
        </div>
      </section>

      {/* Gallery Section */}

      {/* Footer */}
      <footer className="mt-4 pb-2 border-t border-gray-200 pt-3 bg-black text-center text-sm text-gray-600">
        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center">
            <Image src={icon} alt="icons" width={18} height={4} />
            <span className="ml-2 font-semibold">Krea AI</span>
          </div>

          <div className="flex items-center space-x-2 text-white">
            <span>curated by</span>
            <div className="flex items-center text-gray-900">
              <Image src={icon2} alt="" width={18} height={4} />
              <span className="ml-2 font-semibold">Mobbin</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

