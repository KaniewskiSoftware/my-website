import Header from "./components/header/Header";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Kaniewski Software",
  description: "My personal website with blog and portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
