"use client";
import { useStoreContext } from "@/context/provider";
import routes from "@/constants/routes";
import Link from "next/link";

const NavLinks = () => {
  const { cartData } = useStoreContext();

  return (
    <>
      {routes.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            {link.name === "Cart" && cartData.length > 0 ? (
              `${link.name} (${cartData.length})`
            ) : (
              <p className="hidden md:block">{link.name}</p>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
