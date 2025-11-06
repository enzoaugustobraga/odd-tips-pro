import { Link, useLocation } from "react-router-dom";
import { Trophy } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/tips", label: "Dicas" },
    { path: "/faq", label: "Dúvidas" },
    { path: "/about", label: "Sobre Nós" },
  ];

  // Don't show header on login page
  if (location.pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/tips" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Trophy className="h-6 w-6" />
            <span>OddTips</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
