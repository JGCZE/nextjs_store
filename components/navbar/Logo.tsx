import Image from "next/image";

const Logo = async () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://cdn.pixabay.com/photo/2024/02/23/20/43/ai-generated-8592766_960_720.png"
        alt=""
        width={50}
        height={50}
      />
      <h1 className="pl-3 font-extrabold text-xl text-gray-600">
        Logo of company
      </h1>
    </div>
  );
};

export default Logo;
