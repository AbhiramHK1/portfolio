import { roles } from '../content/profile';
import { Chips, Reveal, SectionHeader } from './Reveal';

export function Experience() {
  return (
    <section className="section section--surface" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="The route so far"
          lead="From freelance client work to enterprise platforms in logistics, finance and tax."
        />

        <ol className="route">
          {roles.map((role) => (
            <li key={role.id} className={`stop${role.current ? ' stop--current' : ''}`}>
              <p className="stop__period">{role.period}</p>
              <div className="stop__rail" aria-hidden="true">
                <span className="stop__dot" />
              </div>
              <Reveal className="stop__content">
                <h3>{role.title}</h3>
                <p className="stop__company">{role.company}</p>
                <p className="stop__project">{role.project}</p>

                <ul className="wins">
                  {role.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <Chips items={role.stack} />

                <details className="stop__details">
                  <summary>What I did</summary>
                  <ul>
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
