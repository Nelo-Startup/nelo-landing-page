# Nelo Landing Page — Copy

Working doc for locking content before we move to layout/color. Sections get added as we decide them.

## Hero

**H1:** The AI contact that cares for your elders, and keeps you informed.

**H2:** A call or text, as natural as talking to a person. Nothing to download, nothing to learn, for either of you. (dropped "daily," it's whenever, not necessarily every day)

**CTA button:** Join the Waitlist

**Small text under the button:** Free for the first 50 users. (50 is a placeholder; swap once we land on a real number; "users" instead of "families")

## How it works

Removed the "What is Nelo" intro entirely (it used to sit above both cards, a kicker label + one-sentence definition). Cut because, once the 3 quick-cards below it explain the same thing (setup, conversation quality, family access), the intro was just restating what the reader was about to read again a few seconds later. Part of a broader pass to cut cross-page repetition, see note at the bottom of this section.

Two separate compact cards, plus a standalone callout, kept tight to minimize vertical scroll. Top to bottom:

**Card 1** — titled "How Nelo works" inside the card, above three quick items (icon + short title + one line, fast scan):
- "Text or call to start" — Talk to Nelo for 5 minutes and give it their number. That's the whole setup. (avoided saying "Nelo" twice in the same line, reads clunky)
- "A real conversation, their way" — Nelo talks and listens like a person would, patient, warm, never rushed. (replaced "If something's off, you'll know," which felt redundant with the pattern-detection point in "For you"; this fills the actual biggest gap on the page, nothing else headlines that it's a real warm conversation, not a reminders bot, at the top fast-scan level; title shortened from "however they want," too long next to the other two titles)
- "Your family, always in the loop" — Talk to Nelo anytime, same as they can, or get a report whenever you'd like. (fixed: previously only mentioned reports, which made it sound like reports were the only way family stays in the loop; now covers direct access too)

**Card 2** — a three-column row: "For them" bullets (left) | groupchat card (center) | "For you" bullets (right). No title yet, undecided.

All bullets tightened to short, punchy phrases (dropped filler like "never rushed," "no app, no screen," etc.) since the lists were reading as too much text. "For them" bullets shortened further to one-liners, to match "For you"'s line length.

- **For them** (originally dropped "Warm and patient, it actually listens" for repeating quick-card 2 word for word; added back a shorter, differently-worded version since the user felt something was missing on a later pass, now 4 bullets):
  - As easy as answering the phone or a text.
  - Listens as much as it talks. (reintroduced the "listens" idea, but worded differently from quick-card 2's longer sentence, not a verbatim repeat this time)
  - Meds and appointments, actually done.
  - Speaks over 50 languages. (real-ish claim since it's an LLM-based voice/text wrapper, theoretically supports this many; not a hard commitment to an exact count)
- **Groupchat card:** a family groupchat ("Mom's Care") with you, your sister, and Nelo in it. Nelo's update swapped from "took her meds, and mentioned her knee was bothering her a bit" (pure logistics, and "took her meds" was already the 3rd time meds got mentioned across the page) to "she's in a great mood, told me a whole story about the neighbor's new puppy," a relational/emotional detail instead, both cuts repetition and answers the earlier critique that the mockups read as 100% task-logistics with no proof of actual warmth. You still ask Nelo to check on her PT appointment next time. Flat card, not a phone bezel, deliberately different framing from the hero mockup so the page doesn't repeat the same chrome twice.
- **For you** (originally dropped "Notices patterns a single call never could" for repeating the moat callout; added a genuinely new bullet on a later pass, now 4 bullets):
  - Alerts you the moment something feels off.
  - Tell it what to check on next time, and it will. (this exact idea existed earlier in the project and got cut during consolidation; brought back since it isn't stated anywhere else currently, a real distinct feature, not filler)
  - Runs on its own, no babysitting, barely any effort on your end. (merged the "you don't have to babysit it, it knows what to do" idea into this existing bullet rather than adding a 5th, since they're thematically the same point: low effort/trust that it handles things correctly on its own)
  - Can also join your family's group chat (ties directly to the card next to it; reworded from "Straight from your family's group chat" since that phrasing implied group chat was the only channel, "also" makes clear it's an optional add-on feature).

**Cross-page repetition pass:** the page had accumulated a lot of restated ideas across mockups, quick-cards, bullets, and the moat callout (meds mentioned 3x, "warm/patient/listens" 2x back to back, "notices patterns" 2x back to back). Cut duplicates rather than rephrasing them, on the theory that saying fewer things well beats saying the same few things multiple ways.

**Standalone moat callout** (its own moment, no card, headline then supporting line underneath, not run together inline):
"The longer it runs, the more it knows."
"Every check-in adds to the picture, patterns show up clearly over weeks, in a way a once-a-week phone call never could."

## Images

Total: 2 images.

**Image 1: Hero** — a clean, straight-on device-frame mockup (real iPhone proportions via the `devices.css` library, accurate bezel, Dynamic Island, side buttons), soft shadow underneath. Content: a live, looping iMessage conversation with "Nelo," messages type themselves into the input bar and send in real time, Nelo's replies show a typing indicator first. No em dashes anywhere in the conversation copy, it should read as a real person texting, not AI-generated. Sits over a full-bleed cozy porch photo background (`public/hero-porch.jpg`), white text, dark gradient scrim behind the headline only.

Conversation script: Nelo opens by saying it *called* Mom that morning (not just "checked in," explicit about the channel), and mentions she's sounding more excited and feeling better than last week, a concrete mood/trend comparison that actually proves the "notices patterns over time" pitch instead of just claiming it. Later, instead of typing, "you" records and sends a voice message (the input bar shows a live red waveform and a counting timer while recording, then it lands in the thread as a real voice-memo bubble with a play button and duration).

**Image 2: Groupchat card** — now living inside the "How it works" row (see above) rather than its own standalone section.

## Colors

Minimal palette: one accent color plus neutrals, no grid/dot-pattern backgrounds anywhere.

- **Background:** warm off-white, `#FAF7F2` (not stark white; softer, less clinical)
- **Text:** warm charcoal, `#2B2724` (not pure black; easier to read, less harsh)
- **Accent (buttons, links, highlights):** muted/dusty blue, `#4A6FA5`. A deliberately deepened, muted echo of iMessage's bubble blue, so it visually rhymes with the screenshots without competing with them for attention (the vivid iOS blue inside the screenshots stays the most saturated color on the page).

No navbar for now.

## Footer

Removed the final CTA section entirely (the one repeating the hero headline, "The contact that cares for your elders, and keeps you informed"), since it just duplicated the hero and there's a real footer here now instead.

Three-column layout, `bg-surface`:
- **Left:** "Nelo" wordmark + a short tagline underneath: "For families who wish they could call more often."
- **Middle, "Company":** just "Contact," links to `/contact` (a real page now, see below).
- **Right, "Legal":** "Privacy Policy" and "Terms of Service," both real links to actual pages (not placeholders that 404).

**Privacy Policy** (`/privacy`) and **Terms of Service** (`/terms`): fully fake, made-up placeholder content, written to sound human and plain-language rather than legal boilerplate, no em dashes. Structure modeled on a real product's terms/privacy pages the user shared as a reference (The Service, Your Account, Acceptable Use, Subscriptions and Billing, Disclaimers, Limitation of Liability, Termination, Changes for Terms; What We Collect, How We Use It, What We Don't Do, Data Retention, Security, Third Parties for Privacy), but deliberately kept generic where we don't have real answers yet: no named vendors, no referral program, no real billing/Stripe details, since Nelo is pre-launch and free during early access. Terms includes an explicit "Nelo is not a substitute for emergency services" disclaimer, worth keeping even in placeholder form given the emergency-services liability caution already noted elsewhere in this repo's CLAUDE.md. Both link to `/contact` instead of an email address, since there isn't a support inbox set up yet.

**Contact page** (`/contact`): very simple, no small print at the bottom (skipped the "messages are routed through..." disclaimer style text some form pages have). Two panels:
- Left, `bg-surface` card: "Please fill out the form." heading, then two lines with small icon circles: "Replies within one business day" and "Feature ideas, product help, or questions" (no email address shown, don't have one set up yet; no mention of account/billing, since pre-launch, nothing to have an account or bill for yet).
- Right, white bordered card: a Name field, Email field, Message textarea, and a "Send message" button. Not wired to anything yet (plain inputs, `button type="button"`, no form submission), Supabase wiring is a later step.

**Style note:** no em dashes anywhere in the copy, on the page, in the mockup conversation, or in the footer/legal pages. They read as an AI tell; everything here should sound like a person wrote it.
