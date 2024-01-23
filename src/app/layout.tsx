import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Navbar";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/FilterContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "NextCommerce",
  description: "Developed by VinCorp",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        ></link>
      </head>
      <body className={inter.className}>
        <div>
          <div>
            <FilterProvider>
              <CartProvider>
                <Header />
                <Nav />
                {children}
              </CartProvider>
            </FilterProvider>
          </div>
          <div>
            <Footer />
          </div>
        </div>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        ></Script>
      </body>
    </html>
  );
}
