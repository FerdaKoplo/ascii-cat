interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative text-center z-10">
      <div className="relative flex flex-col  justify-end items-end">
        <h1 className="text-9xl font-bold tracking-tight mb-2 uppercase [-webkit-text-stroke:1px_#000000] text-transparent relative z-10">
          {title}
        </h1>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5 text-7xl font-bold tracking-tight text-gray-900 uppercase z-20 w-full">
          {title}
        </h1>
      </div>
      <p className="text-gray-500 font-mono text-sm mt-4">{subtitle}</p>
    </div>
  );
};

export default TitleHeader;
