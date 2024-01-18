import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/globals.scss";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sass Feedback",
  description: "This is a feedback form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
