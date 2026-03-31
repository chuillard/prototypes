import { useState, useRef, useEffect } from "react";

// ── Design Tokens ──────────────────────────────────────
const t = {
  purple: "#7C3AED", purpleLight: "#EDE9FE", accent: "#7C3AED",
  text: "#111827", textSec: "#6B7280", textMuted: "#9CA3AF",
  border: "#E5E7EB", borderLight: "#F3F4F6",
  bgPage: "#F7F6F3", white: "#FFFFFF",
  green: "#059669", red: "#EF4444",
};

const MAX_PROMPTS = 3;

// ════════════════════════════════════════════════════════
// LEFT SIDEBAR
// ════════════════════════════════════════════════════════

function SettingsSidebar() {
  const sections = [
    { label: "Productivity", collapsed: true, items: [] },
    { label: "Ticket & customer data", collapsed: true, items: [] },
    { label: "Ticket management", collapsed: true, items: [] },
    {
      label: "Channels", collapsed: false,
      items: [
        { label: "Chat", active: true },
        { label: "Email" }, { label: "Help Center" },
        { label: "Phone numbers" }, { label: "Voice" },
        { label: "SMS" }, { label: "Contact form" },
      ],
    },
    { label: "Apps", collapsed: true, items: [] },
    { label: "Account", collapsed: true, items: [] },
    { label: "Advanced", collapsed: true, items: [] },
    { label: "Profile", collapsed: true, items: [] },
  ];

  return (
    <div style={{ width: 220, background: t.white, borderRight: `1px solid ${t.border}`, display: "flex", flexDirection: "column", height: "100%", overflowY: "auto", flexShrink: 0 }}>
      <div style={{ padding: "14px 14px 10px", borderBottom: `1px solid ${t.border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke={t.text} strokeWidth="1.8" strokeLinecap="round"/></svg>
        <span style={{ fontSize: 14, fontWeight: 700, color: t.text }}>Settings</span>
      </div>
      <div style={{ padding: "6px 6px", flex: 1 }}>
        {sections.map((s) => (
          <div key={s.label} style={{ marginBottom: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px", borderRadius: 6, cursor: "pointer" }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                {s.collapsed
                  ? <path d="M6 4l4 4-4 4" stroke={t.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  : <path d="M4 6l4 4 4-4" stroke={t.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
              </svg>
              <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>{s.label}</span>
            </div>
            {!s.collapsed && s.items.map((item) => (
              <div key={item.label} style={{
                padding: "5px 8px 5px 28px", borderRadius: 6, cursor: "pointer", fontSize: 13,
                color: item.active ? t.purple : t.text, fontWeight: item.active ? 600 : 400,
                background: item.active ? t.purpleLight : "transparent",
              }}>{item.label}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 14px", borderTop: `1px solid ${t.border}`, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>⚙</div>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>CH</span>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// DRAG HANDLE SVG
// ════════════════════════════════════════════════════════

function DragHandle() {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" style={{ flexShrink: 0, cursor: "grab" }}>
      <circle cx="3" cy="3" r="1.5" fill="#9CA3AF"/><circle cx="9" cy="3" r="1.5" fill="#9CA3AF"/>
      <circle cx="3" cy="8" r="1.5" fill="#9CA3AF"/><circle cx="9" cy="8" r="1.5" fill="#9CA3AF"/>
      <circle cx="3" cy="13" r="1.5" fill="#9CA3AF"/><circle cx="9" cy="13" r="1.5" fill="#9CA3AF"/>
    </svg>
  );
}

// ════════════════════════════════════════════════════════
// FLOWS CARD
// ════════════════════════════════════════════════════════

function FlowsCard() {
  const flows = ["Tennis Racket Finder", "Can I adjust my order?", "How can I get 10% off my first order?", "How long does shipping take?", "Warranty"];
  return (
    <div style={{ background: t.white, borderRadius: 12, border: `1px solid ${t.border}`, padding: 24 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, margin: "0 0 4px" }}>Flows</h3>
      <p style={{ fontSize: 13, color: t.textSec, margin: "0 0 16px", lineHeight: 1.5 }}>Show up to 6 flows on your chat to proactively resolve top customer requests.</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {flows.map((flow, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderBottom: i < flows.length - 1 ? `1px solid ${t.borderLight}` : "none" }}>
            <DragHandle />
            <span style={{ flex: 1, fontSize: 13, color: t.text }}>{flow}</span>
            <button style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke={t.textMuted} strokeWidth="1.5" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke={t.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, fontSize: 16 }}>×</button>
          </div>
        ))}
      </div>
      <button style={{ marginTop: 10, padding: "7px 14px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.white, fontSize: 12, fontWeight: 500, color: t.text, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
        Add flow <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke={t.textSec} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// STARTER PROMPTS CARD
// ════════════════════════════════════════════════════════

function StarterPromptsCard({ prompts, setPrompts, enabled, setEnabled }) {
  const update = (i, v) => { const n = [...prompts]; n[i] = v; setPrompts(n); };
  const remove = (i) => setPrompts(prompts.filter((_, j) => j !== i));
  const add = () => { if (prompts.length < MAX_PROMPTS) setPrompts([...prompts, ""]); };

  return (
    <div style={{ background: t.white, borderRadius: 12, border: `1px solid ${t.border}`, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, margin: 0 }}>Starter prompts</h3>
          <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: "#DBEAFE", color: "#1D4ED8", letterSpacing: "0.03em" }}>NEW</span>
        </div>
        <div onClick={() => setEnabled(!enabled)} style={{ width: 40, height: 22, borderRadius: 11, cursor: "pointer", background: enabled ? t.purple : "#D1D5DB", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
          <div style={{ position: "absolute", top: 3, left: enabled ? 21 : 3, width: 16, height: 16, borderRadius: 8, background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
        </div>
      </div>
      <p style={{ fontSize: 13, color: t.textSec, margin: "0 0 16px", lineHeight: 1.5 }}>
        Display up to {MAX_PROMPTS} starter prompts on your chat homepage. When a shopper clicks one, it triggers the <strong>AI Agent</strong> to answer automatically.
      </p>
      {enabled && (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {prompts.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderBottom: i < prompts.length - 1 ? `1px solid ${t.borderLight}` : "none" }}>
                <DragHandle />
                <input type="text" value={p} onChange={(e) => update(i, e.target.value)} placeholder="e.g. What's your return policy?" maxLength={80}
                  style={{ flex: 1, padding: "7px 10px", border: `1px solid ${t.border}`, borderRadius: 7, fontSize: 13, color: t.text, outline: "none", background: t.white }} />
                <span style={{ fontSize: 10, color: t.textMuted, flexShrink: 0, minWidth: 32, textAlign: "right" }}>{p.length}/80</span>
                <button onClick={() => remove(i)} style={{ width: 28, height: 28, borderRadius: 6, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, fontSize: 16, flexShrink: 0 }}>×</button>
              </div>
            ))}
          </div>
          {prompts.length < MAX_PROMPTS && (
            <button onClick={add} style={{ marginTop: 10, padding: "7px 14px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.white, fontSize: 12, fontWeight: 500, color: t.text, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: 15, lineHeight: 1 }}>+</span> Add starter prompt
            </button>
          )}
          <div style={{ marginTop: 6, fontSize: 11, color: t.textMuted }}>{prompts.length} / {MAX_PROMPTS} prompts used</div>
        </>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════
// ORDER MANAGEMENT CARD
// ════════════════════════════════════════════════════════

function OrderManagementCard() {
  const [on, setOn] = useState(true);
  return (
    <div style={{ background: t.white, borderRadius: 12, border: `1px solid ${t.border}`, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, margin: 0 }}>Order management</h3>
        <div onClick={() => setOn(!on)} style={{ width: 40, height: 22, borderRadius: 11, cursor: "pointer", background: on ? t.purple : "#D1D5DB", position: "relative", transition: "background 0.2s" }}>
          <div style={{ position: "absolute", top: 3, left: on ? 21 : 3, width: 16, height: 16, borderRadius: 8, background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
        </div>
      </div>
      <p style={{ fontSize: 13, color: t.textSec, margin: "0 0 14px" }}>Let customers sign in to track, return, cancel or report issues with orders.</p>
      <button style={{ padding: "7px 14px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.white, fontSize: 12, fontWeight: 500, color: t.text, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke={t.textSec} strokeWidth="1.5" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke={t.textSec} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Edit order management
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// CHAT PREVIEW
// ════════════════════════════════════════════════════════

function ChatPreview({ prompts, starterEnabled, flows }) {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const endRef = useRef(null);
  const active = prompts.filter((p) => p.trim());

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text) => {
    setMsgs((p) => [...p, { role: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const r = {
        "What's your return policy?": "We offer a 30-day hassle-free return policy on all unworn items. Simply start a return from your order page and we'll email you a prepaid shipping label.",
        "Where's my order?": "I can help you track your order! Could you share your order number or the email you used at checkout?",
        "Do you offer free shipping?": "Yes! Free standard shipping on orders over $50. Standard delivery takes 3-5 business days.",
      };
      setMsgs((p) => [...p, { role: "ai", text: r[text] || `Thanks for asking about "${text}"! Based on our policies, I can provide detailed information. Would you like more specifics?` }]);
    }, 1400);
  };

  const reset = () => { setMsgs([]); setTyping(false); setInput(""); };
  const home = msgs.length === 0;

  return (
    <div style={{ width: 300, flexShrink: 0, background: "#F9FAFB", borderLeft: `1px solid ${t.border}`, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ padding: "12px 14px", borderBottom: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: t.white }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>Chat preview</span>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            <svg key="h" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M3 10.5L12 3l9 7.5V21H15v-5h-6v5H3V10.5z" stroke={t.textSec} strokeWidth="1.7" strokeLinejoin="round"/></svg>,
            <svg key="r" width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6M23 20v-6h-6" stroke={t.textSec} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke={t.textSec} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          ].map((icon, i) => (
            <div key={i} onClick={reset} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", background: t.white }}>{icon}</div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Brand header */}
        <div style={{ background: "linear-gradient(180deg, #F5E6D0 0%, #EDD5B8 100%)", padding: "28px 16px 18px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 7, background: t.white, fontSize: 11, fontWeight: 500, color: t.text, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", cursor: "pointer" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="21" r="1" stroke={t.text} strokeWidth="1.5"/><circle cx="20" cy="21" r="1" stroke={t.text} strokeWidth="1.5"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke={t.text} strokeWidth="1.5" strokeLinecap="round"/></svg>
            Track orders
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#C41E3A", fontFamily: "Georgia, serif", fontStyle: "italic", letterSpacing: "-0.03em" }}>Wilson</div>
        </div>

        {/* Chat body */}
        <div style={{ flex: 1, overflowY: "auto", background: t.white }}>
          {home ? (
            <div style={{ padding: "14px 14px 18px" }}>
              {flows.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: starterEnabled && active.length > 0 ? 14 : 0 }}>
                  {flows.map((f, i) => (
                    <button key={i} onClick={() => send(f)} style={{ padding: "6px 12px", borderRadius: 18, border: `1px solid ${t.border}`, background: t.white, fontSize: 12, color: t.text, cursor: "pointer" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.purple; e.currentTarget.style.background = t.purpleLight; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.white; }}>
                      {f}
                    </button>
                  ))}
                </div>
              )}
              {starterEnabled && active.length > 0 && (
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, paddingLeft: 2 }}>✦ Ask AI Agent</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {active.map((p, i) => (
                      <button key={i} onClick={() => send(p)} style={{ padding: "9px 12px", borderRadius: 10, border: `1px solid ${t.border}`, background: t.white, fontSize: 12, color: t.text, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 7 }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.purple; e.currentTarget.style.background = t.purpleLight; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.white; }}>
                        <span style={{ fontSize: 12, opacity: 0.5 }}>⚡</span>{p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{ maxWidth: "85%", padding: "8px 12px", borderRadius: m.role === "user" ? "12px 12px 3px 12px" : "12px 12px 12px 3px", background: m.role === "user" ? t.text : "#F3F4F6", color: m.role === "user" ? "#fff" : t.text, fontSize: 12, lineHeight: 1.5 }}>
                    {m.role === "ai" && <div style={{ fontSize: 9, color: t.purple, fontWeight: 600, marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>✦ AI Agent</div>}
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div style={{ display: "flex" }}>
                  <div style={{ padding: "8px 12px", borderRadius: "12px 12px 12px 3px", background: "#F3F4F6", display: "flex", alignItems: "center", gap: 2 }}>
                    {[0, 0.2, 0.4].map((d) => <span key={d} style={{ animation: `pulse 1.2s infinite ${d}s`, fontSize: 14, color: t.textMuted }}>•</span>)}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ padding: "8px 12px", borderTop: `1px solid ${t.border}`, background: t.white, display: "flex", alignItems: "center", gap: 6 }}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && input.trim() && !typing) { send(input.trim()); setInput(""); } }}
            placeholder="Reply" style={{ flex: 1, padding: "6px 10px", border: "none", fontSize: 13, color: t.text, outline: "none", background: "transparent" }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ cursor: "pointer", flexShrink: 0 }}><rect x="3" y="3" width="18" height="18" rx="2" stroke={t.textMuted} strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill={t.textMuted}/><path d="M21 15l-5-5L5 21" stroke={t.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// SETTINGS CONTENT
// ════════════════════════════════════════════════════════

function SettingsContent({ prompts, setPrompts, starterEnabled, setStarterEnabled }) {
  const [tab, setTab] = useState("automation");
  const tabs = ["Appearance", "Preferences", "Automation", "Language", "Installation"];

  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#FAFAF9" }}>
      <div style={{ padding: "10px 20px 0", fontSize: 12, color: t.textSec }}>
        <span style={{ cursor: "pointer" }}>All chats</span>
        <span style={{ margin: "0 5px", color: t.textMuted }}>›</span>
        <span>Sol de Janeiro Support</span>
      </div>
      <div style={{ padding: "10px 20px 0", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", background: t.white }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={t.text} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: t.text, margin: 0 }}>Settings</h1>
      </div>
      <div style={{ padding: "0 20px", borderBottom: `1px solid ${t.border}`, display: "flex", gap: 0, marginTop: 14 }}>
        {tabs.map((tb) => {
          const id = tb.toLowerCase();
          return (
            <button key={id} onClick={() => setTab(id)} style={{
              padding: "10px 14px", background: "none", border: "none", cursor: "pointer", fontSize: 13,
              fontWeight: tab === id ? 600 : 400, color: tab === id ? t.text : t.textSec,
              borderBottom: tab === id ? "2px solid #111827" : "2px solid transparent", marginBottom: -1,
            }}>{tb}</button>
          );
        })}
      </div>
      {tab === "automation" ? (
        <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
          <FlowsCard />
          <StarterPromptsCard prompts={prompts} setPrompts={setPrompts} enabled={starterEnabled} setEnabled={setStarterEnabled} />
          <OrderManagementCard />
        </div>
      ) : (
        <div style={{ padding: "50px 20px", textAlign: "center", color: t.textMuted, fontSize: 13 }}>{tabs.find(x => x.toLowerCase() === tab)} settings would appear here</div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════

export default function App() {
  const [prompts, setPrompts] = useState(["What's your return policy?", "Where's my order?", "Do you offer free shipping?"]);
  const [starterEnabled, setStarterEnabled] = useState(true);
  const flows = ["Tennis Racket Finder", "Can I adjust my order?", "How can I get 10% off my first order?", "How long does shipping take?", "Warranty"];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SettingsSidebar />
      <SettingsContent prompts={prompts} setPrompts={setPrompts} starterEnabled={starterEnabled} setStarterEnabled={setStarterEnabled} />
      <ChatPreview prompts={prompts} starterEnabled={starterEnabled} flows={flows} />
    </div>
  );
}