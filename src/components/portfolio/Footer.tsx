import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Made with love section */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>plus lots of</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground mb-2">
            © {currentYear} M Tanusree Reddy. All rights reserved.
          </div>

          {/* Tagline */}
          <div className="text-xs text-muted-foreground">
            Transforming data into insights, one algorithm at a time.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;