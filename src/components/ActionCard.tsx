import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface ActionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: "green" | "blue";
  href: string;
}

export const ActionCard = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  color, 
  href 
}: ActionCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to ${href}`);
    navigate(href);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        "border-2 border-transparent hover:border-white/20",
        "transform-gpu will-change-transform",
        color === "green" 
          ? "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500" 
          : "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500"
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 transform -translate-x-12 translate-y-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-lg font-medium opacity-90">
            {subtitle}
          </p>
          <p className="text-sm opacity-80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="mt-6 flex justify-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:translate-x-1">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};