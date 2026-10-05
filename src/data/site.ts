export const EMAIL = 'hello@pixelmetrics.co';
export const BOOK_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('30-min scoping call')}`;

export const services = [
  { n: '01', t: 'Software', tags: 'Apps · Tools · Integrations', d: 'Custom apps and internal tools built around how your business actually runs. Not a plugin. Built for you, owned by you.' },
  { n: '02', t: 'Websites', tags: 'Design · Build · Launch', d: 'Sites that load fast, rank well and turn visitors into calls. Designed and built in-house, no templates.' },
  { n: '03', t: 'Automation', tags: 'Agents · Workflows · Dashboards', d: 'The follow-up, intake, quoting and paperwork that runs itself. If a person has to do it twice, the software does it.' },
  { n: '04', t: 'Stack upgrades', tags: 'Migrate · Modernize', d: 'We find what is slow, manual or held together with duct tape, and replace it while you keep working.' },
  { n: '05', t: 'Process', tags: 'Audit · Fix · Run', d: 'Before we automate anything, we fix the steps that waste your hours. Fewer steps, then no human needed for the rest.' },
];

export const method: { n: string; t: string; d: string; field: { min: string; maxd?: string }; cap: string; lit?: boolean }[] = [
  { n: '01', t: 'We sit with you', d: 'One call. You walk us through your week. No tech questions, no homework.', field: { min: '400' }, cap: '1 · your business' },
  { n: '02', t: 'We find the drain', d: 'The calls you miss, the quotes you retype, the follow-up nobody gets to.', field: { min: '0.5', maxd: '2' }, cap: '16 · its workflows' },
  { n: '03', t: 'We build it in', d: 'It works inside your phone, your email, your systems. Nothing new to log into.', field: { min: '0.5', maxd: '4' }, cap: '1 step · rebuilt' },
  { n: '04', t: 'We run it', d: 'You don’t manage it. If something breaks, that’s our problem, not yours.', field: { min: '0.5', maxd: '5' }, cap: '1px · now running', lit: true },
];
