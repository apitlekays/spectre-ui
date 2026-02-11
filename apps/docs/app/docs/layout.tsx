"use client";

import React, { useState } from "react";
import { DocsNavbar } from "@/components/DocsNavbar";
import { DocsSidebar } from "@/components/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <DocsNavbar onMenuToggle={() => setSidebarOpen((o) => !o)} />
      <div className="flex">
        <DocsSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-4xl px-6 py-10">
            {children}
          </div>
          <footer className="border-t border-spectre-border mx-6 py-6 mt-4">
            <div className="mx-auto max-w-4xl flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-spectre-muted-foreground">
              <span>
                spectre_<span className="text-spectre-primary">ui</span> — Built by{" "}
                <a
                  href="https://drhafizhanif.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spectre-primary hover:underline"
                >
                  Hafiz Hanif, PhD
                </a>
              </span>
              <span>MIT License</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
