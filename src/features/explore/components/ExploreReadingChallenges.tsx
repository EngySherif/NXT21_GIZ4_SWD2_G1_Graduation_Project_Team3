import { Card } from "@/shared/components/ui";
import { ProgressBar } from "@/shared/components/ui";

interface Props {
    icon: string;
    iconName: string;
    pepJoined: string;
    year: number;
    title: string;
    description: string;
    booksRead: number;
    booksGoal: number;
    colors: {
        bgCard: string;       
        badgeBg: string;      
        iconColor: string;    
        btnBg: string;       
        btnText: string;      
    }
}

export function ExploreReadingChallenge ({
    icon, iconName, pepJoined, year, title, description, booksRead, booksGoal, colors}: Props) {
    const progressPercent = (booksRead / booksGoal) * 100;
    return (
        <Card 
            as="section" 
            className={`relative overflow-hidden p-5 text-white flex flex-col gap-4 rounded-2xl shadow-md flex-1 min-w-[320px] bg-transparent! border-none!`}
        >
            <div className={`absolute inset-0 -z-10 ${colors.bgCard}`} />
            <div className="flex justify-between items-center w-full relative z-10">
                <span className={`${icon} text-2xl`}>
                    {iconName}
                </span>
                <span 
                    className={`text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full ${colors.badgeBg}`}
                >
                    {pepJoined}
                </span>
            </div>

            
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            <div className="relative z-10">
                <h2 className="text-xl font-bold tracking-wide text-white">{year} {title}</h2>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">{description}</p>
            </div>
            <div className="relative z-10 flex justify-between items-end text-xs font-semibold mt-2">
                <span className="font-bold tracking-wide text-white">Progress</span>
                <div className="flex items-baseline gap-1">
                    <span className="font-bold tracking-wide text-white ">{booksRead}</span>
                    <span className="font-bold tracking-wide text-white">/{booksGoal} Books</span>
                </div>
            </div>
            <ProgressBar
                value={progressPercent}
                className="relative z-10 bg-white/10!"
                barClassName="!bg-[#fecb97]" 
            />            
            <button 
                className={`w-full font-bold text-sm py-2.5 rounded-xl transition-colors opacity-95 hover:opacity-100 mt-auto shadow-sm ${colors.btnBg} ${colors.btnText}`}
            >
                Join Challenge
            </button>
        </Card>
    );
}