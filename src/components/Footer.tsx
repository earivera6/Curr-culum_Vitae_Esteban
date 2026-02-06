function Footer() {
  return (
    <footer
      style={{
        marginTop: "3rem",
        paddingTop: "1rem",
        borderTop: "1px solid #ccc",
        fontSize: "0.9rem",
      }}
    >
      <p>
        📧 estebanrivera200039@gmail.com | 📞 0995085634
      </p>

      <p>
        🔗{" "}
        <a
          href="https://www.linkedin.com/in/estebanriveran"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/earivera6"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <p>© {new Date().getFullYear()} Esteban Andrés Rivera Novillo</p>
    </footer>
  );
}

export default Footer;
