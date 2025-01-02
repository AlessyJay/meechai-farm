"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Globe, Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 w-[70%] items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle />
          <SheetContent className="pl-1 pr-0">
            <div className="px-7">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-serif text-xl font-bold">
                  Meechai Farm
                </span>
              </Link>
            </div>
            <nav className="mt-4 flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive =
                  (pathname.includes(item.href) && pathname.length > 1) ||
                  pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    whileHover={{ x: 5 }}
                    className="px-7"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && <Check className="size-4 text-green-600" />}
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </SheetContent>
          <SheetDescription />
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-serif text-xl font-bold">Meechai Farm</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => {
              const isActive =
                (pathname.includes(item.href) && pathname.length > 1) ||
                pathname === item.href;
              return (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-green-900 focus:bg-green-50 focus:text-green-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-50/50 data-[state=open]:bg-green-50/50 ${isActive ? "bg-green-100 text-green-900" : "hover:bg-green-200"}`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                      >
                        {isActive && (
                          <Check className="size-4 text-green-600" />
                        )}
                        {item.label}
                      </motion.span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex w-fit flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Globe className="size-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
