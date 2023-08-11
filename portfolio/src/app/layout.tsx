import Header from "@/components/header";
import "./globals.css";
import { Inter, Poppins, Montserrat, Fira_Mono, Tinos } from "next/font/google";
import Footer from "@/components/footer";
import { AppContexts } from "@/contexts";
import BackToTop from "@/components/Buttons/BacktoTop/Index";
import { Toaster } from "./providers/toaster";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const firamono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const tinos = Tinos({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Home",
    template: "%s | Alex Farias",
  },
  description: "My portifolio",
  icons: [{ url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.className} ${montserrat.className} ${firamono.className}  ${poppins.className} ${tinos.className}`}
    >
      <body>
        <Toaster />
        <BackToTop />
        <AppContexts>
          <Header />
          {children}
          <Footer />
        </AppContexts>
      </body>
    </html>
  );
}
