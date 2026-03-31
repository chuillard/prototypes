# Gorgias Prototypes

Interactive UI prototypes for Gorgias product features.

## Starter Prompts

**Files:** `starter-prompts-prototype.html` / `starter-prompts-prototype.jsx`

Replaces the existing Quick Replies feature with AI-powered starter prompts that trigger the AI Agent when clicked by shoppers.

### How it works

- **Merchants** configure up to 3 short prompts in Settings > Channels > Chat > Automation
- **Shoppers** see these prompts on the chat homepage as clickable suggestions
- Clicking a prompt sends it as a message and the **AI Agent responds automatically**

### Running the prototype

Open `starter-prompts-prototype.html` directly in any browser. No build step needed. The `.jsx` file is the React component source for use in artifact viewers or React projects.

### What's in the prototype

- Full settings page layout matching Gorgias UI (sidebar, breadcrumbs, tabs)
- **Automation tab** with three cards: Flows, Starter Prompts (new), Order Management
- **Live chat preview** panel with functional AI Agent response simulation
- Real-time sync between settings edits and chat preview
