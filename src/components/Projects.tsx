import { ProjectArt } from '../art/ProjectArt';
import { projects } from '../content/profile';
import { Chips, Reveal, SectionHeader } from './Reveal';

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Platforms I have helped build"
          lead="Enterprise systems and client products across logistics, financial compliance, tax and hospitality."
        />

        <div className="work-grid">
          {projects.map((project) => (
            <Reveal key={project.id} className="work-grid__item">
              <article className="project">
                <div className="project__art">
                  <ProjectArt art={project.art} alt={project.artAlt} />
                </div>
                <div className="project__body">
                  <p className="project__domain">{project.domain}</p>
                  <h3>{project.title}</h3>
                  <p className="project__context">{project.context}</p>
                  <p>{project.description}</p>
                  <p className="project__outcome">{project.outcome}</p>
                  <Chips items={project.stack} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
