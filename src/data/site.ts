import { todo, type Val } from './work';

export const EMAIL = 'hello@pixelmetrics.dev';
export const LOCATION = 'PixelMetrics, LLC · St. Petersburg, Florida';
export const BOOK_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('30-min scoping call')}`;

// What we build: three plain offers, each tied to a case study.
export const offers = [
  { t: 'A website that brings in work', d: 'Fast, bilingual if you need it, with booking or quotes built in.', example: { label: 'Bird of Paradise Hotel', slug: 'bird-of-paradise' } },
  { t: 'Admin that runs itself', d: 'Follow-ups, reminders, payments and paperwork, done by software instead of by hand.', example: { label: 'EffectiveAgents', slug: 'effectiveagents' } },
  { t: 'Your own software', d: 'The tool your business needs that no off-the-shelf app sells.', example: { label: 'Popolo', slug: 'popolo' } },
];

// What happens after you book.
export const afterBooking: { when: Val; t: string; d: string }[] = [
  { when: 'The call', t: '30 minutes', d: 'You tell us what’s slow, manual or broken. No tech questions, no homework.' },
  { when: todo('2 days later'), t: 'A one-page plan', d: 'What we’d build, how long it takes and the price.' },
  { when: 'You decide', t: 'No retainer', d: 'If it’s a yes, one engineer works on site with you, builds it and comes back for the launch.' },
];

// Why us: three facts.
export const reasons = [
  { t: 'We run it ourselves', d: 'EffectiveAgents and Popolo, two of our own businesses, run on software we built.' },
  { t: 'One engineer, start to finish', d: 'The person who learns your business is the person who builds it. No handoffs.' },
  { t: 'Local', d: 'Based in St. Petersburg, Florida. For the audit and the launch, we come to you.' },
];

// Questions buyers ask. Answers wrapped in todo() need your real numbers.
export const faqs: { q: string; a: Val }[] = [
  { q: 'What does a project cost?', a: todo('Most projects are $X to $Y. You get a fixed price in writing before any work starts.') },
  { q: 'How long does it take?', a: todo('Most websites take X to Y weeks. Bird of Paradise went from first line of code to live bookings in 15 days.') },
  { q: 'Do we own the website and code?', a: todo('Yes. The code, the domain and every account are in your name.') },
  { q: 'What if something breaks?', a: 'Our monitoring alerts us, usually before you notice. After launch, support is by the hour, so you only pay for what you use.' },
  { q: 'Do I need to be technical?', a: 'No. You tell us how your week works. We handle the rest and explain it in plain English.' },
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
