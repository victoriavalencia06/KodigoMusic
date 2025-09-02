import React, { useState } from "react";

const categories = [
  {
    label: "Para ti",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/1.jpg",
  },
  {
    label: "Nuevos lanzamientos",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/2.jpg",
  },
  {
    label: "Charts",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/3.jpg",
  },
  {
    label: "Podcasts",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/4.jpg",
  },
  {
    label: "Chill",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/5.jpg",
  },
  {
    label: "Hacer deporte",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/6.jpg",
  },
  {
    label: "Fiesta",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/7.jpg",
  },
  {
    label: "Descubrimiento",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/8.jpg",
  },
  {
    label: "Christmas Hits",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/9.jpg",
  },
  {
    label: "En mode 2000",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/10.jpg",
  },
  {
    label: "Dormir",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/11.jpg",
  },
  {
    label: "Concentración",
    img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/assets/12.jpg",
  },
];

export default function Categories() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="categories-wrapper">
      {/* Header con botón solo en móvil */}
      <div className="categories-header">
        <h2>Categorías</h2>
        <button
          className="toggle-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      </div>

      <section
        className="categories"
        data-collapsed={expanded ? "false" : "true"}
      >
        {categories.map((cat, i) => (
          <article key={i} className="category-card">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${cat.img})` }}
            />
            <span className="category-label" title={cat.label}>
              {cat.label}
            </span>
          </article>
        ))}
      </section>
    </div>
  );
}