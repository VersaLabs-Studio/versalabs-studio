import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Built by <span className="text-foreground font-medium">Kidus Abdula</span> | VersaLabs Systems Lab
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Next.js 16 | TypeScript | DDD | Production-Grade Architecture
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/kidusabdula" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/kidusabdula" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <a href="mailto:kidus@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
