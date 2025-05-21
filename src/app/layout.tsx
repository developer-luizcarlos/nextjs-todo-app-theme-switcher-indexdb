import type { Metadata } from "next";
import { fontJosefinSans } from "../../public/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo web app",
  description:
    "Todo web app built with NextJS, able to save your tasks in your browser thanks to the usage of IndexDB.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${fontJosefinSans.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
