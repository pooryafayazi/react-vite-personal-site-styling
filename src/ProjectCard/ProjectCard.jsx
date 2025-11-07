// src\ProjectCard\ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'


const ProjectCard = ({ item }) => {
  return (
    <article className="card">
      <div className="card-head">
        <h3>{item.title}</h3>
        {item.year && <span className="badge">{item.year}</span>}
      </div>
      <p className="muted">{item.stack.join(' • ')}</p>
      <p>{item.description}</p>
      <div className="actions">
        {item.demo && <a href={item.demo} target="_blank" rel="noreferrer">دمو</a>}
        {item.repo && <a href={item.repo} target="_blank" rel="noreferrer"> لینک </a>}
        {item.docs && <a href={item.docs} target="_blank" rel="noreferrer">مستندات</a>}
      </div>
    </article>
  );
}

export default ProjectCard;