import dayboard from "@/public/home/dayborder.png";
import Image from "next/image";

export default function DevelopNoteDaybar() {
    const dayoftheweek = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <div className="w-full bg-gray-200 flex justify-center">
            {dayoftheweek.map((item, index) => (
                <button className=" w-48 relative overflow-hidden" key={index}>
                    <Image src={dayboard} alt="" className="w-full h-full object-cover" />
                    <p className="absolute w-full font-['dalmoori']  bottom-2 inset-x-6 text-2xl text-xs text-start leading-4">
                        {item}
                    </p>
                </button>
            ))}
        </div>
    );
}
