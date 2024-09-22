import './AboutMe.scss';
import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton';

export function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="about-me-text">
        <h2> Sobre nós</h2>
        <p>
          Sou Pablo Alexandre, advogado especializado em{' '}
          <strong>
            Direito de Família, Tributário, Condominial, Trabalhista e Civil.
          </strong>{' '}
          Com vasta experiência na advocacia e uma carreira marcada por um
          histórico notável de casos bem-sucedidos, dedico-me a oferecer
          soluções jurídicas precisas e eficazes. Minha trajetória é construída
          sobre um compromisso sólido com a excelência e a justiça, refletido em
          cada caso que assumo. Estou à disposição para fornecer suporte
          jurídico especializado e orientado para resultados, sempre buscando a
          melhor solução para suas necessidades legais.
        </p>
        <div className="whatsApp-button-geral">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
