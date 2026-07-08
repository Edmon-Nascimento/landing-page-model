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
    <footer className="bg-black flex flex-col lg:flex-row justify-between items-center gap-8 py-8 px-4 lg:px-24">
      <a href="#">
        <h1 className="text-white alata text-3xl font-bold mb-5">
          loopstudios
        </h1>
      </a>

      <nav className="flex flex-col gap-8 items-center text-white alata text-xl">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex justify-center items-center gap-4 mt-5">
        {SOCIAL_ITEMS.map((item) => (
          <a key={item.label} href={item.href} className="mx-2">
            <img src={item.icon} alt={item.label} />
          </a>
        ))}
      </div>

      <p className="text-white alata text-lg">
        &copy; 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}
