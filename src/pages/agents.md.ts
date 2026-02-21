const weekend = {
  title: "OpenClaw SD Weekend",
  dates: "February 27 - March 1, 2026",
  location: "San Diego, California",
  summary:
    "A weekend for builders shipping with OpenClaw in San Diego. Meetups, build sessions, and hackathons.",
};

const communities = [
  {
    name: "AI Tinkerers",
    tagline: "The builders' room",
    description:
      "A global community of engineers, researchers, and founders shipping AI in production. 203+ cities worldwide.",
    url: "https://san-diego.aitinkerers.org/",
  },
  {
    name: "DEVxSD",
    tagline: "San Diego's developer community",
    description:
      "A developer community of events and open-source projects in San Diego. Monthly meetups, talks, and hands-on coding for all skill levels.",
    url: "https://devx.network",
  },
  {
    name: "SDx",
    tagline: "San Diego's AI builders",
    description:
      "The next-gen startup community for AI builders. 1000+ members, 50+ events, 15+ startups launched.",
    url: "https://www.sdx.community/",
  },
];

const sponsors = [
  {
    name: "Cadre AI",
    description:
      "AI strategy and implementation consultancy. Less hype, more execution.",
    url: "https://www.cadreai.com/",
  },
  {
    name: "Mercury",
    description:
      "The banking platform built for startups and founders. Trusted by 200,000+ companies.",
    url: "https://mercury.com/",
  },
  {
    name: "Edge",
    description:
      "Self-custody crypto wallet with zero-knowledge security. Your keys, your control — buy, store, and exchange 100+ crypto assets with just a username and password.",
    url: "https://edge.app",
  },
  {
    name: "Clinically AI",
    description: "The intelligence platform for behavioral health.",
    url: "https://www.clinicalnotes.ai/",
  },
  {
    name: "Structured",
    description:
      "Award-winning IT solution provider delivering secure, cloud-connected digital infrastructure and managed services.",
    url: "https://structured.com/",
  },
  {
    name: "Aurapath AI",
    description:
      "AI-native agency that designs, builds, and deploys AI systems. Get AI that works.",
    url: "https://aurapathai.com",
  },
];

const organizers = [
  {
    name: "Max Krueger",
    org: "AI Tinkerers SD / Backland Labs",
    url: "https://www.backlandlabs.io/",
  },
  {
    name: "Chad Lohrli",
    org: "SDx / Cadre AI",
    url: "https://www.sdx.community/",
  },
  {
    name: "Travis Johnson",
    org: "AuraPath AI",
    url: "https://aurapathai.com",
  },
  {
    name: "Sam Holmes",
    org: "DEVxSD",
    url: "https://devx.network",
  },
];

const events = [
  {
    title: "DEVxSD Claw Club",
    when: "Friday, February 27 - 6:00 PM - 10:00 PM",
    where: "1495 Pacific Hwy #300, San Diego, CA 92101",
    description:
      "Join the Claw Club and get your OpenClaw journey started. A hands-on workshop covering setup, hosting, models, channels, and everything you need to hit the ground running. By the end of the night, you'll have the power of OpenClaw at your fingertips.",
    signupLabel: "RSVP on DEVx",
    signupUrl: "https://devx.network/events/evt-Dzpa16BGEiR3NGk",
  },
  {
    title: "AI Tinkerers Global Unhackathon",
    when: "Saturday, February 28 - 1:00 PM - 6:00 PM",
    where: "Rancho Bernardo, San Diego",
    description:
      "A synchronized build session across 24 AI Tinkerers cities worldwide. Hands-on coding with OpenClaw/ClawdBot -- no pitches, no panels. Pizza, snacks, and drinks provided. Mac Mini giveaway for the best hack.",
    signupLabel: "RSVP on AI Tinkerers",
    signupUrl:
      "https://san-diego.aitinkerers.org/p/openclaw-global-unhackathon-san-diego",
  },
  {
    title: "Molts & Malts",
    when: "Saturday, February 28 - 6:30 PM - 9:00 PM",
    where: "San Diego, CA 92121",
    description:
      "Join builders from OpenClaw weekend to enjoy some post-building API's IPA's. Hosted by San Diego AI Circle — a curated group of highly technical builders working at the edge of deep learning and agentic systems.",
    signupLabel: "RSVP on Eventship",
    signupUrl:
      "https://eventship.com/event/molts-malts-hosted-by-san-diego-ai-circle",
  },
  {
    title: "SDx Deep Dives",
    when: "Sunday, March 1 - 10:00 AM - 1:00 PM",
    where: "Sorrento Valley, San Diego",
    description:
      "Three parallel tracks: Advanced Agent Design, Business Automation, and Security & Compliance. Hosted by Cadre with SDx, DEVx, and AI Tinkerers.",
    signupLabel: "RSVP on Luma",
    signupUrl: "https://lu.ma/ClawDeepdive",
  },
  {
    title: "SDx OpenClaw Showcase",
    when: "Sunday, March 1 - 2:00 PM - 5:00 PM",
    where: "Sorrento Valley, San Diego",
    description:
      "Show-and-tell for builders and claw-curious. Five-minute demos, real stories, no pitches. Mac Mini giveaway for the best showcase. Food and drinks provided.",
    signupLabel: "RSVP on Luma",
    signupUrl: "https://luma.com/OpenclawSd",
  },
];

export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${weekend.title}`);
  lines.push("");
  lines.push(`**Dates:** ${weekend.dates}`);
  lines.push(`**Location:** ${weekend.location}`);
  lines.push("");
  lines.push(weekend.summary);
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("## Events");
  lines.push("");

  for (const event of events) {
    lines.push(`### ${event.title}`);
    lines.push("");
    lines.push(`- **When:** ${event.when}`);
    lines.push(`- **Where:** ${event.where}`);
    lines.push(`- **Signup:** [${event.signupLabel}](${event.signupUrl})`);
    lines.push("");
    lines.push(event.description);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Participating Communities");
  lines.push("");

  for (const c of communities) {
    lines.push(`### ${c.name}`);
    lines.push("");
    lines.push(`*${c.tagline}*`);
    lines.push("");
    lines.push(c.description);
    lines.push("");
    lines.push(`Website: ${c.url}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Sponsors");
  lines.push("");

  for (const s of sponsors) {
    lines.push(`### ${s.name}`);
    lines.push("");
    lines.push(s.description);
    lines.push("");
    lines.push(`Website: ${s.url}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Organizers");
  lines.push("");

  for (const o of organizers) {
    lines.push(`### ${o.name}`);
    lines.push("");
    lines.push(`*${o.org}*`);
    lines.push("");
    lines.push(`Website: ${o.url}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push(
    "Questions? Reach out at [max@backlandlabs.io](mailto:max@backlandlabs.io)"
  );
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
