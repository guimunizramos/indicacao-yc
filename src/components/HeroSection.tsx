import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            Programa de Indicações
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Na YouCon, cada cliente satisfeito é também um{" "}
          <span className="text-gradient">parceiro!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Indique amigos e familiares e receba comissões especiais de até{" "}
          <span className="text-primary font-bold">10%</span> e um voucher de desconto.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(120_61%_50%/0.3)]"
        >
          QUERO INDICAR AGORA!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
