import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider, ProgressBarProvider } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  // metadataBase: new URL("https://stephen-adeniji.vercel.app/"),
  metadataBase: new URL("https://stephen-adeniji.is-a.dev/"),

  title: {
    template: "Stephen Adeniji | %s",
    default: "Stephen Adeniji | Home",
  },
  description:
    "Hey there! I'm Stephen Adeniji, a developer on a mission to craft engaging experiences through code. Welcome to my corner of the web!",
  verification: {
    // google: "-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU", // for vercel
    google: "q_gak-J1lGaJGfTDefA3U-pidifSLpy_BtiN7Aqzvt4", // for is-a.dev
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
    // { name: "Stephen", url: "https://stephen-adeniji.vercel.app/" },
    { name: "Stephen", url: "https://stephen-adeniji.is-a.dev/" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.webp",
    title: "Stephen Adeniji | Developer Extraordinaire",
    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ProgressBarProvider>
            <Header />
            {children}
            <Toaster />
            <BackToTopButton />
            <Footer />
          </ProgressBarProvider>
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

