import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://stephen-adeniji.vercel.app/"),

  title: {
    template: "Stephen Adeniji | %s",
    default: "Stephen Adeniji | Home",
  },
  description: `Stephen Adeniji's Portfolio Website`,
  verification: {
    // google: "-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU",
    google: "q_gak-J1lGaJGfTDefA3U-pidifSLpy_BtiN7Aqzvt4",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Stephen",
    "Adeola",
    "Adeniji",
    "Stephen Adeniji",
    "Stephen Adeola Adeniji",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
  ],
  authors: [
    { name: "Adeniji" },
    { name: "Stephen", url: "https://stephen-adeniji.vercel.app/" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU"
        />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

// ADD THIS TO OTHER PAGES

// export const metadata: Metadata = {
//   title: 'Create Invoice',
// description: `Stephen Adeniji's Portfolio Website`,
// };
