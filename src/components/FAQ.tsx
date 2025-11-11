import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando vou receber o livro físico?",
    answer: "O prazo de entrega varia de acordo com sua região, mas geralmente é entre 7 a 15 dias úteis após a confirmação do pagamento. Você receberá um código de rastreamento para acompanhar sua encomenda."
  },
  {
    question: "Como acesso os bônus digitais?",
    answer: "Assim que seu pagamento for confirmado, você receberá um email com todos os acessos aos bônus digitais: livro em PDF, audiobook e treinamento em vídeo. O acesso é imediato!"
  },
  {
    question: "O frete realmente é grátis?",
    answer: "Sim! O frete é completamente grátis para todo o Brasil. Você paga apenas os R$ 57 e não tem nenhum custo adicional."
  },
  {
    question: "Existe garantia?",
    answer: "Sim! Você tem 7 dias para avaliar todo o material. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro."
  },
  {
    question: "Para quem é este livro?",
    answer: "Este livro é para proprietários de clínicas, profissionais da saúde que desejam ter sua própria clínica, ou quem já tem uma clínica mas quer otimizar processos e aumentar a lucratividade."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas antes de garantir seu exemplar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
