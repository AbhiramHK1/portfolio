import { useEffect, useState } from 'react';
import { Monogram } from '../art/Monogram';
import { navLinks, profile } from '../content/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { Icon } from './Icon';

const sectionIds = navLinks.map((link) => link.id);

export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

export function Nav() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <Monogram className="nav__mark" />
          <span>{profile.name}</span>
        </a>

        <nav id="primary-nav" className={`nav__links${open ? ' is-open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-button" type="button" onClick={toggle} aria-label={`Switch to ${nextTheme} mode`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="button button--small nav__resume" href={resumeUrl} download>
            <Icon name="download" size={16} />
            Resume
          </a>
          <button
            className="icon-button nav__toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
