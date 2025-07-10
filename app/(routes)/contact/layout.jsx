import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      {/* <script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        async
      ></script> */}
    </>
  );
}
