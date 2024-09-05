'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import logo from '../../assests/logo.png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "home",
    "about",
    "contact"
  ];

  return (
    <Navbar className="bg-white" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} width={200}/>
          {/* <AcmeLogo /> */}
          {/* <h1 className="font-bold text-inherit text-[28px] text-[#000000]">Sas Corporation</h1> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 text-black" justify="center">
        <NavbarItem>
          <Link color="" className="text-black" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" className="text-black" href="/contact">
              Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-[#05B804] text-white" target="_blank" as={Link} href="https://calendly.com/ashraful-islam-asfu" variant="flat">
            Call
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-20 flex items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link

              className="mt-4 w-full text-black"
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <Button className="mt-10 bg-[#05B804] text-white" as={Link} href="#" variant="flat">
            Call
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
