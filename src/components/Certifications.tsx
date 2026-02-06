type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
};

const achievements: CertificationItem[] = [
  {
    title: "Primer Lugar – Proyecto AE VISION",
    issuer: "Techstars Startup Weekend – ESPE",
    year: "2023",
  },
  {
    title: "Primer Lugar – Categoría Tecnología (Proyecto AE VISION)",
    issuer: "VII Feria Emprende – ESPE",
    year: "2024",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "EMPRETEC – Desarrollo de habilidades emprendedoras",
    issuer: "ConQuito & UNCTAD",
    year: "2024",
  },
  {
    title: "Power BI para Innovadores",
    issuer: "ConQuito",
    year: "2024",
  },
  {
    title:
      "Diseño, instalación y mantenimiento de sistemas fotovoltaicos 4KW",
    issuer: "Ministerio del Trabajo",
    year: "2024",
  },
  {
    title: "Edge AI",
    issuer: "Edge Impulse",
    year: "2025",
  },
  {
    title: "Prompt Engineering (IA Generativa)",
    issuer: "LinkedIn Learning",
    year: "2025",
  },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    year: "2021",
  },
];

function Certifications() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3>Certificaciones y Logros</h3>

      <h4>🏆 Logros</h4>
      <ul>
        {achievements.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> <br />
            {item.issuer} — {item.year}
          </li>
        ))}
      </ul>

      <h4 style={{ marginTop: "1rem" }}>📜 Certificaciones</h4>
      <ul>
        {certifications.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> <br />
            {item.issuer} — {item.year}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
