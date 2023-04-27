import Header from "./components/header/Header";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import "./globals.css";
import { Lato } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Kaniewski Software",
  description: "My personal website with blog and portfolio.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${lato.className} text-text`}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Header currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
