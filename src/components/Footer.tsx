import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        {isLoginPage && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Link
              to="/faq"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Dúvidas e Cadastro
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Conheça nosso serviço
            </Link>
          </div>
        )}
        <div className="text-center text-sm text-muted-foreground">
          <p>BM OddTips © 2025 — Aposte com responsabilidade.</p>
          <p className="text-xs mt-1">Proibido para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
