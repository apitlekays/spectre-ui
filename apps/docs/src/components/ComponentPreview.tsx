"use client";

import React, { useState } from "react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-spectre-border bg-spectre-muted">
      {/* Preview */}
      <div className="flex items-center justify-between border-b border-spectre-border bg-spectre-secondary px-4 py-2">
        <span className="text-xs uppercase tracking-widest text-spectre-muted-foreground">
          Preview
        </span>
        {code && (
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-xs uppercase tracking-widest text-spectre-muted-foreground hover:text-spectre-primary transition-colors"
          >
            {showCode ? "Hide Code" : "View Code"}
          </button>
        )}
      </div>
      <div className="p-6 bg-spectre-muted">{children}</div>

      {/* Code */}
      {showCode && code && (
        <div className="border-t border-spectre-border bg-spectre-muted p-4">
          <pre className="overflow-x-auto text-sm text-spectre-foreground">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
