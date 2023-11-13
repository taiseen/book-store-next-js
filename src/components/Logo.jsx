import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex flex-row items-center leading:none text-white">
      <SparklesIcon className="w-12 h-12" />

      <p className="text-[20px] ml-1">Book Store</p>
    </div>
  );
};

export default Logo;
