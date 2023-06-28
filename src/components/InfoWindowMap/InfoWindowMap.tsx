import './InfoWindowMap.scss';

type Props = {
  title: string;
  image: string;
  detail: string;
  googleMapsUrl: string;
};
export function InfoWindowMap({ title, image, detail, googleMapsUrl }: Props) {
  return (
    <div className="info-window" data-testid="info-window">
      <img src={image} alt={title} className="img-cover" />
      <h2>{title}</h2>
      <p className="fw-5">{detail}</p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="text-regal-blue"
      >
        Ir até {title}
      </a>
    </div>
  );
}
