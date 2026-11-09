import { awards, education, quotes } from '../content/profile';
import { Icon } from './Icon';
import { Reveal, SectionHeader } from './Reveal';

export function Recognition() {
  return (
    <section className="section" id="recognition">
      <div className="container">
        <SectionHeader eyebrow="Recognition" title="Awards and education" />

        <div className="honors">
          {awards.map((award) => (
            <Reveal key={award.org} className="honor">
              <span className="honor__icon">
                <Icon name="award" size={22} />
              </span>
              <p className="honor__year">{award.year}</p>
              <h3>{award.title}</h3>
              <p className="honor__org">{award.org}</p>
              <p>{award.text}</p>
            </Reveal>
          ))}
          <Reveal className="honor">
            <span className="honor__icon">
              <Icon name="cap" size={22} />
            </span>
            <p className="honor__year">{education.year}</p>
            <h3>{education.degree}</h3>
            <p className="honor__org">{education.school}</p>
          </Reveal>
        </div>

        <Reveal className="quotes">
          {quotes.map((quote) => (
            <figure key={quote.author}>
              <blockquote>{quote.text}</blockquote>
              <figcaption>{quote.author}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
