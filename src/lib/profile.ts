/**
 * Profile helpers. Learners fill docs/PROFILE.md in Lab 01.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export type Profile = {
  name: string;
  headline: string;
  bio: string;
  audience: string;
  interests: string[];
};

const FALLBACK: Profile = {
  name: 'Your Name',
  headline: 'Personal branding site (course stub)',
  bio: 'Replace this stub after Lab 01 Interview. Write docs/PROFILE.md then wire pages in Lab 04.',
  audience: 'Hiring managers / peers / community',
  interests: ['AI agents', 'Web', 'Teaching'],
};

export function loadProfile(): Profile {
  const path = join(process.cwd(), 'docs', 'PROFILE.md');
  if (!existsSync(path)) return FALLBACK;
  const raw = readFileSync(path, 'utf8');
  const get = (label: string) => {
    const m = raw.match(new RegExp(`^##\\s*${label}\\s*$([\\s\\S]*?)(?=^##\\s|$)`, 'm'));
    return (m?.[1] || '').trim();
  };
  const interests = get('Interests')
    .split(/\r?\n/)
    .map((l) => l.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean);
  return {
    name: get('Name') || FALLBACK.name,
    headline: get('Headline') || FALLBACK.headline,
    bio: get('Bio') || FALLBACK.bio,
    audience: get('Audience') || FALLBACK.audience,
    interests: interests.length ? interests : FALLBACK.interests,
  };
}
