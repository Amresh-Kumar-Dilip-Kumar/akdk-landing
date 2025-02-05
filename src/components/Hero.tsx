import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-20/ font-baloo-bhai-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="flex flex-col gap-6 text-left">
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-lg leading-tight">
                    Transform Your <span className="text-orange-600">Digital Presence</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed">
                    At <strong>AKDK Digital</strong>, we craft innovative web applications that elevate your business. Our expert team ensures seamless functionality and engaging user experiences tailored to your needs.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button
                        size="lg"
                        className="text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-medium shadow border border-orange-500 transition-all"
                        variant="outline"
                    >
                        View Portfolio
                    </Button>
                    <Button
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-all"
                        variant="default"
                    >
                        Explore Services <MoveRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
                <img
                    src="/hero.webp"
                    alt="Hero Image"
                    className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                />
            </div>

        </div>
    </div>
);
