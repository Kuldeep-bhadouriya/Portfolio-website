export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kuldeep Singh Bhadouriya",
    url: "https://kuldeep-bhadouriya.vercel.app",
    image: "https://kuldeep-bhadouriya.vercel.app/assets/img/home-perfil.jpg",
    jobTitle: "MERN Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Scaler School of Technology",
    },
    description:
      "MERN Stack Developer and B.Tech CS student at ITM Gwalior. GSSoC '25 Contributor, Google Cloud Innovator, and Web Dev Head at GDSC. Skilled in full-stack development, DevOps, and DSA in C++.",
    alumniOf: {
      "@type": "Organization",
      name: "Scaler School of Technology",
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
      "https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311/",
      "https://www.instagram.com/wtf.kuldeepp/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
