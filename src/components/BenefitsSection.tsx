import { Gift, Star, Trophy } from "lucide-react";

const commissions = [
  { icon: Gift, title: "1ª Indicação", value: "5%", subtitle: "de comissão", tier: "base" },
  { icon: Star, title: "3ª Indicação", value: "7%", subtitle: "de comissão", tier: "mid" },
  { icon: Trophy, title: "5ª Indicação", value: "10%", subtitle: "de comissão", tier: "top" },
] as const;

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 px-3 md:px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Seu sucesso é a nossa maior{" "}
          <span className="text-gradient">recompensa</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Acreditamos que a melhor propaganda é a satisfação dos nossos clientes.
          Por isso, criamos um programa de indicações onde você é recompensado
          por nos ajudar a construir mais sonhos.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {commissions.map((item) => {
            const tierStyles = {
              base: {
                card: "bg-card border border-border",
                icon: "bg-primary/10",
                value: "text-primary",
              },
              mid: {
                card: "bg-card border-2 border-primary/40 shadow-lg shadow-primary/5",
                icon: "bg-primary/20",
                value: "text-primary",
              },
              top: {
                card: "bg-gradient-to-b from-primary/20 via-primary/10 to-card border-2 border-primary shadow-xl shadow-primary/20 scale-105",
                icon: "bg-primary/30",
                value: "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]",
              },
            }[item.tier];

            return (
              <div
                key={item.title}
                className={`${tierStyles.card} rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-full ${tierStyles.icon} flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors`}>
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wider">
                  {item.title}
                </p>
                <p className={`text-5xl font-extrabold ${tierStyles.value} mb-1`}>{item.value}</p>
                <p className="text-muted-foreground">{item.subtitle}</p>
                {item.tier === "top" && (
                  <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1 rounded-full">
                    ⭐ Melhor recompensa
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 rounded-xl p-6 inline-block">
          <p className="text-lg font-bold">
            🎁 <span className="text-primary">BÔNUS:</span> + 01 Voucher de Desconto na ABC da Construção
          </p>
        </div>

        <p className="text-muted-foreground mt-8 text-sm max-w-xl mx-auto">
          Quanto mais você indica, mais você ganha! As comissões são calculadas
          sobre o valor do projeto fechado pela YouCon com o indicado.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
