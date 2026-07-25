export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-t border-background/10">
        <span className="font-serif text-lg text-background/80">Nelo</span>
        <span className="text-sm text-background/40">
          © {new Date().getFullYear()} Nelo
        </span>
      </div>
    </footer>
  );
}
