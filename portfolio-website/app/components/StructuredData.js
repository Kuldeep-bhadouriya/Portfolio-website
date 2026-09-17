const siteUrl = "https://kuldeep-bhadouriya.vercel.app";

export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kuldeep Singh Bhadouriya | MERN Stack Developer Portfolio",
      description:
        "Portfolio of Kuldeep Singh Bhadouriya, a MERN Stack Developer specializing in full-stack web applications, web design, and DevOps.",
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Kuldeep Singh Bhadouriya",
      url: siteUrl,
      logo: `${siteUrl}/assets/img/favicon.jpg`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${siteUrl}/#contact`,
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://github.com/Kuldeep-bhadouriya",
        "https://www.linkedin.com/in/kuldeep-singh-bhadouriya/",
        "https://www.instagram.com/wtf.kuldeepp/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      inLanguage: "en-US",
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kuldeep Singh Bhadouriya",
      url: siteUrl,
      image: `${siteUrl}/assets/img/home-perfil.jpg`,
      jobTitle: "MERN Stack Developer",
      description:
        "MERN Stack Developer and B.Tech CS student at ITM Gwalior. GSSoC '25 Contributor, Google Cloud Innovator, and Web Dev Head at GDSC. Skilled in full-stack development, DevOps, and DSA in C++.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      worksFor: { "@id": `${siteUrl}/#organization` },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "ITM Gwalior",
      },
      knowsAbout: [
        "MERN Stack Development",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "Web Development",
        "TypeScript",
        "Python",
        "DevOps",
        "C++ Programming",
        "DSA",
        "UI/UX Design",
      ],
      sameAs: [
        "https://github.com/Kuldeep-bhadouriya",
        "https://www.linkedin.com/in/kuldeep-singh-bhadouriya/",
        "https://www.instagram.com/wtf.kuldeepp/",
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}