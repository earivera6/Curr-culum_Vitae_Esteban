type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

const educationData: EducationItem[] = [
  {
    degree: "Ingeniero en Electrónica y Automatización",
    institution: "Universidad de las Fuerzas Armadas – ESPE",
    period: "Graduado: Marzo 2025",
    location: "Quito, Ecuador",
  },
  {
    degree: "Bachiller en Ciencias",
    institution: "Instituto Nacional Mejía",
    period: "2017",
    location: "Quito, Ecuador",
  },
];

function Education() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3>Educación</h3>

      {educationData.map((item, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <h4>{item.degree}</h4>
          <p>
            <strong>{item.institution}</strong> — {item.location} <br />
            <em>{item.period}</em>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Education;
