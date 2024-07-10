import "@/styles/globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700"],
});

export const metadata = {
  title: "AAVE icons",
  description: "Reliable svg icons for AAVE ecosystem",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white font-sans dark:bg-brand-900 ${inter.variable} ${spaceGrotesk.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
