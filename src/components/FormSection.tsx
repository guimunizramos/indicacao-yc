import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Projeto Arquitetônico",
  "Projeto Estrutural",
  "Projeto Elétrico",
  "Projeto Hidráulico",
  "Gerenciamento de Obra",
  "Outros",
];

const FormSection = () => {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Você precisa confirmar o consentimento do indicado.");
      return;
    }
    setSubmitted(true);
    toast.success("Indicação enviada com sucesso!");
  };

  if (submitted) {
    return (
      <section id="formulario" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-card border border-primary/30 rounded-2xl p-12">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Indicação Enviada!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Sua indicação foi enviada com sucesso! Agradecemos a sua parceria.
              Entraremos em contato em breve.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Fazer Nova Indicação
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="formulario" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Indique Agora e Comece a{" "}
            <span className="text-gradient">Ganhar!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha os campos abaixo. Entraremos em contato com o indicado e,
            se o projeto for fechado, sua comissão será garantida!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-8">
          {/* Dados do indicador */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Seus Dados</h3>
            <div className="space-y-4">
              <input name="nome" required placeholder="Nome Completo *" className={inputClass} />
              <input name="email" type="email" required placeholder="E-mail *" className={inputClass} />
              <input name="telefone" required placeholder="Telefone/WhatsApp *" className={inputClass} />
            </div>
          </div>

          {/* Dados do indicado */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Dados do Indicado</h3>
            <div className="space-y-4">
              <input name="nome_indicado" required placeholder="Nome Completo do Indicado *" className={inputClass} />
              <input name="email_indicado" type="email" required placeholder="E-mail do Indicado *" className={inputClass} />
              <input name="telefone_indicado" required placeholder="Telefone/WhatsApp do Indicado *" className={inputClass} />
              <select name="servico" required className={inputClass} defaultValue="">
                <option value="" disabled>Serviço de interesse do indicado *</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-border accent-primary"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              Ao enviar este formulário, declaro que tenho a permissão do indicado
              para compartilhar seus dados com a YouCon Arquitetura e Engenharia. *
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_61%_50%/0.3)]"
          >
            ENVIAR INDICAÇÃO
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
