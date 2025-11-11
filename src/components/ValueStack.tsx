import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const valueItems = [
  { item: "Livro Físico com Frete Grátis", value: "R$ 51,00" },
  { item: "Audiobook do Livro", value: "R$ 67,00" },
  { item: "Versão digital do Livro (Ebook em PDF)", value: "R$ 29,90" },
  { item: "Treinamento: Como Motivar sua Equipe", value: "R$ 297,00" },
  { item: "Treinamento: Autoridade para Fechar Planos", value: "R$ 397,00" }
];

export const ValueStack = () => {
  const handleCTAClick = () => {
    window.open('https://pay.hotmart.com/X101183763P?checkoutMode=10', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Recapitular TUDO</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            que você irá receber ao adquirir o livro Manual da Clínica Lucrativa
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border mb-8">
          <div className="space-y-6">
            {valueItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-lg font-medium">{item.item}</span>
                </div>
                <span className="text-xl font-bold text-primary whitespace-nowrap ml-4">{item.value}</span>
              </div>
            ))}
            
            <div className="pt-6 mt-6 border-t-2 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">Valor Total Somado:</span>
                <span className="text-3xl font-black text-muted-foreground line-through">R$ 841,90</span>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-6 text-center">
                <p className="text-xl mb-2">Para Você que está aqui...</p>
                <p className="text-2xl font-bold mb-4">Vai receber uma Condição muito Especial...</p>
                <div className="text-6xl font-black text-secondary mb-2">R$ 57</div>
                <p className="text-lg text-muted-foreground mb-1">à vista</p>
                <p className="text-base text-muted-foreground">Ou até 8x de R$ 8,29 (cartão de crédito)</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xl px-12 py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-secondary group"
          >
            ENVIAR O LIVRO PARA MINHA CASA
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
