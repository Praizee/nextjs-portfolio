import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Stephen Adeniji | %s",
    default: "Stephen Adeniji | Home",
  },
  description: `Stephen Adeniji's Portfolio Website`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
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
