# Gorgias Prototypes

Interactive UI prototypes for Gorgias product features. Open any `.html` file directly in Chrome — no build step, no server needed.

**Live index:** [chuillard.github.io/prototypes](https://chuillard.github.io/prototypes/)

---

## Knowledge — Scheduled Activation Windows (NEW)

**File:** `knowledge-scheduling-v4.html`

Full Knowledge page (AI Agent → Train → Knowledge) with a list view and a slide-in detail panel. Prototypes the "temporary knowledge snippets" feature: admins can attach a start date, end date, or both to any knowledge item so AI Agent uses it only within a defined window.

### What's in the prototype

- **List view:** all knowledge items in a clean full-width list. Nothing on the right until you click.
- **Slide-in panel:** clicking any item opens a panel from the right (72% of content width) while the list stays visible and the selected row is highlighted. Click the same row or × to close.
- **Scheduling section (detail panel):** visual timeline card with a filled dot for "Active from", a gradient connector line, a hollow dot for "Active until", a day-count pill, and timezone. Includes an "Add activation window" empty state and "Edit window / Remove" actions.
- **Schedule modal:** "Active from" + optional "Active until" date/time pickers. A purple duration pill appears live between the two dates as you type. The "Set an end time" toggle changes background state when on. Footer shows "Active for N days" or "No end" as a live preview.
- **Knowledge content:** each item has real guidance/article text rendered as a document with headings, bullets, and numbered lists.
- **Copilot-origin badge:** items accepted from Opportunities show a small 🤖 badge in the list row and an "Origin: Copilot" row in Details. The Opportunities tab (visible in the nav) is where AI detections live — the Knowledge page stays clean.
- **Pre-scheduled items:** items 7–10 have schedules set so the visual timeline card is immediately visible on click.

### Spec

[`spec-temporary-knowledge-snippets-ai-agent.md`](../spec-temporary-knowledge-snippets-ai-agent.md) — P2 spec for this feature, created alongside the prototype. Covers squad, tier, user stories, evidence, and rollout.

### Design decisions

- Scheduling is a property of a knowledge item, not a separate workflow. The Scheduling section lives in the detail panel alongside Details and Impact, collapsible like everything else.
- The visual timeline (dots + connector line) replaces flat text rows so admins grasp the active window at a glance without reading dates.
- Copilot-generated items appear in the Knowledge list with a minimal badge only. Detection details, context, and the accept/dismiss workflow live in Opportunities — the two surfaces are kept separate.

---

## In-app Testing At Scale

**File:** `in-app-testing-deploy.html`

Edit an AI Agent skill, test it side-by-side with a live simulated shopper and an offline eval against past tickets, then publish via a deploy modal with traffic-split rollout options.

### What's in the prototype

- Three-column test view: instructions (left), interactive conversation (centre), offline eval sidebar (right)
- Interactive simulated shopper: type messages, hit Enter; AI Agent replies with keyword-matched responses
- Test config row: channel pill (Chat / Email / SMS) and target pill (New / Existing / Specific ticket)
- Offline eval panel: time-window selector, headline automation-rate delta, three secondary metrics, diff rows
- Deploy modal: three preset rollout options (5% test, 50/50 A/B, 100% full) plus a custom traffic slider

### Context

Companion to the [In-app Testing At Scale vision doc](https://www.notion.so/gorgias/Merchant-testing-vision-doc-36c1ae2178f580578111f02133c0cd7a).

---

## Wizard: Conversation Starters Step

**File:** `conversation-starters-step.html`

Final step of the Skills onboarding wizard — merchants choose which accepted skills to surface as conversation starters.

### What's in the prototype

- Skills setup wizard style (sidebar, stepped progress, draft banner)
- Value nudge: 47% average Flow completion rate, per-flow stats
- Each starter shows: prompt text, source skill, badge, which Flow it replaces
- Toggles ON by default — merchants opt out, not in
- Live Wilson chat widget preview with looping fade-in animation

### Context

Part of the [1-Step Flows → AI Agent Guidances](https://app.notion.com/p/3411ae2178f5816b90e6c77d4d408498) proposal.

---

## Skill-linked Conversation Starters

**File:** `conversation-starters-skills.html`

Settings page showing skill-linked starters replacing AI-generated ones. Full Gorgias app shell on AI Agent → Deploy → Chat.

### What's in the prototype

- Three starter types: skill-linked (purple star), flow (legacy, with migration nudge), custom
- Click performance stats with mini bars per starter
- "Add starter" dropdown: write manually or enable from a Skill
- Drag-to-reorder, flow editor modal, live Wilson chat widget preview

---

## Conversation Starters (Original)

**Files:** `starter-prompts-prototype.html` / `starter-prompts-prototype.jsx`

Initial concept with three starter types: existing flows (read-only), AI-generated prompts from top customer questions, and custom hand-written prompts.

---

## Kit files

| File | Purpose |
|------|---------|
| `gorgias-shell.jsx` | App shell: icon rail, nav panel, tokens, buttons, tab bar |
| `gorgias-components.jsx` | UI library: badges, KPI cards, drawers, forms, banners, tables |
| `reference-skills-dashboard.jsx` | Full reference prototype showing kit usage patterns |
| `USAGE.md` | Quick-start guide and component list |
| `generate-html.js` | Template for generating a paired `.html` wrapper from a `.jsx` |

All prototypes are self-contained `.html` files that load React + Babel from CDN. Open directly in Chrome — no install, no build.
