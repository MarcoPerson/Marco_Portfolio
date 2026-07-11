import "./globals.css";
import Providers from "./providers";
import content from "@/data/content.json";

const { meta } = content;

// Exporting metadata from a Server Component is what makes the page fully
// fetchable: Next renders these tags into the initial HTML, so crawlers and
// link-preview bots get real content without executing JavaScript.
export const metadata = {
  metadataBase: new URL(meta.url),
  title: meta.title,
  description: meta.description,
  authors: [{ name: meta.author }],
  keywords: meta.keywords,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: meta.ogTitle,
    description: meta.ogDescription,
    url: meta.url,
    siteName: meta.siteName,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: meta.twitterCard,
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [meta.ogImage],
  },
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
