import Head from "next/head";
import type { ReactNode } from "react";
import Header from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`Dev Blog - ${pageTitle}`}</title>
        <meta name="description" content="Dev Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-50">{children}</main>
    </>
  );
}
