import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import { Noto_Sans_JP, Figtree, Fira_Sans_Condensed, Manrope } from "next/font/google";
import Header from "./_layouts/header/header";
import Footer from "./_layouts/footer/footer";
import { HamburgerMenuContextProvider } from "./_context/hamburger-menu-context";
import Wrapper from "./_layouts/wrapper/wrapper";
import HamburgerMenu from "./_components/common/hamburger-menu/hamburger-menu";
import { HeaderContextProvider } from "./_context/header-context";
// import { ReCaptchaProvider } from "next-recaptcha-v3";
import GoogleAnalytics from "./_utils/google-analytics";
import { Clarity } from "./_utils/clarity";
import CampaignBanner from "./_components/common/campaign-banner/campaign-banner";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-ja",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-fig",
  display: "swap",
});

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fira",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
        <Clarity />
      </head>
      <body className={`${notoSansJp.variable} ${figtree.variable} ${firaSansCondensed.variable} ${manrope.variable}`}>
        <HamburgerMenuContextProvider>
          <HeaderContextProvider>
            <Wrapper>
              <Header />
              <HamburgerMenu />
              {children}
              <Footer />
              <CampaignBanner />
            </Wrapper>
          </HeaderContextProvider>
        </HamburgerMenuContextProvider>
      </body>
    </html>
  );
}
