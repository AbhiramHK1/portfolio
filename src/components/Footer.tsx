import { profile } from '../content/profile';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and TypeScript.
        </p>
        <a href="#top">
          Back to top
          <Icon name="up" size={16} />
        </a>
      </div>
    </footer>
  );
}
