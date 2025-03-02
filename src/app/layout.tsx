import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";
import I18nProvider from "@/providers/I18nProvider";
import CartBtn from "@/components/CartBtn/CartBtn";
import Modal from "@/components/Modal/Modal";

export const metadata: Metadata = {
  title: "BEBOSTORE",
  description: "All you need in one Place",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('bg.jfif')" }}
      >
        <ReduxProvider>
          <I18nProvider>
            <Navbar />
            <CartBtn />
            <Modal />
            {children}
            <Footer />
          </I18nProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
