import Header from "./components/header/Header";
import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";
import { Lato } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const lato = Lato({
  weight: ["300", "400", "700"],
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
      <body className={`${lato.className} text-text`}>
        <ToasterProvider />
        <RegisterModal />
        <Header />
        {children}
      </body>
    </html>
  );
}
