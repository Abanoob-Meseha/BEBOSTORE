import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import Navbar from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Todo",
  description: "Your best Task Management APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cover bg-center bg-fixed" style={{backgroundImage: "url('bg.jfif')"}}>
        <ReduxProvider>
          <Navbar/>
          {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
