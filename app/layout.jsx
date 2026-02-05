import "./globals.css";
import ReduxProvider from "./provider/ReduxProvider";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import SmoothScrollProvider from "./common/SmoothScrollProvider";
import FixedSocialBar from "./common/FixedSocialBar";
import FixedContactBar from "./common/FixedContactBar";
import ToastProvider from "./common/ToastProvider";

export const metadata = {
  title: "Best Web development and Website",
  description: "Discover the best ESR Holiday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <ToastProvider />
          <SmoothScrollProvider>
            <Header />
            <FixedSocialBar />
            <FixedContactBar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
