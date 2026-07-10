import iconFacebook from "@/images/icon-facebook.svg";
import iconInstagram from "@/images/icon-instagram.svg";
import iconPinterest from "@/images/icon-pinterest.svg";
import iconTwitter from "@/images/icon-twitter.svg";
export default function Footer() {
  const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Carrers", href: "#carrers" },
    { label: "Events", href: "#events" },
    { label: "Products", href: "#products" },
    { label: "Support", href: "#support" },
  ];

  const SOCIAL_ITEMS = [
    { label: "Facebook", href: "#facebook", icon: iconFacebook },
    { label: "Instagram", href: "#instagram", icon: iconInstagram },
    { label: "Pinterest", href: "#pinterest", icon: iconPinterest },
    { label: "Twitter", href: "#twitter", icon: iconTwitter },
  ];

  return (
    <footer className="bg-black py-8 px-4 lg:px-24 lg:py-20 ">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0 lg:justify-between lg:items-center w-full lg:max-w-10/12 lg:mx-auto">
          <div>
              <a href="#">
                <h1 className="text-white alata text-3xl font-bold mb-5">
                  loopstudios
                </h1>
              </a>
              <nav className="flex flex-col gap-8 items-center text-white alata text-xl lg:flex-row lg:gap-12">
                {NAV_ITEMS.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
          </div>
          <div className="flex flex-col ">
              <div className="flex justify-center items-center gap-4 my-5 lg:justify-end">
                {SOCIAL_ITEMS.map((item) => (
                  <a key={item.label} href={item.href} className="mx-2">
                    <img src={item.icon} alt={item.label} />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 alata text-lg">
                &copy; 2021 Loopstudios. All rights reserved.
              </p>
          </div>
      </div>
    </footer>
  );
}
