import Link from "next/link";
import react from "react";
import Image from "next/image";
import logo from "../public/shared/logo.svg";

export default function Navbar() {
  const navItems = [
    { id: "00", description: " Home", path: "/" },
    { id: "01", description: " Curiosity", path: "/Curiosity" },
    { id: "02", description: " Opportunity", path: "/Opportunity" },
    { id: "03", description: " Spirit", path: "/Spirit" },
  ];
  const createNavItems = react.Children.toArray(
    navItems.map((item) => {
      return (
        <Link href={item.path}>
          <a className="p-6">
            <span className="font-bold">{item.id}</span>
            {item.description}
          </a>
        </Link>
      );
    })
  );

  return (
    <nav className="flex justify-evenly items-center py-12 text-nav tracking-nav font-barlow w-full text-p-white">
      <div className="w-1/3 pl-14">
        <Image src={logo} alt="Company logo"></Image>
      </div>
      <div className="w-2/3">
        <div className="flex justify-around z-10 bg-p-white/[0.04] p-12 backdrop-blur-3xl">
          {createNavItems}
        </div>
      </div>
    </nav>
  );
}
