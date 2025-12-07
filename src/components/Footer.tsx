const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-primary font-semibold">Sanja Savic</span>. Sva prava zadržana.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Napravljeno sa <span className="text-primary font-semibold">Lovable</span> ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
