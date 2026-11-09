import { HeroMap } from '../art/HeroMap';
import { profile, stats } from '../content/profile';
import { Icon } from './Icon';
import { resumeUrl } from './Nav';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero__statement">{profile.statement}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button" href="#work">
              See my work
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button--ghost" href={resumeUrl} download>
              <Icon name="download" size={18} />
              Download resume
            </a>
          </div>
          <ul className="hero__links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={18} />
                GitHub
              </a>
            </li>
            <li>
              <span>
                <Icon name="pin" size={18} />
                {profile.location}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <HeroMap />

      <div className="hero__stats">
        <dl className="container stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
