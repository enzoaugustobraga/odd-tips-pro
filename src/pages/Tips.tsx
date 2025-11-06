import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface Tip {
  match: string;
  league: string;
  betType: string;
  odds: string;
  analysis: string;
}

const Tips = () => {
  const tipsByBookmaker: Record<string, Tip[]> = {
    betano: [
      {
        match: "Flamengo x Palmeiras",
        league: "Brasileirão Série A",
        betType: "Mais de 2.5 gols",
        odds: "1.85",
        analysis: "Ambas as equipes apresentam ataques fortes e defesas inconsistentes nas últimas partidas. Histórico recente mostra média de 3.2 gols por jogo entre elas.",
      },
      {
        match: "São Paulo x Corinthians",
        league: "Brasileirão Série A",
        betType: "Ambos marcam",
        odds: "1.75",
        analysis: "Derby paulista sempre movimentado. As duas equipes marcaram em 4 dos últimos 5 confrontos diretos.",
      },
      {
        match: "Internacional x Grêmio",
        league: "Brasileirão Série A",
        betType: "Casa vence",
        odds: "2.10",
        analysis: "Internacional com forte desempenho em casa, vencendo 7 dos últimos 10 jogos no Beira-Rio. Grêmio com problemas defensivos fora de casa.",
      },
    ],
    bet365: [
      {
        match: "Real Madrid x Barcelona",
        league: "La Liga",
        betType: "Mais de 2.5 gols",
        odds: "1.90",
        analysis: "El Clásico historicamente com muitos gols. Média de 3.5 gols nos últimos 8 confrontos diretos.",
      },
      {
        match: "Manchester City x Liverpool",
        league: "Premier League",
        betType: "Ambos marcam",
        odds: "1.65",
        analysis: "Dois dos ataques mais poderosos da Inglaterra. Ambas as equipes marcaram em todos os últimos 6 jogos entre elas.",
      },
      {
        match: "Bayern x Dortmund",
        league: "Bundesliga",
        betType: "Casa vence",
        odds: "1.70",
        analysis: "Bayern dominante em casa, com 12 vitórias consecutivas na Allianz Arena. Dortmund com problemas de consistência fora.",
      },
    ],
    mgm: [
      {
        match: "PSG x Marseille",
        league: "Ligue 1",
        betType: "Casa vence e mais de 2.5 gols",
        odds: "2.25",
        analysis: "PSG dominante em casa e Marseille com defesa frágil. Combinação de resultado e gols oferece bom valor.",
      },
      {
        match: "Milan x Inter",
        league: "Serie A",
        betType: "Ambos marcam",
        odds: "1.80",
        analysis: "Derby della Madonnina sempre equilibrado. Ambas as equipes em boa fase ofensiva.",
      },
      {
        match: "Atlético Madrid x Sevilla",
        league: "La Liga",
        betType: "Menos de 2.5 gols",
        odds: "1.95",
        analysis: "Atlético conhecido por jogos truncados. Sevilla tem segundo melhor ataque e defesa equilibrada. Tende a ser jogo tático.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("betano");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Dicas do Dia</h1>
        <p className="text-muted-foreground">Análises detalhadas para suas apostas</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="betano" className="font-medium">Betano</TabsTrigger>
          <TabsTrigger value="bet365" className="font-medium">Bet365</TabsTrigger>
          <TabsTrigger value="mgm" className="font-medium">MGM</TabsTrigger>
        </TabsList>

        {Object.entries(tipsByBookmaker).map(([bookmaker, tips]) => (
          <TabsContent key={bookmaker} value={bookmaker} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{tip.match}</CardTitle>
                        <CardDescription className="text-sm">{tip.league}</CardDescription>
                      </div>
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="font-semibold">
                        {tip.betType}
                      </Badge>
                      <Badge variant="outline" className="font-bold text-primary border-primary">
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
        ))}
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
