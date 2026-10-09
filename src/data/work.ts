// Case studies. Anything wrapped in todo() is placeholder copy and renders
// with a dashed outline on the site until it is replaced with real content.
// Content comes from write-ups of each project's repository (October 2026).

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
  chapters: { t: string; d: Val; points?: Val[] }[];
}

export const work: Project[] = [
  {
    slug: 'effectiveagents',
    client: 'EffectiveAgents',
    relation: 'We operate · our largest',
    url: 'https://www.effectiveagents.com',
    headline: 'A referral business where new leads no longer wait for someone to press a button.',
    lede: 'EffectiveAgents ranks real estate agents by their actual sales in each city, so buyers and sellers can find a proven local agent for free. It earns a referral fee when a matched client closes, and it is the largest business we operate.',
    built: 'Software · Website · Automation',
    runningSince: '2023',
    result: todo('Enquiry to agent: 5 min'),
    pixel: { label: 'From enquiry to agent', value: todo('5 min') },
    focus: { x: 0.97, y: 0.03 },
    chapters: [
      {
        t: 'The business',
        d: 'A platform that ranks real estate agents by their real sales results, city by city. It serves home buyers and sellers, a large network of agents, and partners such as mortgage companies and nonprofits.',
      },
      {
        t: 'The drain',
        d: 'Releasing a new lead was the core revenue workflow, and it was entirely manual. Someone had to check each enquiry was real, pick the best agents and press release. If that person was busy, asleep or on holiday, leads sat. The old dashboard even timed the wrong thing: a lead could be assigned in 30 seconds and then sit untouched for days.',
      },
      {
        t: 'What we built',
        d: 'An automatic release that checks, scores and matches every new lead to the best local agents, and only asks a person when it matters.',
        points: [
          'New leads are checked, scored and released to the top three local agents with no one pressing a button. Staff can switch it on or off at any time.',
          'Before going live, it ran quietly beside the team for weeks, recording how often it picked the same agents a person did.',
          'When a referred client’s home sells, goes under contract or comes back on the market, the team hears about it, including sales the agent never reported.',
          'Agents get automatic reminders for unsigned agreements, unanswered meeting requests and unpaid referral fees, and can pay online.',
          'Agents can refer their own clients to agents in other markets, with the hold timer and reminders running on their own.',
          'Public pages rank agents by state, city, neighbourhood and zip code.',
        ],
      },
      {
        t: 'How we run it',
        d: '56 scheduled jobs keep it running: releasing leads every two minutes, refreshing rankings, watching sales and sending reminders.',
        points: [
          'Anything doubtful, like a possible duplicate or no qualified local agent, is set aside for a person to review.',
          'An emergency off switch, a practice mode that releases nothing, and a cap on releases per run.',
          'A lead can never be released twice, or to an agent who hasn’t signed the referral agreement.',
          'No collections letter goes out without a person approving it.',
          'If a data feed stalls, the owner gets a text the same day. That check exists because one feed once died unnoticed for eight weeks.',
          'Problems reported in the app reach the team straight away, with a screenshot.',
        ],
      },
    ],
  },
  {
    slug: 'popolo',
    client: 'Popolo',
    relation: 'We operate · launching',
    url: 'https://getpopolo.com',
    headline: 'A family cookbook that gets recipes out of the group chat, and remembers who they came from.',
    lede: 'Popolo is a website for keeping family recipes in the family, each one tagged with the person it came from. Families share them at private Tables. An iPhone app is on the way.',
    built: 'Software · Website · Automation',
    runningSince: 'Live in soft launch',
    result: 'Recipes without a source: 0',
    pixel: { label: 'Recipes that forget who they came from', value: '0' },
    focus: { x: 0.22, y: 0.7 },
    chapters: [
      {
        t: 'The business',
        d: 'A website for keeping family recipes in the family, and sharing them with the people you cook with.',
      },
      {
        t: 'The drain',
        d: 'Family recipes were scattered across group chats, photos of handwritten cards and recipe websites, with no record of who each one came from. Saving one meant typing it out, and knowing who had cooked what meant asking around.',
      },
      {
        t: 'What we built',
        d: 'A personal cookbook where every recipe remembers who it came from: “From Nonna · via Sam”.',
        points: [
          'Photograph a handwritten card and it is typed up for you. The original photo is kept, and unclear words are marked, never guessed.',
          'Paste a web link or a video caption and the steps come out clean.',
          'Tables: private spaces where family members bring recipes, log when they cooked them and leave notes.',
          'Share links for one recipe or a whole collection, and a one-page printable recipe sheet.',
          'An email when someone brings or cooks a recipe, and a weekly Sunday Table summary.',
        ],
      },
      {
        t: 'How we run it',
        d: 'Emails go out on their own every minute, and the Sunday Table summary is prepared once a week for every member of every Table.',
        points: [
          'Several recipes from the same person arrive as one email, not five.',
          'A failed email is retried up to five times, and duplicates are blocked three ways.',
          'A card or link that can’t be read gets a plain-language message, not an error.',
          'A daily report of signups, recipes and Tables reaches the team, and stays quiet on days with nothing new.',
        ],
      },
      {
        t: 'Next: the iPhone app',
        d: 'In progress. An app that turns a chat link, a video or a handwritten card into a draft recipe in a couple of taps, designed to take under a minute.',
        points: [
          'Share a web page, video or screenshot to Popolo straight from the phone’s share menu.',
          'Photograph a handwritten card. The app reads it and keeps the original photo with the recipe for good.',
          'One review screen flags anything missing and puts the recipe on a family table.',
          'Cooking mode keeps the screen awake, shows one step at a time and lets you peek at the ingredients.',
        ],
      },
    ],
  },
  {
    slug: 'bird-of-paradise',
    client: 'Bird of Paradise Hotel',
    relation: 'Client build',
    url: 'https://birdofparadisehotel.com',
    headline: 'A family hotel that now takes, charges and confirms its own bookings.',
    lede: 'Bird of Paradise is a family-run boutique hotel in Jacó, Costa Rica, for surfers, travellers, groups and retreats, in English and Spanish. Its old website sent every guest to someone else’s booking page.',
    built: 'Software · Website · Automation',
    runningSince: 'September 2026',
    result: 'Bookings retyped by hand: 0',
    pixel: { label: 'Bookings retyped by hand', value: '0' },
    focus: { x: 0.68, y: 0.24 },
    chapters: [
      {
        t: 'The business',
        d: 'A family-run boutique hotel in Jacó, Costa Rica. Its guests are surfers, travellers, groups and retreat organisers, booking in English and Spanish.',
      },
      {
        t: 'The drain',
        d: 'The old site handed every booking to a third-party page, so the hotel never held the guest, the payment or the enquiry. Prices were kept up to date by hand, and paid bookings were typed into the reservation system a second time.',
      },
      {
        t: 'What we built',
        d: 'A direct-booking engine on the hotel’s own site, wired into its reservation system. From first commit to taking real bookings in 15 days.',
        points: [
          'Live prices and availability for the exact dates, in English and Spanish.',
          'A card deposit at booking. The reservation is created automatically and the guest and the hotel both get a confirmation.',
          'The balance charges itself on the day free cancellation ends. If that fails, the guest gets a pay link.',
          'Guests change or cancel on their own, and refunds settle across both payments.',
          'Surf, golf and adventure packages, a trip planner with shareable plans, and tours offered after booking.',
          'A groups and retreats page, a travel guide for search, and every old web address redirected.',
        ],
      },
      {
        t: 'How we run it',
        d: 'Twice a day the system checks every payment. It finishes bookings left half done, releases checkouts nobody paid for and charges balances that are due.',
        points: [
          'If the last room sells mid-payment, the guest is refunded in full and the hotel gets one urgent email.',
          'A repeated payment notice can never double-book or double-charge.',
          'Anything it can’t settle on its own is flagged once to the reservations inbox.',
          'A bookings report by source arrives on the 1st of every month.',
        ],
      },
    ],
  },
];
