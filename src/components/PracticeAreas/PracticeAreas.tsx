import { useEffect, useRef } from 'react';
import './PracticeAreas.scss';

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
      <div ref={setRef(0)} className="area right">
        <img
          src="https://www.vaticannews.va/content/dam/vaticannews/multimedia/2021/12/26/famiglia.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg"
          alt="Advogado"
          className="area-photo"
        />
        <div className="are-text">
          <h3>Direito de Familia </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div ref={setRef(1)} className="area left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHED9SOc6q7i1XVI_i5F3EXOVD0TDEo9rdhA&s"
          alt="Advogado"
          className="area-photo"
        />
        <div className="are-text">
          <h3>Direito Condominial</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div ref={setRef(2)} className="area right">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBhegzV5mWr_2w6Cmzch9DAvBAlBFvjyWdw&s"
          alt="Advogado"
          className="area-photo"
        />
        <div className="are-text">
          <h3>Direito Civil</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div ref={setRef(3)} className="area left">
        <img
          src="https://www.crtba.org.br/wp-content/uploads/2022/05/materia.jpg"
          alt="Advogado"
          className="area-photo"
        />
        <div className="are-text">
          <h3>Direito Trabalhista</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div ref={setRef(4)} className="area right">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBhegzV5mWr_2w6Cmzch9DAvBAlBFvjyWdw&s"
          alt="Advogado"
          className="area-photo"
        />
        <div className="are-text">
          <h3>Direito Tributário</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
