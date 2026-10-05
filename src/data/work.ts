// Case studies. Anything wrapped in todo() is placeholder copy and renders
// with a dashed outline on the site until it is replaced with real content.
// Facts taken from the current site: EffectiveAgents is ours and the largest,
// Popolo is launching, Bird of Paradise Hotel is a client build.

export type Val = string | { todo: string };
export const todo = (text: string): Val => ({ todo: text });
export const text = (v: Val) => (typeof v === 'string' ? v : v.todo);

export interface Project {
  slug: string;
  client: string;
  relation: string;
  url?: string;
  headline: Val;
  lede: Val;
  built: Val;
  runningSince: Val;
  result: Val;
  /** The one pixel the project changed, e.g. "Missed calls: 0" */
  pixel: { label: Val; value: Val };
  /** Where the zoom lands, 0..1 */
  focus: { x: number; y: number };
  chapters: { t: string; d: Val }[];
}

export const work: Project[] = [
  {
    slug: 'effectiveagents',
    client: 'EffectiveAgents',
    relation: 'We operate · our largest',
    url: 'https://effectiveagents.com',
    headline: todo('The company we run every day, on the systems we built for it.'),
    lede: todo('Describe the business in two sentences: who it serves, how big it is, and what the team spends its week doing.'),
    built: todo('Software · Automation'),
    runningSince: todo('2023'),
    result: todo('Missed calls: 0'),
    pixel: { label: todo('Missed calls'), value: todo('0') },
    focus: { x: 0.97, y: 0.03 },
    chapters: [
      { t: 'The business', d: todo('What the company does, and the whole of it, before we zoomed in.') },
      { t: 'The drain', d: todo('The one step that was wasting hours. Name it plainly and put a number on it.') },
      { t: 'What we built', d: todo('What replaced it: the software, the automation, the screens people actually touch.') },
      { t: 'How we run it', d: todo('Who watches it, what happens when it breaks, and how long it has been running.') },
    ],
  },
  {
    slug: 'popolo',
    client: 'Popolo',
    relation: 'We operate · launching',
    url: 'https://getpopolo.com',
    headline: todo('A new product, built and run by the people who will live with it.'),
    lede: todo('Describe Popolo in two sentences: what it is, who it is for, and where it is in its launch.'),
    built: todo('Software · Website'),
    runningSince: todo('Launching 2026'),
    result: todo('Signups: open'),
    pixel: { label: todo('Days to launch'), value: todo('0') },
    focus: { x: 0.22, y: 0.7 },
    chapters: [
      { t: 'The business', d: todo('The product and the market it is entering.') },
      { t: 'The drain', d: todo('The problem Popolo removes for its customers.') },
      { t: 'What we built', d: todo('The product, the site and the systems behind them.') },
      { t: 'How we run it', d: todo('Who operates it day to day, and what we measure.') },
    ],
  },
  {
    slug: 'bird-of-paradise',
    client: 'Bird of Paradise Hotel',
    relation: 'Client build',
    headline: todo('A hotel website rebuilt to turn lookers into bookings.'),
    lede: todo('Describe the hotel and what its old site was costing it.'),
    built: todo('Website · Automation'),
    runningSince: todo('2025'),
    result: todo('Direct bookings: up'),
    pixel: { label: todo('Booking enquiries answered'), value: todo('100%') },
    focus: { x: 0.68, y: 0.24 },
    chapters: [
      { t: 'The business', d: todo('The hotel, its guests and how they found it.') },
      { t: 'The drain', d: todo('Where bookings were leaking: slow pages, unanswered enquiries, third-party fees.') },
      { t: 'What we built', d: todo('The new site and whatever runs behind it.') },
      { t: 'How we run it', d: todo('Hosting, updates and who the hotel calls when something changes.') },
    ],
  },
];
