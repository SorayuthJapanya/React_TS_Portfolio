
interface portfoiloCardProps {
  name: string;
  image: string;
  url: string;
  domain: string;
  category: string[];
  year: number;
}

export const PortflioCard = ({
  name,
  image,
  url,
  domain,
  category,
  year,
}: portfoiloCardProps) => {
  return (
    <a
      href={url}
      className="bg-gradient-to-r from-secondary to-indigo-600 rounded-3xl z-50 p-px transform transition-all hover:scale-101 cursor-pointer duration-300 hover:bg-gradient-to-l"
    >
      <div className="p-3 sm:p-4 rounded-3xl relative bg-primary space-y-3 text-center h-full">
        <div className="flex flex-col justify-start gap-2">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl border border-gray-600">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 my-4 text-white font-semibold">
            {/* ชื่อโดเมน */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
              {domain}
            </h2>

            {/* หมวดหมู่ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 items-center">
              {category.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs  rounded-full bg-gradient-to-r from-indigo-500 to-violet-700 shadow-md text-center"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* ปี */}
            <p className="text-base font-medium text-gray-300">{year}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
