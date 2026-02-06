type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
};

const experienceData: ExperienceItem[] = [
  {
    role: "Operador de Mantenimiento",
    company: "Rhelec Ingeniería Cía. Ltda.",
    period: "Diciembre 2023 – Noviembre 2024",
    location: "Sangolquí, Ecuador",
    responsibilities: [
      "Ejecución de mantenimientos preventivos y correctivos en sistemas eléctricos de media y baja tensión.",
      "Mantenimiento de grupos electrógenos, transformadores, sistemas de aire acondicionado y tableros eléctricos.",
      "Gestión de alarmas y coordinación de personal técnico para intervenciones correctivas.",
      "Soporte a sistemas de telecomunicaciones y radiofrecuencia.",
      "Planificación de mantenimientos preventivos en estaciones de telecomunicaciones."
    ],
  },
  {
    role: "Capacitador Académico",
    company: "Club de Entrenamiento Cerebral (CEC)",
    period: "Febrero 2019 – Diciembre 2023",
    location: "Quito, Ecuador",
    responsibilities: [
      "Tutorías en Matemáticas y Física para estudiantes de bachillerato.",
      "Desarrollo de habilidades pedagógicas y comunicativas.",
      "Ejecución de talleres de robótica educativa para niños y jóvenes.",
    ],
  },
];

function Experience() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3>Experiencia Profesional</h3>

      {experienceData.map((item, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
          <h4>{item.role}</h4>
          <p>
            <strong>{item.company}</strong> — {item.location} <br />
            <em>{item.period}</em>
          </p>

          <ul>
            {item.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
