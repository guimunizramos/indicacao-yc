import { Building2, Lightbulb, ShieldCheck } from "lucide-react";

const features = [
  { icon: Building2, text: "Soluções completas para projetos residenciais e comerciais" },
  { icon: Lightbulb, text: "Inovação e criatividade em cada projeto" },
  { icon: ShieldCheck, text: "Compromisso com qualidade e atenção aos detalhes" },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-[#ff7300]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary-foreground">
              YouCon: Construindo Sonhos com{" "}
              <span className="text-primary-foreground">Excelência</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              A YouCon Arquitetura e Engenharia é especialista em transformar
              ideias em realidade, oferecendo soluções completas e inovadoras.
              Nossa paixão é criar espaços que inspiram e superam expectativas.
            </p>
          </div>

          <div className="space-y-5">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-start gap-4 bg-background/15 border border-primary-foreground/20 rounded-xl p-5 hover:bg-background/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground/90">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
