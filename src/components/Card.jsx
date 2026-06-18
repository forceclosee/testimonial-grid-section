import bgPatternQuotations from "../assets/bg-pattern-quotation.svg";

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
        <p className="card__title">{title}</p>
        <span className="card__status">{status}</span>
      </div>
      <div className="card__content-wrapper">
        <p className="card__content-highlight">{highlight}</p>
        <p className="card__content">{content}</p>
      </div>
      {title === "Daniel Clifford" && (
        <img
          className="card__bg-quotations"
          src={bgPatternQuotations}
          alt=""
          aria-hidden="true"
        />
      )}
    </section>
  );
}
