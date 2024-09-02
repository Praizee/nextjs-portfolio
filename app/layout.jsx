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
  // https://stephen-adeniji.is-a.dev/

  title: {
    template: "Stephen Adeniji | %s",
    default: "Stephen Adeniji | Home",
  },
  description:
    "Hey there! I'm Stephen Adeniji, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
  verification: {
    google: "-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Stephen",
    "Adeola",
    "Adeniji",
    "Stephen Adeola",
    "Stephen Adeniji",
    "Stephen Adeola Adeniji",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
    "Stephen Adeniji Portfolio",
    "Stephen Adeola Portfolio",
    "Stephen Adeniji Portfolio Website",
    "Stephen Adeola Adeniji Portfolio Website",
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
    title: "Stephen Adeniji | Developer Extraordinaire",
    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
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
