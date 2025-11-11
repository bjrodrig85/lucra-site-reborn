import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 px-4 py-2 text-sm font-medium">
              🚀 Lançamento do Livro Físico
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-gradient">MANUAL DA</span>
              <br />
              <span className="text-gradient">CLÍNICA LUCRATIVA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              O guia prático para você trabalhar menos e ganhar mais, de forma íntegra e ética. 🙂
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img 
                src="https://clinicalucrativa.com.br/wp-content/uploads/2024/04/combos2.png" 
                alt="Combo Manual da Clínica Lucrativa"
                className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Garanta seu Livro Físico + bônus
                  </h2>
                  <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground text-lg">por apenas</span>
                    <span className="text-5xl font-black text-secondary">R$ 57</span>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span>Livro Físico com frete grátis</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span>Livro Digital em PDF</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span>Audiobook completo</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span>Treinamento em vídeo exclusivo</span>
                  </p>
                </div>

                <Button 
                  onClick={scrollToCTA}
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-secondary group"
                >
                  Envie o livro para minha casa!
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="pt-4 border-t border-border">
                  <img 
                    src="https://clinicalucrativa.com.br/wp-content/uploads/2024/04/formas-de-pagamento-1.png"
                    alt="Formas de pagamento"
                    className="w-full opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
