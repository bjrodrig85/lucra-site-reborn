import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const bookTopics = [
  "A verdade que ninguém conta sobre os planos de saúde - pag. 27",
  "O que você precisa fazer para conquistar pacientes particulares - pag. 31",
  "Como proteger sua clínica para não ser processado - pag. 42",
  "Saiba o segredo para controlar tudo em sua clínica - pag. 44",
  "A bússola que a maioria não enxerga (e você?) - pag. 49",
  "Os 7 passos para contratar da forma certa - pag. 55",
  "A infalível técnica dos 15 minutos - pag. 74",
  "Conheça a estratégia da surpresa no agendamento - pag. 76",
  "Simples e poderoso conselho: O paciente se sente em casa? - pag. 80",
  "Menos é mais: O momento de maior silêncio... - pag. 93",
  "3 tempos: Se não fizer isso, perderá o bom paciente - pag. 96",
  "A resposta mais lucrativa para a pergunta: E agora, doutor? - pag. 100",
  "Tobias Responde: Quem é a melhor pessoa para negociar? - pag. 104",
  "O Gerador Máximo de Autoridade! (Spoiler: não é para ficar economizando moedas em estratégia de conquista) - pag. 110"
];

const moreTopics = [
  "Seu corpo clínico está no caminho certo? Como descobrir... - pag. 119",
  "Como pagar de forma justa o corpo clínico (sem brigas) - pag. 126",
  "Oriento a faxineira ou a deixo fazer como quiser: qual a melhor opção? (com exemplos práticos) - pag. 130",
  "Será que você garante a segurança do paciente? Talvez não... - pag. 137",
  "Evite um dos maiores erros que são cometidos no mundo das clínicas: Esquecer do paciente na última consulta! - pag. 141",
  "São 3 mimos? Conte mais sobre isso... - pag. 149",
  "Agora eu sei o que vendi hoje! Saiba o segredo - pag. 165",
  "Contas e mais contas... Você sabe TUDO o que paga? DUVIDO! - pag. 167",
  "Um conselho estratégico: tem como simplificar seu financeiro (queria ter escutado isso no início da minha clínica...) - pag. 171",
  "E a contabilidade? Aqui ela te agradece! - pag. 180",
  "Como lidar com os inadimplentes? (sem gastar tempo e sem ficar se estressando...) MÉTODO POLÊMICO... mas muito efetivo!!! - pag. 181",
  "Tobias responde: Como saber tudo sobre sua clínica com indicadores! - pag. 183",
  "Você sabe mensurar o seu SUCESSO? - pag. 192",
  "E mais... Muito mais!"
];

export const BookContent = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veja só um pouco do que você vai <span className="text-gradient">Descobrir</span> nesse Livro
          </h2>
          <p className="text-xl text-muted-foreground">
            É um Livro Físico de 208 Páginas que vai ser entregue em sua Casa!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <ul className="space-y-4">
              {bookTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <span className="text-muted-foreground leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Além disso, você também vai descobrir:</h3>
            <ul className="space-y-4">
              {moreTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                  <span className="text-muted-foreground leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
