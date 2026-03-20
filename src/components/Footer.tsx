import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-primary mb-1">YouCon</h3>
            <p className="text-sm text-muted-foreground">Arquitetura e Engenharia</p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@youcon.com.br</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-primary" />
              <span>(11) 99999-9999</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-end">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} YouCon Arquitetura e Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
