import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Carrers", href: "#carrers" },
    { label: "Events", href: "#events" },
    { label: "Products", href: "#products" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className="px-4 py-8 fixed top-0 inset-x-0 z-20 lg:max-w-10/12 lg:mx-auto lg:py-20">
      <Sheet>
        <div className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-white alata text-3xl font-bold lg:text-5xl">loopstudios</h1>
          </a>

          <SheetTrigger className="lg:hidden">
            <Button className="bg-transparent ">
              <Menu />
            </Button>
          </SheetTrigger>

          <nav className="hidden lg:flex gap-8 items-center text-white alata text-xl">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <SheetContent className="lg:hidden py-10 px-5 bg-black/80 border-0 border-black text-white">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-xl">
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
