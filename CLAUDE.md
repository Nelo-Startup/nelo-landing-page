# Nelo — Context for Claude

This document explains what we're building, why, and what we're actually trying to ship right now. Read this before working on anything in this repo.

## Current Goal

We are **not** building the full product yet. We are building a **minimal landing page** whose only job is to convert visitors into waitlist signups. That's it. Do not build features, dashboards, or anything beyond what's needed to explain the idea and collect a "join waitlist" submission.

Keep everything else in this doc as context for understanding the product vision — not as a build list for right now.

## YC RFS this fits under (for context on the market)

**AI for the Aging Population** — by Max Kolysh, Y Combinator

> By 2030, one in five Americans will be over 65, and there's nowhere near enough people to take care of everyone. The US is projected to have millions of unfilled caregiving jobs within the decade, and 53 million family members are already doing this work unpaid.
>
> Meanwhile, almost no technology is actually built for older people. Even Alexa and Google Home are frustrating for most seniors to use.
>
> AI finally makes a new class of products possible: voice interfaces that can hold real conversations, monitoring that helps older adults stay safe and independent, robotics that can assist with physical tasks around the home, and software that helps family caregivers coordinate care, appointments, and emergencies.
>
> This is one of the largest, most underserved markets in the world, and it's growing every single day.

## The Pitch

**The contact that cares for your elders and keeps your family informed.**

53 million Americans are already doing unpaid caregiving for aging family, pieced together from scattered calls and half-remembered updates. Almost nothing is actually built for the person at the center of it. Even Alexa is frustrating for most seniors to use.

Nelo is the caregiving that actually gets done, every single day. No app, for either of you. Just a contact you talk to like a person.

### For them (the senior)
- A daily check-in, a real conversation about how they're doing and how they're feeling.
- Medication, appointments, and exercise, followed through on until it's actually handled.
- Their mood is tracked and Nelo remembers everything over time, so patterns show up clearly across weeks — useful for spotting real change early.
- If a check-in gets missed, it escalates to family right away.

### For you (the family / adult child)
- Ask it anything, anytime, and get an answer grounded in what it's actually observed.
- Tell it what to ask them next time, and it will.
- Get a recap whenever you want one, weekly or on demand, delivered straight through text or call.

### Why it only gets better
The longer it runs, the more it actually knows them, specifically — which is exactly why it's hard to walk away from once a family's really in it. The memory layer (a living, longitudinal model of the person) is the core retention mechanic, not any single feature.

### Setup
Call or text to get started. Explain the situation, we ask what we need to know, and that's it. Nothing to install, nothing to configure. (Likely: a single ~5 minute onboarding call where our agent asks what it needs to know, and the family is fully set up.)

## Product framing (internal — not for landing page copy directly)

We see the idea as sitting across three overlapping value props:
1. **Loneliness / connection** — check-ins, bridging familial gaps.
2. **Safety / monitoring** — emergency detection, wake word, medication adherence. High stakes, but also carries real liability considerations (see "Things to be careful about" below).
3. **Care / logistical coordination** — appointments, reminders, financial oversight (later).

Retention thesis: the interface (voice/text) is how we get adoption, but the **memory layer** is what retains users. Think of it as a "company brain," but for a person — a longitudinal model of the senior that gets smarter and more specifically useful the longer it runs.

## Features — prioritized

### Launch-ready / core (what the landing page should convey)
- Daily check-in via call/SMS — real conversation, not a script.
- Medication and appointment reminders, followed through until actually confirmed done.
- Mood tracked over time — becomes a kind of living memory that informs future check-ins.
- Missed check-in → escalates to family.
- On-demand recap for family, sent via text or call, weekly or whenever requested.
- On-demand natural language access for family — ask it anything, anytime, grounded in what it's actually observed (not just the senior can talk to it — family can too, including by calling).
- Family can tell it what to ask the senior next time.
- Setup is a single call/text — no app, no dashboard, no account creation friction.
- Nelo can track other random things the senior mentions and flag them for family (e.g. suspicious/spam calls the senior received).
- Reminders to family members themselves to check in / stay engaged — not just senior-facing.

### Later / not right now (do not build or advertise yet)
- Financial monitoring/oversight.
- Alzheimer's/dementia-specific disease monitoring or messaging — keep pattern/mood tracking general ("patterns show up over weeks"), do NOT name or lead with dementia/Alzheimer's as a category yet.
- Wake word / emergency word activation (Siri-like) — likely a future **paid** feature.
- Multilingual support — only mention if actually functional at launch.
- Group chat integration (adding Nelo to a family group chat to pull context/instructions from there).
- "Keep their brains sharp" style cognitive engagement features.
- Emergency services integration — carries real liability, needs careful legal consideration before ever building or advertising.

### Things to be careful about (engineering + product)
- **False positives on escalation.** Repeated missed check-ins triggering family alerts needs a real strategy to avoid crying wolf — this is a trust-destroying failure mode if wrong too often.
- **Escalation language should stay conservative in messaging** — avoid ever promising "we always know when something's wrong." Reassuring but not overclaiming.
- Any healthcare-adjacent claims (detecting patterns worth seeing a doctor about) are a slippery slope regulation-wise — do not build or message this without real thought.

## Competitors (for positioning awareness, not for copying)
- **ElderVoice** (eldervoice.com) — closest direct competitor. Family creates an account, inputs loved one's phone number, meds, hobbies, best call time. Calls at scheduled times, does mood analysis, "memory lane" AI history, medication reminders. Requires account/dashboard setup.
- **SeniorTalk** (senior-talk.com) — supports WhatsApp, SMS, Facebook Messenger, or live phone calls. Focused on AI personas for engagement/conversation, less on caregiving logistics.
- **Kaigo Health** (YC) — "AI care workforce," more logistics/marketplace-oriented (e.g. "Uber for elder care" adjacent). Raised ~$3M, seems to occupy a narrower wedge.

## Naming
Product name: **Nelo**. (Note: there is an unrelated fintech/BNPL company also named Nelo operating in Mexico — different category, different market, proceeding anyway.)

## Next step

Once you've read this document, we'll figure out the landing page together — no need to plan it out here in advance.
