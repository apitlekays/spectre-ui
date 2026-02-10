"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const cardProps: PropDef[] = [
  {
    name: "variant",
    type: '"default" | "elevated" | "outlined" | "hud"',
    default: '"default"',
    description: "Visual style variant. 'hud' adds corner bracket decorations.",
  },
  {
    name: "padding",
    type: '"none" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "Internal padding of the card.",
  },
];

export default function CardPageContent() {
  return (
    <div className="docs-prose">
      <h1>Card</h1>
      <p>
        Container component with the signature HUD aesthetic. The &quot;hud&quot; variant
        adds corner bracket decorations that are core to the spectre-ui identity.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Card variant="default">
  <CardHeader>
    <CardTitle>Default</CardTitle>
    <CardDescription>Standard card style</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>

<Card variant="hud">
  <CardHeader>
    <CardTitle>HUD</CardTitle>
    <CardDescription>With corner brackets</CardDescription>
  </CardHeader>
  <CardContent>The signature FUI card style.</CardContent>
</Card>

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated</CardTitle>
    <CardDescription>With glow shadow</CardDescription>
  </CardHeader>
  <CardContent>Elevated with glow effect.</CardContent>
</Card>

<Card variant="outlined">
  <CardHeader>
    <CardTitle>Outlined</CardTitle>
    <CardDescription>Transparent background</CardDescription>
  </CardHeader>
  <CardContent>Outline-only style.</CardContent>
</Card>`}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>Standard card style</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-spectre-muted-foreground">Card content goes here.</p>
            </CardContent>
          </Card>
          <Card variant="hud">
            <CardHeader>
              <CardTitle>HUD</CardTitle>
              <CardDescription>With corner brackets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-spectre-muted-foreground">The signature FUI card style.</p>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>With glow shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-spectre-muted-foreground">Elevated with glow effect.</p>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
              <CardDescription>Transparent background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-spectre-muted-foreground">Outline-only style.</p>
            </CardContent>
          </Card>
        </div>
      </ComponentPreview>

      <h2>With Footer</h2>
      <ComponentPreview
        code={`<Card variant="hud">
  <CardHeader>
    <CardTitle>Mission Briefing</CardTitle>
    <CardDescription>Operation: Nightfall</CardDescription>
  </CardHeader>
  <CardContent>
    Infiltrate the target facility and retrieve
    the classified documents. Time limit: 48 hours.
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="primary" size="sm">Accept</Button>
    <Button variant="outline" size="sm">Decline</Button>
  </CardFooter>
</Card>`}
      >
        <Card variant="hud" className="max-w-sm">
          <CardHeader>
            <CardTitle>Mission Briefing</CardTitle>
            <CardDescription>Operation: Nightfall</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-spectre-muted-foreground">
              Infiltrate the target facility and retrieve the classified documents.
              Time limit: 48 hours.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="primary" size="sm">Accept</Button>
            <Button variant="outline" size="sm">Decline</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={cardProps} />
    </div>
  );
}
