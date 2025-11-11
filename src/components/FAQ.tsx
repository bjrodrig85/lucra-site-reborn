import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Por quanto tempo terei acesso ao treinamento em vídeo aulas?",
    answer: "Você terá acesso ao treinamento por 12 meses. Nesse período pode assistir os vídeos quantas vezes desejar."
  },
  {
    question: "Vou receber alguma coisa em casa?",
    answer: "Sim! Nós vamos mandar o livro físico MANUAL DA CLÍNICA LUCRATIVA para sua casa com frete grátis."
  },
  {
    question: "Terei suporte?",
    answer: "Sim! Você terá suporte às dúvidas colocando seus comentários logo abaixo das aulas. Eu mesmo leio e respondo todas as dúvidas."
  },
  {
    question: "O frete é Grátis para quem mora fora do Brasil?",
    answer: "Não. A Promoção de frete grátis é somente para o Brasil. Não fazemos envios para o exterior nessa promoção. Caso more no exterior, entre em contato conosco. Calcularemos o frete internacional."
  },
  {
    question: "Como funciona a garantia?",
    answer: "São 7 dias de garantia depois que você receber o livro ou o seu dinheiro de volta. Se você não gostar do material, você tem 7 dias para pedir seu dinheiro de volta. DETALHE: Você nem precisa devolver o livro. Fique com ele!"
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
