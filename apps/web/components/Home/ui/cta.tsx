import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-neutral-100 w-full">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Join the Consensus
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Contribute evidence, share perspectives, and help build a more
            informed world. Together, we can combat misinformation and find
            common ground.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button className="px-8 py-6 bg-primary hover:bg-primary/90 hover:cursor-pointer text-white text-base font-semibold flex items-center gap-2">
            Contribute Evidence
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 border-border hover:cursor-pointer hover:bg-white/5 text-base font-semibold bg-white text-black"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
