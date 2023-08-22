import { Metadata } from "next";
import "globals.css";

export const metadata: Metadata = {
  title: "Coinearth | News Portal",
  description: "Stay updated with the latest news from around the world.",
  keywords: "news, breaking news, current events, world news",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors:{name:'Coinearth'}
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
      </head>

      <body className="p-3">
        <nav className="h-20 bg-slate-500 text-white flex justify-center items-center rounded-md">
          <h1 className="text-4xl">News Portal</h1>
        </nav>

        {children}
      </body>
    </html>
  );
}
