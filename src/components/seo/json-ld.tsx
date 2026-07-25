import { siteConfig } from "@/lib/site-config";
import { research } from "@/content/research";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpeg`,
    jobTitle: "Software Engineer",
    description:
      "Software Engineer and Cybersecurity Researcher building secure, scalable full-stack systems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sleman",
      addressRegion: "Yogyakarta",
      addressCountry: "ID",
    },
    email: siteConfig.email,
    sameAs: [siteConfig.links.github, siteConfig.links.instagram],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Cybersecurity",
      "DevSecOps",
      "Laravel",
      "Next.js",
      "Network Intrusion Detection",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Amikom Yogyakarta",
    },
  };

  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: research.title,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    isPartOf: {
      "@type": "PublicationEvent",
      name: research.conference,
    },
    identifier: research.doi,
    url: research.doiUrl,
    publisher: {
      "@type": "Organization",
      name: research.publication,
    },
    abstract: research.abstract,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
