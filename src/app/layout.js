"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./RtkQuery/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
