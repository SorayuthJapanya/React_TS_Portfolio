interface serviceProps {
  id: string;
  title: string;
  description: string;
}

export const Service = ({ id, title, description }: serviceProps) => {
  return (
    <div
      className="bg-gradient-to-r from-secondary to-indigo-600 rounded-3xl z-50 p-px transform transition-all hover:scale-101 cursor-pointer duration-300 hover:bg-gradient-to-l"
    >
      <div className="p-5 sm:p-6 rounded-3xl relative bg-primary space-y-3 text-center h-full">
        <div className="flex flex-col items-center gap-2">
          <h3 className="w-max text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-secondary">
            {id}
          </h3>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
        <p className="text-lg text-white/80">{description}</p>
      </div>
    </div>
  );
};
