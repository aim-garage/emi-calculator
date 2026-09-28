import type { ReactNode } from "react";

export function InfoPage({
  eyebrow = "CLEAREMI",
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="page-container info-page">
      <header className="info-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="prose">{children}</div>
    </div>
  );
}