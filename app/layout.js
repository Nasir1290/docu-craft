import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docu-Craft",
  description: "A Documentation Website By Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs = {allDocuments}/>
          {children}
        </div>
      </body>
    </html>
  );
}
