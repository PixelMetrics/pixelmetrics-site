import { todo, type Val } from './work';

export const EMAIL = 'hello@pixelmetrics.dev';
export const LOCATION = 'PixelMetrics, LLC · St. Petersburg, Florida';
export const BOOK_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('30-min scoping call')}`;

export const services = [
  { n: '01', t: 'Software', tags: 'Apps · Tools · Integrations', d: 'Custom apps and internal tools built around how your business actually runs. Not a plugin. Built for you, owned by you.' },
  { n: '02', t: 'Websites', tags: 'Design · Build · Launch', d: 'Sites that load fast, rank well and turn visitors into calls. Designed and built in-house, no templates.' },
  { n: '03', t: 'Automation', tags: 'Agents · Workflows · Dashboards', d: 'The follow-up, intake, quoting and paperwork that runs itself. If a person has to do it twice, the software does it.' },
  { n: '04', t: 'Stack upgrades', tags: 'Migrate · Modernize', d: 'We find what is slow, manual or held together with duct tape, and replace it while you keep working.' },
  { n: '05', t: 'Process', tags: 'Audit · Fix · Run', d: 'Before we automate anything, we fix the steps that waste your hours. Fewer steps, then no human needed for the rest.' },
];

// "An engineer inside your business": one engineer stays with you from audit to launch.
export const method = [
  { n: '01', step: 'Audit · on site', t: 'We sit inside your business', d: 'An engineer works alongside your team and follows how bookings, orders and money actually move. You get a written scope and a fixed quote.' },
  { n: '02', step: 'Build', t: 'Two-week stretches', d: 'Each piece is tested on a private preview you can click through before anything goes live.' },
  { n: '03', step: 'Launch · on site', t: 'The same engineer comes back', d: 'They launch it with you, train your team and make sure nothing is missed.' },
  { n: '04', step: 'Run', t: 'Support by the hour', d: 'Monitoring that wakes someone up when something breaks, and a plain-English guide for your team.' },
];

export const industries = ['Boutique hotels', 'Contractors and builders', 'Shops', 'Salons', 'Restaurants', 'Real estate', 'Marketplaces'];

export const team: { name: string; role: Val; bio: Val }[] = [
  { name: 'Alexandra', role: todo('Role'), bio: todo('One or two lines: what you do day to day, and which of our businesses you run.') },
  { name: 'Kevin', role: todo('Role'), bio: todo('One or two lines: what Kevin does, and which businesses he runs.') },
  { name: 'Gurwinder', role: 'Lead engineer', bio: todo('One or two lines: what Gurwinder builds, and since when.') },
];

// Results shown under the homepage hero. Each links to its case study.
export const proof = [
  { value: '7 min', label: 'Median time from enquiry to agent', client: 'EffectiveAgents', slug: 'effectiveagents' },
  { value: '15 days', label: 'From first line of code to live bookings', client: 'Bird of Paradise Hotel', slug: 'bird-of-paradise' },
  { value: '0', label: 'Recipes that forget who they came from', client: 'Popolo', slug: 'popolo' },
];
