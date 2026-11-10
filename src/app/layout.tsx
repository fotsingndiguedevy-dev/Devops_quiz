import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOps Quiz",
  description: "Apprendre les bases du DevOps en jouant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
