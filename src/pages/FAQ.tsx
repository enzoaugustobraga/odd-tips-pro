import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "As dicas são gratuitas?",
      answer: "Oferecemos tanto dicas gratuitas quanto um plano premium com análises mais detalhadas e maior frequência de atualizações. Entre em contato para saber mais sobre nossos planos.",
    },
    {
      question: "Como posso acessar novamente?",
      answer: "Basta fazer login com seu e-mail e senha cadastrados. Caso tenha esquecido sua senha, entre em contato conosco pelo WhatsApp para redefinição.",
    },
    {
      question: "As análises são automáticas?",
      answer: "Não. Todas as nossas análises são feitas por especialistas em futebol que avaliam estatísticas, histórico de confrontos, momento das equipes e outros fatores relevantes.",
    },
    {
      question: "Vocês garantem lucro com as dicas?",
      answer: "Não. Nenhuma dica de aposta garante lucro. Nosso objetivo é fornecer análises informativas baseadas em dados para auxiliar suas decisões. O resultado das apostas envolve variáveis imprevisíveis.",
    },
    {
      question: "Posso apostar se tenho menos de 18 anos?",
      answer: "NÃO. Apostas são proibidas para menores de 18 anos. A BM OddTips não compactua com apostas de menores de idade e reforça a importância da responsabilidade.",
    },
    {
      question: "Com que frequência as dicas são atualizadas?",
      answer: "Atualizamos nossas dicas diariamente, sempre que há jogos relevantes nas principais ligas e competições de futebol.",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5544997186338?text=Oi%2C+quero+abrir+minha+conta+e+saber+mais+sobre+as+dicas+da+BM+OddTips!",
      "_blank"
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Dúvidas Frequentes</h1>
        <p className="text-muted-foreground">Encontre respostas para as perguntas mais comuns</p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Deseja abrir sua conta?</CardTitle>
          <CardDescription className="text-base">
            Entre em contato conosco pelo WhatsApp!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Respondemos em horário comercial: Segunda a Sexta, 9h às 18h</p>
      </div>
    </div>
  );
};

export default FAQ;
