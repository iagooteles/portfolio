import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import { Toaster } from "./components/toaster";
import type { FooterPageSocialsData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

export const metadata = {
  title: {
    default: "Home",
    template: "%s | Iago Teles",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const getFooterSocialsData = async (): Promise<FooterPageSocialsData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        socials {
          url
          iconSvg
        }
      }
    }
`;

  return fetchHygraphQuery(query);
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { page: footerSocialsData } = await getFooterSocialsData();
  const footerSocials = footerSocialsData;

  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <Header />
        {children}
        <ContactForm />
        <Footer footerSocials={footerSocials} />

        <BackToTop />
      </body>
    </html>
  );
}
