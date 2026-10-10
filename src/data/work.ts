// Case studies. Anything wrapped in todo() is placeholder copy and renders
// with a dashed outline on the site until it is replaced with real content.
// Content comes from write-ups of each project's repository (October 2026).

import type { ImageMetadata } from 'astro';
import bopHome from '../assets/work/bird-of-paradise-homepage.webp';
import bopPackages from '../assets/work/bird-of-paradise-packages.webp';
import bopSurf from '../assets/work/bird-of-paradise-surf.webp';
import bopPhoneEs from '../assets/work/bird-of-paradise-phone-es.webp';
import eaIntake from '../assets/work/effectiveagents-intake.webp';
import popoloLanding from '../assets/work/popolo-landing.webp';
import popoloTable from '../assets/work/popolo-demo-table.webp';

export type Val = string | { todo: string };
export const todo = (text: string): Val => ({ todo: text });
export const text = (v: Val) => (typeof v === 'string' ? v : v.todo);

export interface Project {
  slug: string;
  client: string;
  relation: string;
  url?: string;
  headline: Val;
  built: Val;
  runningSince: Val;
  result: Val;
  /** The one pixel the project changed, e.g. "Missed calls: 0" */
  pixel: { label: Val; value: Val };
  /** A client's own words. Never write one for them. */
  quote?: { text: string; by: string; role: string };
  /** Screenshots; the first is the card and case-study lead image */
  images?: { src: ImageMetadata; alt: string; phone?: boolean }[];
  /** Before and after, one or two sentences each */
  before: string;
  after: string;
  /** Three short results */
  results: string[];
}

export const work: Project[] = [
  {
    slug: 'effectiveagents',
    client: 'EffectiveAgents',
    relation: 'Our own business · our largest',
    url: 'https://www.effectiveagents.com',
    headline: 'We took over the code in March. By July, new leads could reach agents with no one pressing a button.',
    built: 'Software · Website · Automation',
    runningSince: '2023 · in-house since March 2026',
    before: 'Every new lead waited for someone on staff to check it, pick agents and press release. If that person was busy, asleep or away, the lead sat.',
    after: 'Software checks, scores and matches every lead to the top three local agents. With one switch, staff can let it release leads on its own.',
    results: ['7 min median from enquiry to agent', 'More than 2,000 changes shipped since we took over the code in March 2026', 'Sales agents never reported are now flagged automatically'],
    result: 'Enquiry to agent: 7 min median',
    pixel: { label: 'Median time from enquiry to agent', value: '7 min' },
    images: [{ src: eaIntake, alt: 'EffectiveAgents seller intake form, step 1 of 5: property type and address.' }],
  },
  {
    slug: 'popolo',
    client: 'Popolo',
    relation: 'Our own business · launching',
    url: 'https://getpopolo.com',
    headline: 'A family cookbook that gets recipes out of the group chat, and remembers who they came from.',
    built: 'Software · Website · Automation',
    runningSince: 'Live in soft launch',
    before: 'Family recipes were scattered across group chats, screenshots and handwritten cards, with no record of who each one came from.',
    after: 'Paste a link or photograph a card and it becomes a recipe in the family cookbook, tagged with who it came from and shared at a private Table.',
    results: ['Handwritten cards typed up, with the original photo kept', 'A weekly Sunday Table email for every family', 'An iPhone app on the way'],
    result: 'Recipes without a source: 0',
    pixel: { label: 'Recipes that forget who they came from', value: '0' },
    images: [
      { src: popoloLanding, alt: 'Popolo landing page: “The cookbook you’ll still be adding to in ten years”, beside a recipe for Nonna’s ragù.' },
      { src: popoloTable, alt: 'A sample family Table, “The Popolos”, with each recipe showing who it came from and how often it has been cooked.' },
    ],
  },
  {
    slug: 'bird-of-paradise',
    client: 'Bird of Paradise Hotel',
    relation: 'Client build',
    url: 'https://birdofparadisehotel.com',
    headline: 'A family hotel that now takes, charges and confirms its own bookings.',
    built: 'Software · Website · Automation',
    runningSince: 'September 2026',
    before: 'Every booking went through someone else’s booking page. Prices were updated by hand, and paid bookings were typed into the reservation system a second time.',
    after: 'Guests book and pay a deposit on the hotel’s own site, in English or Spanish. The reservation fills itself in and the balance charges itself.',
    results: ['Live in 15 days, from first line of code to real bookings', 'Bookings retyped by hand: 0', 'Guests change or cancel on their own, with refunds handled for them'],
    result: 'Bookings retyped by hand: 0',
    quote: {
      text: 'In fifteen days we had a website that feels like our hotel and lets guests book direct in English or Spanish, and the changes we ask for get done fast.',
      by: 'Tina and Carlos',
      role: 'Owners, Bird of Paradise Hotel, Jacó, Costa Rica',
    },
    pixel: { label: 'Bookings retyped by hand', value: '0' },
    images: [
      { src: bopHome, alt: 'Bird of Paradise Hotel homepage: “Two minutes from Jacó Beach, breakfast included”, with the date picker and Check availability button.' },
      { src: bopPackages, alt: 'Packages page: “Everything in one booking”, with prices live from the hotel’s booking system.' },
      { src: bopSurf, alt: 'Surf Weekend and Surf Week package cards with nights, guests and lessons.' },
      { src: bopPhoneEs, alt: 'The homepage on a phone in Spanish: “A dos minutos de la playa de Jacó, con desayuno incluido.”', phone: true },
    ],
  },
];

// Smaller client builds, listed on the Work page without a full case study.
export const moreWork: { client: string; place: string; kind: string; d: Val; url: Val }[] = [
  {
    client: 'Custom Coastal Construction',
    place: 'St. Petersburg, FL',
    kind: 'Custom homes',
    d: 'A custom home builder’s site with a project gallery, their three-phase process and an enquiry form that takes plans and inspiration files.',
    url: todo('Link'),
  },
  {
    client: 'Mojo Demolition & Excavation',
    place: 'Tampa Bay, FL',
    kind: 'Site work',
    d: 'Demolition, excavation and site work across four counties, with a page for each service, a gallery and a free-quote form with photo upload.',
    url: todo('Link'),
  },
];
