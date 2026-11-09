import { useMemo, useState } from 'react';
import { roles, skillGroups, type Role } from '../content/profile';
import { Reveal, SectionHeader } from './Reveal';

/** Finds the resume line that best shows a skill in use, if one names it. */
function evidenceFor(role: Role, skill: string): string | undefined {
  const needle = skill.replace('.js', '').replace(' Authentication', '').toLowerCase();
  return [...role.achievements, ...role.responsibilities].find((line) => line.toLowerCase().includes(needle));
}

export function Skills() {
  const [selected, setSelected] = useState('ASP.NET Core');

  const usedSkills = useMemo(() => new Set(roles.flatMap((role) => role.uses)), []);
  const matches = roles.filter((role) => role.uses.includes(selected));

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="The toolkit, and where it has been used"
          lead="Select a highlighted skill to see the roles and projects behind it."
        />

        <Reveal className="skills">
          <div className="skills__groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="chips">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      {usedSkills.has(skill) ? (
                        <button
                          type="button"
                          className="chip chip--button"
                          aria-pressed={selected === skill}
                          onClick={() => setSelected(skill)}
                        >
                          {skill}
                        </button>
                      ) : (
                        <span className="chip chip--plain">{skill}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="skills__panel" aria-live="polite">
            <p className="eyebrow">Where I've used it</p>
            <h3>{selected}</h3>
            <p className="skills__count">
              {matches.length} {matches.length === 1 ? 'role' : 'roles'}
            </p>
            <ul className="usage">
              {matches.map((role) => {
                const evidence = evidenceFor(role, selected);
                return (
                  <li key={role.id}>
                    <strong>{role.stopLabel}</strong>
                    <span className="usage__period">{role.period}</span>
                    <p>{evidence ?? role.project}</p>
                  </li>
                );
              })}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
