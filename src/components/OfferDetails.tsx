import { Card } from "@/components/ui/card";

export const OfferDetails = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Uma Oferta <span className="text-gradient">Incontestável</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-primary/20 mb-12">
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
            <p className="text-lg leading-relaxed mb-6">
              E gostaria de te convidar para ter acesso ao que eu chamo de <strong className="text-primary">"Oferta Incontestável"</strong>.
            </p>
            
            <div className="space-y-4 mb-6">
              <p className="text-lg"><strong>A questão é simples:</strong></p>
              
              <p className="text-lg"><strong>1 –</strong> Eu vou mandar o livro físico Manual da Clínica Lucrativa com frete grátis para sua casa.</p>
              
              <p className="text-lg"><strong>2 –</strong> Além do livro, <em>imediatamente você vai ter acesso ao <strong>Livro Digital em pdf.</strong></em></p>
              
              <p className="text-base text-muted-foreground">Só o Livro Digital custa R$ 24,90 na Amazon e é um dos únicos da sua categoria por lá (pode consultar e ver o preço por lá).</p>
              
              <p className="text-lg"><strong>3 –</strong> Além do Livro Digital, você vai ter acesso imediato ao <strong>Audiobook do livro</strong> (amantes de audiobooks digam "oi")</p>
              
              <p className="text-lg"><strong>4 –</strong> Além do Audiobook eu vou liberar como bônus um <strong>treinamento em vídeo aulas inédito e exclusivo</strong> que eu gravei exclusivamente para meus leitores;</p>
              
              <p className="text-lg"><strong>5 –</strong> Você vai ter acesso a tudo isso por apenas <span className="text-4xl font-bold text-secondary">R$ 57</span></p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4">Resumo:</h3>
              <p className="text-lg mb-4">Você pode adquirir só o Livro Digital (versão kindle) na Amazon por R$ 24,90 ou…</p>
              <p className="text-lg mb-3">Pode receber:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Livro Físico</strong> com Frete Grátis (na sua casa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Livro Digital</strong> (em PDF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Audiobook</strong> do Livro (em mp3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Treinamentos Exclusivos</strong> em vídeo aulas</span>
                </li>
              </ul>
              <p className="text-2xl font-bold">Tudo isso por <span className="text-secondary">apenas R$ 57</span></p>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-card border-border">
          <h3 className="text-3xl font-bold mb-6 text-center">Sua Garantia Incontestável</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              São 7 dias de garantia <strong>depois que você receber o livro</strong> ou o seu dinheiro de volta…
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Se você não gostar do Livro Físico + Livro Digital + Audiobook + Treinamento…
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Você tem 7 dias para pedir seu dinheiro de volta.
            </p>
            <p className="text-xl font-bold text-primary">
              DETALHE: Você nem precisa devolver o livro. Fique com Ele!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
