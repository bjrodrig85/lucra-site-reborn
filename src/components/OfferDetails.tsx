import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Livro Físico com Frete Grátis",
    description: "Receba o livro impresso na sua casa sem pagar nada pelo frete. Material de alta qualidade."
  },
  {
    title: "Livro Digital em PDF",
    description: "Acesso imediato ao livro digital. O mesmo livro que custa R$ 24,90 na Amazon."
  },
  {
    title: "Audiobook Completo",
    description: "Ouça o livro completo onde estiver. Perfeito para aproveitar o tempo no trânsito."
  },
  {
    title: "Treinamento em Vídeo Exclusivo",
    description: "Vídeo aulas inéditas gravadas exclusivamente para os leitores do livro."
  }
];

export const OfferDetails = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Uma Oferta <span className="text-gradient">Incontestável</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja tudo que você recebe ao garantir seu exemplar hoje
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-primary/20">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Caro Leitor, estimada leitora;
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Serei curto e direto. Não quero fazer alarde.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Acabamos de disponibilizar a versão física do livro <strong className="text-primary">MANUAL DA CLÍNICA LUCRATIVA</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              E gostaria de te convidar para ter acesso ao que eu chamo de <strong className="text-primary">"Oferta Incontestável"</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Você vai ter acesso a tudo isso por apenas <span className="text-3xl font-bold text-secondary">R$ 57</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
