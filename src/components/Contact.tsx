import { useEffect, useState } from 'react';
import { profile } from '../content/profile';
import { Icon, type IconName } from './Icon';
import { Reveal } from './Reveal';

const channels: { icon: IconName; label: string; value: string; href?: string; external?: boolean }[] = [
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: profile.githubLabel, href: profile.github, external: true },
  { icon: 'pin', label: 'Location', value: profile.location },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the address stays visible and linked.
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="contact">
          <p className="eyebrow">Contact</p>
          <h2>Have a role or a project in mind?</h2>
          <p className="contact__lead">Email is the quickest way to reach me. I'd be glad to hear what you're working on.</p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={24} />
              {profile.email}
            </a>
            <button type="button" className="contact__copy" onClick={copyEmail}>
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <ul className="channels">
            {channels.map((channel) => {
              const body = (
                <>
                  <Icon name={channel.icon} />
                  <span>
                    <small>{channel.label}</small>
                    {channel.value}
                  </span>
                </>
              );
              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a href={channel.href} {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {body}
                    </a>
                  ) : (
                    <div>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
