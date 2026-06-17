import danielClifford from "../assets/image-daniel.jpg";

import "./card.css";

export default function Card({
  image,
  title,
  status,
  highlight,
  content,
  elementClass,
  imageModifier,
}) {
  return (
    <section className={`${elementClass} card`}>
      <img
        className={`card__image ${imageModifier}`}
        src={image}
        alt={title}
        width={56}
        height={56}
      />
      <div className="card__metadata-wrapper">
        <h2 className="card__title">{title}</h2>
        <span className="card__status">{status}</span>
      </div>
      <div className="card__content-wrapper">
        <p className="card__content-highlight">{highlight}</p>
        <p className="card__content">{content}</p>
      </div>
    </section>
  );
}
