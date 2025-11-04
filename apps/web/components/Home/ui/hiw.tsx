import { Upload, BarChart3, Users } from "lucide-react";
import { Card } from "@workspace/ui/components/card";

const steps = [
  {
    number: "01",
    title: "Submit a Claim",
    description:
      "Share any claim, topic, or URL you want to understand better.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Review Evidence",
    description:
      "Explore curated, peer-reviewed evidence from trusted sources.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "See the Consensus",
    description:
      "Understand the evidence-backed consensus and nuanced perspectives.",
    icon: Users,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-neutral-100 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process to find evidence-backed truth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-8 h-full border border-secondary bg-neutral-200 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col h-full">
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
