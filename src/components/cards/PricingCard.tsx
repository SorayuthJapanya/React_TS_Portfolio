import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
}

export const PricingCard = ({
  title,
  price,
  subtitle,
  features,
}: PricingCardProps) => {
  return (
    <div className="relative group h-full flex flex-col ">
      <div className="flex flex-col flex-grow bg-gradient-to-r from-secondary to-indigo-600 rounded-3xl z-50 p-px transform transition-all hover:scale-101 cursor-pointer duration-300 hover:bg-gradient-to-l">
        <div className="p-3 sm:p-4 rounded-3xl relative bg-primary group-hover:bg-black/50 transition-colors duration-600 flex flex-col flex-grow text-start">
          <div className="flex flex-col justify-start gap-4 p-2 sm:p-3 flex-grow">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white/80">{title}</h3>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary group-hover:text-emerald-300 transition-colors duration-300">
                {price}
              </h1>
              <p className="text-base sm:text-lg text-white/80">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {features.map((feature, index) => (
                <label key={index} className="flex gap-2 items-center">
                  <CheckCircle className="size-5 text-secondary mt-1 group-hover:text-emerald-300 transition-colors duration-300" />
                  <p className="text-base sm:text-lg text-white/80">{feature}</p>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
