import React from "react";
import { cn } from "../../utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator, ...props }, ref) => {
    const sep = separator || (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-spectre-muted-foreground">
        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn("font-mono", className)} {...props}>
        <ol className="flex items-center gap-2 text-xs uppercase tracking-widest">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-spectre-muted-foreground">{sep}</span>}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-spectre-muted-foreground transition-colors hover:text-spectre-primary"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-spectre-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
