# Gorgias Prototypes

Interactive UI prototypes for Gorgias product features.

**Live index:** [chuillard.github.io/prototypes](https://chuillard.github.io/prototypes/)

## Skill-linked Conversation Starters (NEW)

**File:** `conversation-starters-skills.html`

Evolution of conversation starters where prompts are linked to AI Agent Skills. When a shopper clicks a skill-linked starter, the AI Agent handles the conversation using that Skill's instructions, actions, and knowledge — replacing static Flow decision trees.

### What's in the prototype

- Full Gorgias app shell (icon rail, nav panel, content area) on AI Agent → Deploy → Chat
- **Three starter types:** skill-linked (purple star, auto-generated from Skill), flow (legacy, with migration nudge), and custom (hand-written)
- Click performance stats with mini bars per starter
- "Add starter" dropdown: write manually or enable from a Skill
- Drag-to-reorder, flow editor modal, live chat widget preview
- Wilson-branded chat widget with functional starter buttons

### Context

Part of the [1-Step Flows → AI Agent Guidances](https://app.notion.com/p/3411ae2178f5816b90e6c77d4d408498) proposal — nudging merchants to surface migrated Skills as conversation starters, progressively replacing Flows.

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
