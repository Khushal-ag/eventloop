import Provider from "@/components/shared/Provider";
import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Eventloop",
  description: "Eventloop is a platform to post and manage events",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={poppins.variable} suppressHydrationWarning>
          {children}
          <Toaster />
        </body>
      </html>
    </Provider>
  );
}
