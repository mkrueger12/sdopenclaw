# San Diego OpenClaw Weekend Landing Page Plan

Date: 2026-02-17
Based on: `docs/brainstorms/2026-02-17-san-diego-openclaw-weekend-landing-page-brainstorm.md`

## Objective

Ship one static Astro landing page for San Diego OpenClaw Weekend that clearly explains the weekend, lists events, and gives participants clear per-event sign-up paths.

## Delivery principles

- Performance first: minimal client-side JavaScript, optimized images, simple layout primitives.
- Clarity first: every event is understandable at a glance.
- Must-have scope only: no extra feature work beyond context, events, and signup.
- Aesthetic alignment: match the clean, high-contrast event-page feel of the reference site.

## Scope

### In scope

- One static page in Astro.
- Sections: Hero, What is Happening, Events, Signup.
- Per-event signup routes (one signup action per event).
- Explicit placeholder handling for missing details.
- Responsive layout for desktop and mobile.

### Out of scope

- Stateful booking flows or embedded ticket checkout.
- CMS integration.
- Multi-page information architecture.
- Advanced animation systems.

## Information architecture

1. Hero
   - Event name, date range, location, one-sentence summary.
   - Primary CTA: jump to events or signup section.

2. What is Happening
   - Short practical overview for participants.
   - Key points: who it is for, what to expect, weekend format.

3. Events
   - Card or list format with one row/card per event.
   - Required fields per event item:
     - title
     - date/time (or clearly marked TBD)
     - location (or clearly marked TBD)
     - short description
     - signup label + URL (or clearly marked TBD)
     - status: Confirmed or Details pending

4. Signup
   - Plain instructions for registering per event.
   - Secondary contact path for questions.

## Content model and copy rules

- Participant-first voice: direct, practical, and welcoming.
- Keep descriptions short (1-2 sentences per event).
- If details are missing, render explicit placeholders such as `Time: TBD` and `Signup: Link coming soon`.
- Avoid vague copy like "check back later" without a concrete label.

## Visual direction (reference-aligned)

- Light, clean background with high text contrast.
- Strong typography hierarchy and generous whitespace.
- Minimal decorative effects; avoid heavy media that hurts load time.
- Section separation through spacing and subtle borders rather than complex visuals.

## Execution plan

### Phase 1: Page frame

- Create the single Astro page route.
- Add section anchors and semantic structure for Hero, What is Happening, Events, Signup.

### Phase 2: Event data and content

- Define event list data with required fields.
- Populate initial copy and placeholder-safe labels.
- Ensure each event has a visible signup status.

### Phase 3: Styling and responsiveness

- Apply reference-inspired visual hierarchy.
- Tune spacing and typography for mobile-first readability.
- Keep assets lightweight and avoid unnecessary scripts.

### Phase 4: QA and launch readiness

- Verify all event items are readable and consistently formatted.
- Verify every non-placeholder signup link opens correctly.
- Verify mobile and desktop layout quality.
- Verify page remains usable with JavaScript disabled.

## Acceptance criteria

- A single static Astro page exists and renders the required four sections.
- Events section shows per-event signup paths.
- Missing details are clearly labeled with explicit placeholders.
- Participants can identify what the weekend is and how to sign up within one screen scroll from top.
- Page works on mobile and desktop with no broken layout.

## Risks and mitigations

- Risk: unclear event details reduce trust.
  - Mitigation: enforce required event fields or explicit TBD labels.
- Risk: stale or broken signup links.
  - Mitigation: pre-launch manual link check and post-update checklist.
- Risk: visual mismatch with reference.
  - Mitigation: review hierarchy, spacing, and contrast against reference before final approval.

## Inputs needed before implementation freeze

- Final event list (titles + descriptions).
- Known date/time/location fields per event.
- Final signup URLs per event (or confirmed placeholder labels).
- Any official brand assets to include.
