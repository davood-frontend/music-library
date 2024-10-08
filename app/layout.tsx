import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainTheme } from "./themes/MainTheme";
const inter = Inter({ subsets: ["latin"] });
import { ContextProvider } from "./context/mainContext";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainTheme>
          <ContextProvider>
            {children}
          </ContextProvider>
        </MainTheme>
      </body>
    </html>
  );
}
