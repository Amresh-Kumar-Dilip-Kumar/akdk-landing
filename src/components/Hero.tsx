import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Hero = () => (
    <div className="w-full max-w-[1440px] mx-auto py-20 lg:py-40 font-baloo-bhai-2">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                <div className="flex gap-4 flex-col">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                            Transform Your <span className="text-orange-600"> Digital Presence</span>
                        </h1>
                        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left text-[#000000]">
                            At AKDK Digital, we craft innovative web applications that elevate your business. Our expert team ensures seamless functionality and engaging user experiences tailored to your needs.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button size="lg" className="gap-4 text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-normal shadow border border-orange-500" variant="outline">
                            View Portfolio
                        </Button>
                        <Button size="lg" className="gap-4 bg-orange-600 hover:bg-orange-500 text-white" variant="default">
                            Explore Service <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/hero.webp" alt="" className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]" />
                </div>
            </div>
        </div>
    </div>
);
