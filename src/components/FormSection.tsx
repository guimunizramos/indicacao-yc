import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle, Rocket, ArrowRight, ArrowLeft } from "lucide-react";

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const relacaoOptions = ["Já sou cliente", "Sou parceiro", "Sou corretor", "Outros"];
const pixTypes = ["CPF", "Celular", "E-mail"];
const interesseOptions = [
  "Projeto Residencial",
  "Empreendimento",
  "Reforma",
  "Interiores",
  "Não tenho certeza / Outros",
];

// Mask utilities
const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const maskCPF = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
};

interface FormData {
  nome: string;
  relacao: string;
  telefone: string;
  email: string;
  pixTipo: string;
  pixChave: string;
  nomeIndicado: string;
  telefoneIndicado: string;
  estado: string;
  cidade: string;
  interesse: string;
  consentContato: boolean;
  consentTermos: boolean;
}

const initialForm: FormData = {
  nome: "",
  relacao: "",
  telefone: "",
  email: "",
  pixTipo: "",
  pixChave: "",
  nomeIndicado: "",
  telefoneIndicado: "",
  estado: "",
  cidade: "",
  interesse: "",
  consentContato: false,
  consentTermos: false,
};

const FormSection = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const applyPixMask = (value: string) => {
    if (form.pixTipo === "CPF") return maskCPF(value);
    if (form.pixTipo === "Celular") return maskPhone(value);
    return value;
  };

  const validateStep1 = () => {
    if (!form.nome.trim() || !form.relacao || !form.telefone.trim() || !form.email.trim() || !form.pixTipo || !form.pixChave.trim()) {
      toast.error("Preencha todos os campos obrigatórios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Informe um e-mail válido.");
      return false;
    }
    if (form.pixTipo === "E-mail" && !/\S+@\S+\.\S+/.test(form.pixChave)) {
      toast.error("Informe uma chave PIX de e-mail válida.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nomeIndicado.trim() || !form.telefoneIndicado.trim() || !form.estado || !form.cidade.trim() || !form.interesse) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    if (!form.consentContato || !form.consentTermos) {
      toast.error("Você precisa aceitar os termos para continuar.");
      return;
    }
    setSubmitted(true);
    toast.success("Indicação enviada com sucesso!");
  };

  const resetForm = () => {
    setForm(initialForm);
    setStep(1);
    setSubmitted(false);
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";
  const selectClass = `${inputClass} appearance-none`;
  const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";

  // Success page
  if (submitted) {
    return (
      <section id="formulario" className="py-16 md:py-24 px-3 md:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-12">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Rocket className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-extrabold mb-4">
              Indicação enviada com sucesso! 🎉
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Muito obrigado por indicar a YouCon! Nosso time de especialistas
              entrará em contato com a pessoa indicada o mais rápido possível.
            </p>
            <p className="text-muted-foreground mb-8">
              Fique de olho no seu WhatsApp e e-mail. Assim que a sua indicação
              fechar negócio com a gente, avisaremos você e o seu PIX será
              transferido para a chave informada!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Fazer nova indicação
              </button>
              <a
                href="/"
                className="border border-border hover:border-primary text-foreground font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Voltar para o site
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-16 md:py-24 px-3 md:px-6">
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

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${step === 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
            <span>1</span> Seus Dados
          </div>
          <div className="w-8 h-px bg-border" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${step === 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
            <span>2</span> Dados do Indicado
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-primary mb-2">Seus Dados</h3>

              <div>
                <label className={labelClass}>Nome Completo *</label>
                <input value={form.nome} onChange={(e) => set("nome", e.target.value)} required placeholder="Seu nome completo" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Qual a sua relação com a YouCon? *</label>
                <select value={form.relacao} onChange={(e) => set("relacao", e.target.value)} required className={selectClass}>
                  <option value="" disabled>Selecione</option>
                  {relacaoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}>Telefone / WhatsApp *</label>
                <input value={form.telefone} onChange={(e) => set("telefone", maskPhone(e.target.value))} required placeholder="(00) 00000-0000" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>E-mail *</label>
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required placeholder="seu@email.com" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Tipo de Chave PIX *</label>
                <select value={form.pixTipo} onChange={(e) => { set("pixTipo", e.target.value); set("pixChave", ""); }} required className={selectClass}>
                  <option value="" disabled>Selecione o tipo</option>
                  {pixTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}>Sua Chave PIX *</label>
                <input
                  value={form.pixChave}
                  onChange={(e) => set("pixChave", applyPixMask(e.target.value))}
                  required
                  placeholder="Digite a chave selecionada acima"
                  type={form.pixTipo === "E-mail" ? "email" : "text"}
                  className={inputClass}
                />
              </div>

              <button
                type="button"
                onClick={() => validateStep1() && setStep(2)}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_61%_50%/0.3)] flex items-center justify-center gap-2"
              >
                Próxima Etapa <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-bold text-primary mb-2">Dados do Indicado</h3>

              <div>
                <label className={labelClass}>Nome do Indicado *</label>
                <input value={form.nomeIndicado} onChange={(e) => set("nomeIndicado", e.target.value)} required placeholder="Nome completo do indicado" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Telefone / WhatsApp do Indicado *</label>
                <input value={form.telefoneIndicado} onChange={(e) => set("telefoneIndicado", maskPhone(e.target.value))} required placeholder="(00) 00000-0000" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Estado *</label>
                  <select value={form.estado} onChange={(e) => set("estado", e.target.value)} required className={selectClass}>
                    <option value="" disabled>UF</option>
                    {estados.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Cidade *</label>
                  <input value={form.cidade} onChange={(e) => set("cidade", e.target.value)} required placeholder="Cidade" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Qual o principal interesse dessa pessoa? *</label>
                <select value={form.interesse} onChange={(e) => set("interesse", e.target.value)} required className={selectClass}>
                  <option value="" disabled>Selecione</option>
                  {interesseOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* LGPD */}
              <div className="border-t border-border pt-5 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.consentContato} onChange={(e) => set("consentContato", e.target.checked)} className="mt-1 w-5 h-5 rounded border-border accent-primary shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Confirmo que conheço a pessoa indicada e que ela autoriza o contato da YouCon via WhatsApp ou telefone. *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.consentTermos} onChange={(e) => set("consentTermos", e.target.checked)} className="mt-1 w-5 h-5 rounded border-border accent-primary shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Aceito os Termos e Condições do Programa de Indicação e a Política de Privacidade. *
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-border hover:border-primary text-foreground font-bold text-lg py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_61%_50%/0.3)]"
                >
                  Enviar Indicação
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
