import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://pay.hotmart.com/X101183763P?checkoutMode=10', '_blank');
  };

  return (
    <section id="cta-section" className="py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-2xl">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Pronto para Transformar sua Clínica?
              </h2>
              <p className="text-xl text-muted-foreground">
                Garanta agora seu exemplar com todos os bônus exclusivos
              </p>
            </div>

            <div className="bg-background/50 rounded-xl p-6 inline-block">
              <div className="text-muted-foreground mb-2">Investimento completo:</div>
              <div className="text-6xl font-black text-secondary mb-2">R$ 57</div>
              <div className="text-sm text-muted-foreground">à vista ou parcelado</div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold text-xl px-12 py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-secondary group"
              >
                Enviar o Livro para Minha Casa!
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Compra 100% segura e protegida</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Formas de pagamento aceitas:</p>
              <img 
                src="https://clinicalucrativa.com.br/wp-content/uploads/2024/04/formas-de-pagamento-1.png"
                alt="Formas de pagamento"
                className="w-full max-w-md mx-auto opacity-80"
              />
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-left">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Garantia de 7 Dias</h4>
                  <p className="text-sm text-muted-foreground">
                    Se você não gostar do conteúdo ou achar que não valeu a pena, 
                    devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
