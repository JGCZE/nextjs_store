import { getProducts } from "@/utils/actions";
import Image from "next/image";

const Blog = async () => {
  const response = await getProducts();

  return (
    <section>
      Blog
      {response.map((item) => {
        return (
          <div key={item.id}>
            <Image src={item.image} width={140} height={140} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
