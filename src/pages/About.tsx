import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: "Análises Profissionais",
      description: "Nossos especialistas analisam estatísticas, histórico e momento das equipes para fornecer as melhores dicas informativas.",
    },
    {
      icon: Target,
      title: "Foco Educativo",
      description: "Nosso objetivo é informar e educar sobre apostas esportivas, não incentivar apostas financeiras irresponsáveis.",
    },
    {
      icon: Shield,
      title: "Responsabilidade",
      description: "Não compactuamos com apostas ilegais ou de menores de idade. Promovemos sempre a responsabilidade nas apostas.",
    },
    {
      icon: Users,
      title: "Transparência",
      description: "Mantemos nossos usuários informados sobre riscos e sempre reforçamos que apostas não garantem lucros.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Conheça a BM OddTips</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Somos uma plataforma dedicada a fornecer análises e dicas informativas sobre apostas de futebol
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <Card>
          <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">BM OddTips</strong> nasceu com o propósito de democratizar o acesso a análises profissionais de futebol, 
              ajudando entusiastas do esporte a tomar decisões mais informadas em suas apostas.
            </p>
            <p>
              Nossa equipe é composta por especialistas apaixonados por futebol que acompanham as principais 
              ligas e competições do mundo, analisando estatísticas, desempenho de equipes, histórico de confrontos 
              e diversos outros fatores relevantes para cada partida.
            </p>
            <p>
              <strong className="text-foreground">É importante ressaltar:</strong> A BM OddTips fornece dicas e análises com caráter <strong>informativo e educativo</strong>. 
              Nosso objetivo não é incentivar apostas financeiras desenfreadas, mas sim educar sobre o mercado 
              de apostas esportivas e ajudar nossos usuários a entender melhor o esporte.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Nossos Valores</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-destructive/10 border-destructive/30">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <p className="text-lg font-semibold text-destructive">
              ⚠️ AVISO IMPORTANTE
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium">
                A BM OddTips <strong>NÃO</strong> compactua com apostas ilegais nem com menores de idade apostando.
              </p>
              <p>
                Apostas esportivas devem ser encaradas como entretenimento, nunca como fonte de renda.
              </p>
              <p className="text-lg font-bold text-destructive">
                Aposte com responsabilidade. Proibido para menores de 18 anos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
