import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { tipsByBookmaker } from "@/data/tips-data";

const Tips = () => {
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
