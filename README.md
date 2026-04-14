# Gorgias Prototypes

Interactive UI prototypes for Gorgias product features.

**Live index:** [chuillard.github.io/prototypes](https://chuillard.github.io/prototypes/)

## Wizard: Conversation Starters Step (NEW)

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
