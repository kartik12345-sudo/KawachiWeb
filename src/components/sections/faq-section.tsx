import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of projects does Kawachi Infratech handle?",
    answer: "We specialize in a wide range of projects including commercial and residential buildings, public infrastructure like bridges and roads, and large-scale industrial facilities. Our team is equipped to handle projects of various sizes and complexities."
  },
  {
    question: "How do you ensure project quality and safety?",
    answer: "Quality and safety are our top priorities. We adhere to stringent international standards, employ experienced professionals, use high-quality materials, and conduct regular site inspections and safety audits throughout the project lifecycle."
  },
  {
    question: "Can you work with existing architectural plans?",
    answer: "Absolutely. We frequently collaborate with external architects and designers. Our team can seamlessly integrate with your existing plans to bring your vision to life, ensuring structural integrity and efficient execution."
  },
  {
    question: "What is your approach to sustainability?",
    answer: "We are committed to sustainable construction. We incorporate green building materials, energy-efficient designs, and waste reduction strategies in our projects to minimize environmental impact and create sustainable infrastructure for the future."
  }
];


export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
                 <h2 className="text-sm font-bold uppercase text-primary mb-2">FAQ</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground">
                    Find answers to common questions about our services, processes, and commitment to excellence. If you have other questions, feel free to contact us.
                </p>
            </div>
            <div>
                 <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </div>
    </section>
  );
}
