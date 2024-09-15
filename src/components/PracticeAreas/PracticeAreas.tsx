import { useEffect, useRef } from 'react';
import './PracticeAreas.scss';
import { areasAtuacao } from '../../util/globalVariables';

export function PracticeAreas() {
  const areasRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    areasRef.current.forEach(area => observer.observe(area));

    return () => {
      areasRef.current.forEach(area => observer.unobserve(area));
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) areasRef.current[index] = el;
  };
  return (
    <section id="areas" className="practice-areas">
      {areasAtuacao.map((area, index) => (
        <div
          key={area.title}
          ref={setRef(index)}
          className={`area ${index % 2 === 0 ? 'right' : 'left'}`}
        >
          <img src={area.image} alt={area.title} className="area-photo" />
          <div className="are-text">
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
