import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import { testimonialData } from "../utils/testimonial-data.js";

import "./App.css";

export default function App() {
  return (
    <>
      <main className="testimonial">
        <div className="testimonial__wrapper">
          {testimonialData.map((data) => (
            <Card
              key={data.id}
              imageModifier={data.imageModifier}
              image={data.image}
              title={data.title}
              status={data.status}
              highlight={data.highlight}
              content={data.content}
              elementClass={data.elementClass}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
