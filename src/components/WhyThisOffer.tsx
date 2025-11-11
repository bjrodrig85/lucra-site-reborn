import { Card } from "@/components/ui/card";
import { AlertCircle, Clock } from "lucide-react";

export const WhyThisOffer = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-border mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Ok, Tobias! Qual é a <span className="text-primary">Pegadinha</span> dessa Oferta?
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Eu não estou escondendo nada.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Eu sei que essa é uma oferta, no mínimo, <strong>estranha.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Se você parar para analisar, vai perceber que:
            </p>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li>A depender da tiragem, <strong>imprimir um livro físico custa entre 20 e 40 reais por livro</strong>.</li>
              <li>O <strong>frete do livro</strong>, dependendo de onde a pessoa mora e o tipo do envio, varia entre 20 e 50 reais por livro.</li>
              <li>Tem o <strong>imposto</strong> ainda…</li>
              <li><strong>Custo da plataforma</strong> (eduzz)…</li>
              <li>Ah, e tem ainda o <strong>custo do anúncio</strong> no Face e Insta para vender o livro.</li>
            </ul>
            <p className="text-xl font-bold text-primary mb-8">
              Não precisa ser um gênio da matemática para ver que eu não levo muita vantagem nessa oferta…
            </p>

            <h3 className="text-2xl font-bold mb-4">Porque eu Faço isso Então?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Na verdade, por algumas razões…
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-lg"><strong className="text-primary">Razão #1</strong> – Eu sei que, quando você tiver o livro em mãos e ler, você vai ver que eu não estou de brincadeira aqui.</p>
                <p className="text-base text-muted-foreground mt-2">
                  Não sou nenhum aventureiro querendo te ensinar coisas superficiais e ganhar dinheiro em cima do livro.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-lg"><strong className="text-primary">Razão #2</strong> – Eu sei que, quando você ler o livro, sua mente vai se expandir e você vai ver novas possibilidades de <strong>realmente</strong> ter uma <strong>CLÍNICA LUCRATIVA</strong>, trabalhando menos e ganhando mais, de forma <strong>íntegra e ética</strong>.</p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-lg"><strong className="text-primary">Razão #3</strong> – No mercado de mentoria de clínicas médicas e odontológicas, tem muita gente boa e competente.</p>
                <p className="text-base text-muted-foreground mt-2">
                  Mas, eu devo te confessar que estou um pouco cansado dos <em>"falsos gurus"</em> que tem por aí falando de mentorias na saúde sendo que <strong>NUNCA</strong> nem se <strong>aprofundaram cientificamente</strong> ou <strong>implementaram realmente</strong> em centenas de clínicas para te dar segurança.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  Uma turma ensinando coisas que nunca nem fizeram antes…
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Então, para combater isso, eu quero te oferecer um <strong className="text-primary">overdelivery.</strong>
            </p>
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-primary/10 border-primary/30">
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Porque você Precisa agir Rápido</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Sinceramente, eu gostaria muito de colocar alguma escassez adicional para te motivar a agir.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Mas, eu nem preciso fazer isso. A situação é muito simples.
                </p>
                <div className="bg-background/50 rounded-lg p-6 mb-4">
                  <p className="text-xl font-bold text-primary mb-2">
                    <AlertCircle className="inline w-6 h-6 mr-2" />
                    Essa 1ª edição foi de apenas 1.000 cópias desse livro físico. Já está vendendo…
                  </p>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Até podemos mandar fazer mais, só que existe todo um processo de tiragem. Não é algo rápido nem simples. Você sabe como é.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  E a próxima edição com certeza será com um valor maior e sem tantos benefícios.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Então, se você demorar para garantir seu combo, provavelmente os livros vão se esgotar.
                </p>
                <p className="text-xl font-bold text-secondary">
                  Então, se a ideia de ter uma clínica lucrativa trabalhando menos e ganhando mais, de forma íntegra e ética, te agrada, A HORA É AGORA para garantir o livro e todos esses bônus exclusivos.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
