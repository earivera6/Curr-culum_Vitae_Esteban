type SkillCategory = {
  title: string;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Automatización y Control",
    skills: [
      "PLC Siemens y Allen Bradley (Ladder, FBD, Structured Text)",
      "Redes industriales: Profinet, Profibus, Ethernet/IP, AS-i",
      "Control de procesos y maquinaria industrial",
    ],
  },
  {
    title: "Diseño y Electrónica",
    skills: [
      "Diagramas eléctricos y P&ID (AutoCAD Electrical, EPLAN)",
      "Diseño y reparación de PCB (Proteus, Eagle, KiCad)",
      "Domótica y sistemas inteligentes",
    ],
  },
  {
    title: "Software y Datos",
    skills: [
      "TIA Portal, WinCC, RSLogix, Studio 5000, Ignition",
      "Arduino IDE",
      "Power BI, Excel avanzado, MS Project",
      "MySQL, RStudio",
    ],
  },
  {
    title: "Energía",
    skills: [
      "Diseño, instalación y mantenimiento de sistemas solares fotovoltaicos residenciales",
    ],
  },
];

function Skills() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3>Habilidades Técnicas</h3>

      {skillsData.map((category, index) => (
        <div key={index} style={{ marginBottom: "1.2rem" }}>
          <h4>{category.title}</h4>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
