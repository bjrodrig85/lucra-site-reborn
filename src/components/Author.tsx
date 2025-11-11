import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Author = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quem é o <span className="text-gradient">Autor</span> desse Livro?
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img 
                src="https://clinicalucrativa.com.br/wp-content/uploads/2025/10/0958_20250613_00958.jpg"
                alt="Tobias Kfoury"
                className="relative rounded-xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold">Tobias Kfoury</h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Olá, moro em Nova Lima/MG e sou pai da Clarinha, uma filha brilhante e alegre.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Além do livro Manual da Clínica Lucrativa, também já escrevi um livro de Gestão Financeira que ajudou várias pessoas a descomplicar as finanças.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Em 2002 eu descobri o mundo das mentorias e consultorias, me apaixonei por ele e tomei a decisão de criar uma empresa de sucesso para mim.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Em 2010 decidi me especializar em gestão e mercado de consultórios e clínicas. Foi apaixonante, pois meus pais e diversas pessoas da minha família são dentistas e médicos.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold mb-3 text-primary">Formação Acadêmica</h4>
              <p className="text-lg leading-relaxed mb-2">
                Ao longo da minha vida acadêmica, formei em <strong>Economia pela UFMG</strong>, fiz <strong>mestrado em Administração pela UNIVALI</strong>, um segundo <strong>mestrado em Gestão de Serviços de Saúde pela UFMG</strong> (me chamam de doido…) e estou atualmente cursando o <strong>Doutorado em Administração da Saúde pela Universidade de Lisboa, em Portugal</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Sou professor de Gestão na Saúde pela <strong>Fundação Dom Cabral</strong> e de Gestão e mercado para consultórios e clínicas pela <strong>UFMG</strong> (criei a primeira disciplina sobre este tema em uma universidade brasileira na Graduação).
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold mb-3 text-primary">Experiência Prática</h4>
              <p className="text-lg leading-relaxed mb-2">
                Depois de tentar, patinar bastante e gastar muita energia no início, hoje tenho uma <strong>metodologia testada e aprovada CIENTIFICAMENTE</strong> que eu ensinei para mais de <strong>3000 médicos e dentistas</strong> assim como você, com direito autoral.
              </p>
              <p className="text-lg leading-relaxed">
                Já transformei a realidade de mais de <strong>700 clínicas em TODOS os estados brasileiros</strong>, inclusive nos Estados Unidos, Portugal e Espanha.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Estou te contando isso para te mostrar que é possível ter uma CLÍNICA LUCRATIVA mesmo que você não tenha muito tempo ou paciência para fazer gestão (sei que você gosta de "clinicar").
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Mesmo com esposa, filha e uma dedicação pesada nos meus 2 mestrados e agora fazendo doutorado em Portugal, eu consegui estruturar um método baseado em CIÊNCIA que fez criar um modelo de CLÍNICA LUCRATIVA que conquista novos pacientes todos os dias!
            </p>
            
            <p className="text-xl font-bold text-primary">
              Sem fórmulas mágicas, sem milagres. Com trabalho focado e as ferramentas e estratégias certas na saúde.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
