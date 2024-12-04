import { navigationLinks } from "@/utils/links";
import Link from "next/link";

const Navigation = async () => {
  return (
    <div>
      {navigationLinks.map((nav) => {
        return (
          <Link
            href={nav.href}
            key={nav.id}
            className="mx-4 text-xl font-bold text-gray-600 hover:text-black hover:underline dark:text-gray-200 dark:hover:text-white"
          >
            {nav.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
