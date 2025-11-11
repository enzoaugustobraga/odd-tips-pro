import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { tipsByBookmaker } from "@/data/tips-data";

// Cores das casas de apostas
const bookmakerColors = {
  bet365: {
    gradient: "from-green-600 to-green-800",
    bg: "bg-green-600/10",
    border: "border-green-600",
    text: "text-green-600",
    badge: "bg-green-600/20 text-green-700 border-green-600/30"
  },
  betano: {
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500",
    text: "text-orange-500",
    badge: "bg-orange-500/20 text-orange-600 border-orange-500/30"
  },
  mgm: {
    gradient: "from-yellow-500 to-yellow-600",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500",
    text: "text-yellow-500",
    badge: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
  },
  kto: {
    gradient: "from-red-600 to-red-800",
    bg: "bg-red-600/10",
    border: "border-red-600",
    text: "text-red-600",
    badge: "bg-red-600/20 text-red-700 border-red-600/30"
  }
};

const Tips = () => {
  const [activeTab, setActiveTab] = useState("betano");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Dicas do Dia</h1>
        <p className="text-muted-foreground">Análises detalhadas para suas apostas</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 h-auto">
          <TabsTrigger 
            value="betano" 
            className="font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
          >
            Betano
          </TabsTrigger>
          <TabsTrigger 
            value="bet365" 
            className="font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-800 data-[state=active]:text-white"
          >
            Bet365
          </TabsTrigger>
          <TabsTrigger 
            value="mgm" 
            className="font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white"
          >
            MGM
          </TabsTrigger>
          <TabsTrigger 
            value="kto" 
            className="font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-800 data-[state=active]:text-white"
          >
            KTO
          </TabsTrigger>
        </TabsList>

        {Object.entries(tipsByBookmaker).map(([bookmaker, tips]) => {
          const colors = bookmakerColors[bookmaker as keyof typeof bookmakerColors];
          return (
            <TabsContent key={bookmaker} value={bookmaker} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tips.map((tip, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all duration-200 border-l-4 ${colors.border} ${colors.bg}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{tip.match}</CardTitle>
                          <CardDescription className="text-sm">{tip.league}</CardDescription>
                        </div>
                        <TrendingUp className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={`font-semibold border ${colors.badge}`}>
                          {tip.betType}
                        </Badge>
                        <Badge className={`font-bold border-2 ${colors.text} ${colors.border} bg-transparent`}>
                          Odds: {tip.odds}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tip.analysis}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          ⚠️ As dicas são baseadas em análises estatísticas e não garantem resultados.
          <br />
          Aposte com responsabilidade.
        </p>
      </div>
    </div>
  );
};

export default Tips;
