import { impact } from '../content/profile';
import { useInView } from '../hooks/useInView';
import { SectionHeader } from './Reveal';

export function Impact() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="section section--surface" id="impact">
      <div className="container">
        <SectionHeader
          eyebrow="Measured impact"
          title="Performance work, in numbers"
          lead="Results from production systems, each one tied to a specific piece of query, workflow or backend tuning."
        />

        <div ref={ref} className={`impact${inView ? ' is-in' : ''}`}>
          <ul className="legend" aria-hidden="true">
            <li>
              <span className="legend__swatch legend__swatch--before" />
              Before
            </li>
            <li>
              <span className="legend__swatch legend__swatch--after" />
              After optimization
            </li>
          </ul>

          <div className="impact__rows" aria-hidden="true">
            {impact.map((item) => (
              <div className="impact-row" key={item.metric}>
                <div className="impact-row__label">
                  <strong>{item.metric}</strong>
                  <span>{item.project}</span>
                </div>
                <div className="impact-row__bars">
                  <div className="bar-line">
                    <span className="bar bar--before" style={{ '--w': 1 } as React.CSSProperties} data-tip={`Before: ${item.beforeLabel}`} />
                    <span className="bar-value">{item.beforeLabel}</span>
                  </div>
                  <div className="bar-line">
                    <span
                      className="bar bar--after"
                      style={{ '--w': item.after / item.before } as React.CSSProperties}
                      data-tip={`After: ${item.afterLabel}`}
                    />
                    <span className="bar-value bar-value--strong">{item.afterLabel}</span>
                  </div>
                </div>
                <div className="impact-row__saving">
                  <span>{item.saving}</span>
                  <small>less time</small>
                </div>
              </div>
            ))}
          </div>

          <p className="impact__note">Each pair of bars is scaled to its own starting point.</p>

          <div className="sr-only">
            <table>
              <caption>Performance improvements</caption>
              <thead>
                <tr>
                  <th scope="col">Metric</th>
                  <th scope="col">Project</th>
                  <th scope="col">Before</th>
                  <th scope="col">After</th>
                  <th scope="col">Reduction</th>
                </tr>
              </thead>
              <tbody>
                {impact.map((item) => (
                  <tr key={item.metric}>
                    <th scope="row">{item.metric}</th>
                    <td>{item.project}</td>
                    <td>{item.beforeLabel}</td>
                    <td>{item.afterLabel}</td>
                    <td>{item.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
