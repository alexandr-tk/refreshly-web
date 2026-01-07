import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-white/10 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ReFreshly
              </span>
            </Link>
            <span className="text-sm text-white/50">
              © 2026 ReFreshly. Made in Almaty.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              to="/privacy"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
