import logo from "@/assets/logo-youcon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-3 md:px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-4">
        <img src={logo} alt="YouCon Arquitetura e Engenharia" className="h-10" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} YouCon Arquitetura e Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
