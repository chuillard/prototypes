# Gorgias Prototype Kit

## Files

| File | Purpose |
|------|---------|
| `gorgias-shell.jsx` | App shell: icon rail, nav panel, page layout, tokens, buttons, tab bar |
| `gorgias-components.jsx` | UI library: badges, KPI cards, drawers, forms, banners, tables |
| `reference-skills-dashboard.jsx` | Original Skills dashboard prototype (full reference) |
| `in-app-testing-deploy.jsx` | In-app testing flow: edit skill, side-by-side test (simulated shopper + offline eval), deploy modal with traffic-split rollout |
| `conversation-starters-skills.jsx` | Settings page for skill-linked conversation starters |
| `starter-prompts-prototype.jsx` | Original conversation starters concept |

## Browser preview

Every `.jsx` prototype ships a paired `.html` file that loads React + Babel from CDN — open it directly in Chrome / Safari to preview without any build step. Use `generate-html.js` as a template if you add a new prototype.

## Quick Start — New Prototype

```jsx
import GorgiasShell, { tokens, PageHeader, ButtonPrimary, TabBar } from "./gorgias-shell";
import { KpiCard, StatusBadge, SearchInput, Drawer } from "./gorgias-components";

export default function MyNewPrototype() {
  return (
    <GorgiasShell activeRailItem="ai-agent">
      {({ isScrolled }) => (
        <>
          <PageHeader
            title="My New Page"
            isScrolled={isScrolled}
            actions={<ButtonPrimary>+ Create</ButtonPrimary>}
          />
          {/* Your content here */}
        </>
      )}
    </GorgiasShell>
  );
}
```

## Customising the Nav

Pass a `navConfig` prop to `GorgiasShell`:

```jsx
const myNav = {
  title: "Revenue",
  storeName: "one-bone",
  sections: [
    { label: "Overview", items: [{ label: "Dashboard", isActive: true }, { label: "Reports" }] },
    { topItem: "Settings" },
  ],
};

<GorgiasShell navConfig={myNav}>...</GorgiasShell>
```

## Available Components

### Shell (`gorgias-shell.jsx`)
- `GorgiasShell` — full app wrapper
- `PageHeader` — sticky header with title + actions
- `TabBar` — horizontal tabs
- `ButtonPrimary` / `ButtonSecondary`
- `NavSection`, `NavSubItem`, `NavTopItem` — nav building blocks
- `tokens` — design tokens object
- `categoryColors` — color map for journey/category badges

### UI Library (`gorgias-components.jsx`)
- `StatusBadge` — Enabled/Disabled/Draft pill
- `CategoryBadge` — colored category label
- `IntentTag` — intent pill with "+N" overflow
- `MiniBar` — inline percentage bar
- `KpiCard` — metric card with delta arrow
- `CoverageBar` — segmented horizontal bar
- `TriggerBadge` — event trigger pill
- `SearchInput` — search field with icon
- `DrawerField` / `DrawerSelect` / `TextInput` / `TextArea` — form fields
- `PillToggle` — multi-select pill buttons
- `Checkbox` / `Toggle` — boolean controls
- `Drawer` — slide-over panel with tabs + footer
- `Banner` — info/warning banner (purple, yellow, green)
- `Pagination` — simple prev/next footer
