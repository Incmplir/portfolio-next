import { ProyectsData } from '../layout/Proyects/ProyectsData';

export default function ProyectosPage() {
  return (
    <div>
      {ProyectsData.map((proyecto) => (
        <div key={proyecto.title}>
          <h2>{proyecto.title}</h2>
          <ul>
            {proyecto.badge.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p>{proyecto.description}</p>
          <img src={proyecto.bgProyect} alt={proyecto.title} />
        </div>
      ))}
    </div>
  );
}