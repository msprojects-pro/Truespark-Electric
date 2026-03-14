import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingEmergencyButton from "@/components/layout/FloatingEmergencyButton";
import { Toaster } from "@/components/ui/toaster";
import business from "@/data/businessData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: `Professional electrical services in ${business.serviceArea}. ${business.tagline} Licensed, insured, and trusted since ${business.established}. Emergency services available 24/7.`,
  keywords: [
    "electrician",
    "electrical services",
    "residential electrical",
    "commercial electrical",
    "emergency electrician",
    "solar installation",
    "EV charging",
    "panel upgrade",
    "Nashville electrician",
    "Tennessee electrician",
    "green energy",
    "electrical contractor",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  metadataBase: new URL("https://truesparkelectric.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truesparkelectric.co",
    title: `${business.name} | ${business.tagline}`,
    description: `Professional electrical services in ${business.serviceArea}. ${business.warranty}.`,
    siteName: business.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: `Professional electrical services in ${business.serviceArea}. ${business.warranty}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: business.credentials[0],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": business.name,
  "description": business.tagline,
  "image": "https://truesparkelectric.co/logo.png",
  "@id": "https://truesparkelectric.co",
  "url": "https://truesparkelectric.co",
  "telephone": business.phones.main,
  "email": business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1920 Current Way, Industrial Park West",
    "addressLocality": "Nashville",
    "addressRegion": "TN",
    "postalCode": "37209",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1659,
    "longitude": -86.7844
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 36.1659,
      "longitude": -86.7844
    },
    "geoRadius": "75 mi"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Derek Coleman"
  },
  "foundingDate": business.established.toString(),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "890",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    business.socials.facebook,
    business.socials.instagram,
    business.socials.linkedin,
    business.socials.angi
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <FloatingEmergencyButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
