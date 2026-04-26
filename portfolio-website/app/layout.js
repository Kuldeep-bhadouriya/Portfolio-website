import "./globals.css";
import Script from "next/script";
import { Bai_Jamjuree } from "next/font/google";
import EmailJSScript from "./components/EmailJSScript";
import StructuredData from "./components/StructuredData";
import ClientSideScrollReveal from "./components/ClientSideScrollReveal";

const baiJamjuree = Bai_Jamjuree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kuldeep-bhadouriya.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kuldeep Singh Bhadouriya | MERN Stack Developer Portfolio",
    template: "%s | Kuldeep Singh Bhadouriya",
  },
  description:
    "Experienced MERN Stack Developer specializing in full-stack web applications using MongoDB, Express.js, React, and Node.js. Check out my portfolio featuring innovative projects, web design services, and contact information.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Web Developer Portfolio",
    "Kuldeep Singh Bhadouriya",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Design",
    "DevOps",
    "TypeScript",
    "Python",
    "GSSoC",
  ],
  authors: [{ name: "Kuldeep Singh Bhadouriya" }],
  creator: "Kuldeep Singh Bhadouriya",
  publisher: "Kuldeep Singh Bhadouriya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Kuldeep Singh Bhadouriya | MERN Stack Developer Portfolio",
    description:
      "Experienced MERN Stack Developer specializing in full-stack web applications. Explore my projects, services, and get in touch for collaboration.",
    siteName: "Kuldeep Singh Bhadouriya Portfolio",
    images: [
      {
        url: `${siteUrl}/assets/img/home-perfil.jpg`,
        width: 1200,
        height: 630,
        alt: "Kuldeep Singh Bhadouriya - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Singh Bhadouriya | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in full-stack web applications. Check out my portfolio!",
    images: [`${siteUrl}/assets/img/home-perfil.jpg`],
    creator: "@wtf.kuldeepp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7f194392f45ae8df",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={baiJamjuree.variable}>
      <head>
        <link rel="icon" href="/assets/img/favicon.jpg?v=2" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.4.0/remixicon.css"
          crossOrigin="anonymous"
        />
        {/* Prevent flash of unstyled content - Load theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('selected-theme');
                const icon = localStorage.getItem('selected-icon');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark-theme-loading');
                  document.body.classList.add('dark-theme');
                }
              })();
            `,
          }}
        />
        <StructuredData />
        {/* EmailJS Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.EMAILJS_CONFIG = {
                publicKey: '${
                  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
                  "wXOdiuuByIuiblG_V"
                }',
                serviceId: '${
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
                  "service_8q59eqn"
                }',
                templateId: '${
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
                  "template_dbecm64"
                }'
              };
            `,
          }}
        />
        {/* GSAP & EmailJS for contact form and animations */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
          strategy="afterInteractive"
        />
        <EmailJSScript />
        {/* ScrollReveal and site scripts */}
        <ClientSideScrollReveal />
        <Script src="/assets/js/loop.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </head>
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}

