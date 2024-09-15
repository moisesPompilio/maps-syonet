import './AboutMe.scss';

export function AboutMe() {
  return (
    <section id="about" className="about-me">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBhegzV5mWr_2w6Cmzch9DAvBAlBFvjyWdw&s"
        alt="Advogado"
        className="profile-photo"
      />
      <div className="about-me-text">
        <h2>Advogado Pablo Alexandre</h2>
        <p>
          Sou João Silva, advogado especializado em direito civil e empresarial,
          com 15 anos de experiência. Formado em Direito pela Universidade XYZ,
          tenho me dedicado à defesa de empresas e pessoas físicas em causas que
          exigem um alto grau de responsabilidade e compromisso.
        </p>
      </div>
    </section>
  );
}
