import Header from "@/components/header";
import "../globals.css";
import { Inter, Poppins, Montserrat, Fira_Mono } from "next/font/google";
import Footer from "@/components/footer";
import { AppContexts } from "@/contexts";

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

export const metadata = {
  title: "Alex Farias | Portfolio",
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
      lang="en"
      className={`${inter.className} ${montserrat.className} ${firamono.className}  ${poppins.className}`}
    >
      <body>
        <AppContexts>
          <Header />
          {children}
          <Footer />
        </AppContexts>
      </body>
    </html>
  );
}
