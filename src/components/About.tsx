import { Monogram } from '../art/Monogram';
import { education, principles, profile, roles, softSkills } from '../content/profile';
import { Reveal, SectionHeader } from './Reveal';

// To use a real photo, add src/assets/portrait.jpg (or .png / .webp). No code change needed.
const portraits = import.meta.glob<string>('../assets/portrait.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const portrait = Object.values(portraits)[0];

const current = roles.find((role) => role.current);

const facts = [
  { label: 'Based in', value: profile.fullLocation },
  { label: 'Currently', value: current ? `${current.title}, ${current.stopLabel}` : profile.role },
  { label: 'Education', value: `B.Sc. Computer Science, ${education.year.replace('Graduated ', '')}` },
  { label: 'Strengths', value: softSkills.join(', ') },
];

export function About() {
  return (
    <section className="section section--surface" id="about">
      <div className="container">
        <SectionHeader eyebrow="About" title="A developer who follows the problem down the stack" />

        <div className="about">
          <Reveal className="about__side">
            <div className="portrait">
              {portrait ? (
                <img src={portrait} alt={`Portrait of ${profile.name}`} />
              ) : (
                <Monogram className="portrait__mark" />
              )}
            </div>
            <dl className="facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="about__main">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <div className="principles">
              {principles.map((principle) => (
                <div key={principle.title} className="principle">
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
