import { Card } from "@/components/ui/card";
import { Headphones, FileText, Video } from "lucide-react";

export const Bonuses = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Além do livro, <span className="text-gradient">Garanta Também</span> Esses Bônus
          </h2>
          <p className="text-xl text-muted-foreground">
            Fazendo sua inscrição ainda hoje!
          </p>
        </div>

        <div className="space-y-8">
          {/* Audiobook */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                <Headphones className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">AUDIOBOOK DO LIVRO MANUAL DA CLÍNICA LUCRATIVA</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Eu mesmo, pessoalmente, gravei para você o audiobook do livro Manual da Clínica Lucrativa.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Você pode ouvir no carro, na academia, em casa, indo para a clínica e até em sua corrida matinal.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Todo o livro inteirinho em áudio, pra você ouvir quando e como quiser. Isso vai facilitar muito seu aprendizado.
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through text-xl">R$ 67,00</span>
                  <span className="text-3xl font-bold text-secondary">GRÁTIS no combo</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Livro Digital */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/5 border-secondary/20">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10">
                <FileText className="w-12 h-12 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">VERSÃO DIGITAL DO LIVRO</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Vou enviar o livro para sua casa. Mas você já pode, agora mesmo, acessar a versão digital do livro.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  O envio do livro demora alguns dias, mas você já pode iniciar os estudos imediatamente por meio do Livro Digital em PDF.
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through text-xl">R$ 29,90</span>
                  <span className="text-3xl font-bold text-secondary">GRÁTIS no combo</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Treinamento 1 */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                <Video className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">TREINAMENTO EXCLUSIVO: COMO MOTIVAR SUA EQUIPE - OS BASTIDORES</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Nesse treinamento em vídeo aulas, você vai ter acesso aos bastidores de como motivar sua equipe, fazendo com que ela trabalhe em perfeita harmonia e economize tempo para você!
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  (pegue este tempo e gaste com sua família!)
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Além do treinamento, você terá acesso ao mapa mental em PDF.
                </p>
                <p className="text-lg font-semibold mb-3">Veja só algumas coisas que você vai descobrir nesse treinamento:</p>
                <ul className="space-y-2 mb-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>A estratégia "sanduíche" (você vai ver como é fácil orientar sem chatear a pessoa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Como aprender a ouvir sua equipe e conquistá-la!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Como bonificar de forma justa, sem gerar competição destrutiva.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>e muito mais!</span>
                  </li>
                </ul>
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through text-xl">R$ 297,00</span>
                  <span className="text-3xl font-bold text-secondary">GRÁTIS no combo</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Treinamento 2 */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/5 border-secondary/20">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10">
                <Video className="w-12 h-12 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">TREINAMENTO EXCLUSIVO: AUTORIDADE PARA FECHAR PLANOS DE TRATAMENTO LUCRATIVOS TODO DIA</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Nesse treinamento em vídeo aulas, você vai ter acesso aos bastidores de como se posicionar na internet, captar e conquistar os melhores clientes de forma íntegra e ética, fechando planos de tratamento todos os dias.
                </p>
                <p className="text-lg font-semibold mb-3">Veja só algumas coisas que você vai descobrir nesse treinamento:</p>
                <ul className="space-y-2 mb-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>As 3 formas de gerar autoridade (a forma n. 2 vai mudar a maneira como você se posiciona...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Como escolher o posicionamento certo faz a sua concorrência trabalhar para você!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Como escolher o paciente mais fácil e lucrativo para fechar planos de tratamento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>e muito mais!</span>
                  </li>
                </ul>
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through text-xl">R$ 397,00</span>
                  <span className="text-3xl font-bold text-secondary">GRÁTIS no combo</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
