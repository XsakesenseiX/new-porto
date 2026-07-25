import { Mail } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
