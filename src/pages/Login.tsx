import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, HelpCircle, Info } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password === "apostador10") {
      toast.success("Login realizado com sucesso!");
      navigate("/tips");
    } else {
      setError("Senha incorreta. Tente novamente.");
      toast.error("Senha incorreta");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Panel */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-8">
            <Link
              to="/faq"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Dúvidas e Cadastro</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <Link
              to="/about"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Info className="h-4 w-4" />
              <span>Conheça nosso serviço</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold text-primary">OddTips</CardTitle>
            <CardDescription className="text-base mt-2">
              Dicas profissionais de apostas de futebol
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && (
                <p className="text-sm text-destructive font-medium">{error}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default Login;
