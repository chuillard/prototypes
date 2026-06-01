# Gorgias Prototypes

Interactive UI prototypes for Gorgias product features.

**Live index:** [chuillard.github.io/prototypes](https://chuillard.github.io/prototypes/)

## In-app Testing At Scale (NEW)

**File:** `in-app-testing-deploy.html`

Edit an AI Agent skill, test it side-by-side with a live simulated shopper and an offline eval against past tickets, then publish via a deploy modal with traffic-split rollout options.

### What's in the prototype

- **Three-column test view:** instructions on the left (flex, gets most of the screen), interactive conversation in the middle, slim offline eval sidebar on the right
- **Interactive simulated shopper:** type messages, hit Enter or Send; AI Agent shows a typing indicator and replies with keyword-matched canned responses (size swap, return, where is my order, discount, remove item)
- **Test configuration row:** channel pill (Chat / Email / SMS) and target pill (New customer / Existing customer with email input / Specific ticket with ticket ID input)
- **Offline eval panel:** time-window selector (7d / 30d / 90d / All time), headline automation-rate delta, three secondary metrics, three sample diff rows, "View all 27" link
- **Deploy modal:** three preset rollout options (5% test, 50/50 A/B test, 100% full rollout) plus a custom traffic-share slider. Footer summarizes the chosen rollout.
- **Single exit point:** "Exit test" button in the page header (no duplicate close affordances inside the panels)
- **Publish changes button:** dark button shown by default when the skill is in draft state, opens the deploy modal

### Context

Companion to the [In-app Testing At Scale vision doc](https://www.notion.so/gorgias/Merchant-testing-vision-doc-36c1ae2178f580578111f02133c0cd7a) — closes the offline eval + A/B testing loop the doc proposes.

---

## Wizard: Conversation Starters Step

**File:** `conversation-starters-step.html`

Final step of the Skills onboarding wizard — merchants choose which accepted skills to surface as conversation starters on their chat homepage.

### What's in the prototype

- Matches the Skills setup wizard style (sidebar, stepped progress, draft banner)
- Value nudge: 47% average Flow completion rate, per-flow completion stats
- Each starter shows: prompt text, source skill, badge, and which Flow it replaces
- Toggles ON by default — merchants opt out, not in
- Live Wilson chat widget preview (truncated to starters area) with looping fade-in animation
- Link to Deploy → Chat → Conversation Starters settings

### Context

Part of the [1-Step Flows → AI Agent Guidances](https://app.notion.com/p/3411ae2178f5816b90e6c77d4d408498) proposal — nudging merchants to surface migrated Skills as conversation starters, progressively replacing Flows.

---

## Skill-linked Conversation Starters

**File:** `conversation-starters-skills.html`

Settings page showing skill-linked starters replacing AI-generated ones. Full Gorgias app shell on AI Agent → Deploy → Chat.

### What's in the prototype

- **Three starter types:** skill-linked (purple star, auto-generated from Skill), flow (legacy, with migration nudge), and custom (hand-written)
- Click performance stats with mini bars per starter
- "Add starter" dropdown: write manually or enable from a Skill
- Drag-to-reorder, flow editor modal, live Wilson chat widget preview

---

## Conversation Starters (Original)

**Files:** `starter-prompts-prototype.html` / `starter-prompts-prototype.jsx`

Initial concept with three starter types: existing flows (read-only), AI-generated prompts from top customer questions, and custom hand-written prompts.

### What's in the prototype

- Settings page layout matching Gorgias UI (Settings → Channels → Chat)
- Three starter types: flow, AI-generated, custom
- Drag-to-reorder, flow editor modal, live chat preview
- AI regeneration from ticket data

### Running the prototypes

Open any `.html` file directly in a browser. No build step needed. The `.jsx` file is the React component source for use in artifact viewers.
