import { useState } from "react";

const TOPICS = {
  tier1: [
    { id: "self-harm", label: "Self-harm", description: "Customer expresses intent or history of self-harm" },
    { id: "violence", label: "Violence / threats", description: "Customer threatens or describes violence toward others" },
    { id: "lawsuit", label: "Threat of lawsuit", description: "Customer explicitly threatens legal action" },
    { id: "pii", label: "PII / financial credentials", description: "Customer sharing or requesting bank/card details" },
  ],
  tier2: [
    { id: "marketing", label: "Marketing & partnership outreach", defaultOutcome: "deflect" },
    { id: "wholesale", label: "Wholesale & B2B inquiries", defaultOutcome: "deflect" },
    { id: "affiliate", label: "Affiliate & influencer inquiries", defaultOutcome: "deflect" },
    { id: "press", label: "Press & media inquiries", defaultOutcome: "deflect" },
    { id: "jobs", label: "Job applications", defaultOutcome: "deflect" },
    { id: "supplier", label: "Supplier & vendor inquiries", defaultOutcome: "deflect" },
    { id: "automated", label: "Automated / out-of-office replies", defaultOutcome: "deflect" },
    { id: "liability", label: "Product liability claim", defaultOutcome: "handover" },
    { id: "gdpr", label: "Data privacy / GDPR request", defaultOutcome: "handover" },
    { id: "fraud", label: "Fraud / chargeback suspicion", defaultOutcome: "handover" },
    { id: "legal", label: "Legal or compliance question", defaultOutcome: "handover" },
    { id: "age", label: "Age-restricted content", defaultOutcome: "handover" },
  ],
};

const css = {
  page: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    background: "#F9F8F6",
    minHeight: "100vh",
    padding: "32px 24px",
    color: "#1A1A1A",
  },
  card: {
    background: "#FFFFFF",
    border: "1.5px solid #E8E4DD",
    borderRadius: 16,
    padding: "24px",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: "#6B6460",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    color: "#8A837D",
    marginBottom: 20,
    lineHeight: 1.5,
  },
  tier1Row: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 8,
    background: "#F9F8F6",
    marginBottom: 6,
  },
  tier1Label: {
    fontSize: 14,
    color: "#9B9490",
    flex: 1,
  },
  tier1Badge: {
    fontSize: 11,
    fontWeight: 500,
    color: "#C4501A",
    background: "#FDF0EB",
    border: "1px solid #F5C5AE",
    borderRadius: 6,
    padding: "2px 8px",
  },
  tier1Desc: {
    fontSize: 12,
    color: "#B0A9A4",
  },
  topicRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "11px 14px",
    borderRadius: 10,
    border: "1.5px solid #E8E4DD",
    marginBottom: 8,
    background: "#FFFFFF",
    transition: "border-color 0.15s",
    cursor: "pointer",
  },
  topicRowActive: {
    borderColor: "#8B5CF6",
    background: "#FDFBFF",
  },
  checkbox: (checked) => ({
    width: 18,
    height: 18,
    borderRadius: 5,
    border: checked ? "none" : "2px solid #C9C3BD",
    background: checked ? "#8B5CF6" : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.15s",
  }),
  checkmark: {
    color: "white",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: 1,
  },
  topicLabel: (checked) => ({
    fontSize: 14,
    color: checked ? "#1A1A1A" : "#4A4540",
    flex: 1,
    fontWeight: checked ? 500 : 400,
  }),
  outcomeSelector: {
    display: "flex",
    gap: 4,
    background: "#F3F1EE",
    borderRadius: 8,
    padding: 3,
  },
  outcomeBtn: (active, type) => ({
    fontSize: 12,
    fontWeight: 500,
    padding: "4px 10px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    transition: "all 0.15s",
    background: active
      ? type === "handover"
        ? "#8B5CF6"
        : "#1A1A1A"
      : "transparent",
    color: active ? "#FFFFFF" : "#8A837D",
  }),
  addRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 10,
    border: "1.5px dashed #D5CFC8",
    marginTop: 4,
    cursor: "pointer",
  },
  addInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: 14,
    color: "#4A4540",
    background: "transparent",
    fontFamily: "inherit",
  },
  addIcon: {
    width: 18,
    height: 18,
    borderRadius: 5,
    border: "2px dashed #C9C3BD",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#C9C3BD",
    fontSize: 14,
    flexShrink: 0,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
    color: "#8A837D",
    marginBottom: 28,
    lineHeight: 1.5,
  },
  divider: {
    height: 1,
    background: "#F0ECE8",
    margin: "20px 0",
  },
  customRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "11px 14px",
    borderRadius: 10,
    border: "1.5px solid #8B5CF6",
    marginBottom: 8,
    background: "#FDFBFF",
  },
  removeBtn: {
    color: "#C9C3BD",
    fontSize: 16,
    cursor: "pointer",
    padding: "0 2px",
    lineHeight: 1,
    background: "none",
    border: "none",
    flexShrink: 0,
  },
};

export default function ScopePrototype() {
  const [checked, setChecked] = useState({});
  const [outcomes, setOutcomes] = useState(
    Object.fromEntries(TOPICS.tier2.map((t) => [t.id, t.defaultOutcome]))
  );
  const [customTopics, setCustomTopics] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [customOutcomes, setCustomOutcomes] = useState({});

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const setOutcome = (id, val) => setOutcomes((prev) => ({ ...prev, [id]: val }));
  const setCustomOutcome = (id, val) => setCustomOutcomes((prev) => ({ ...prev, [id]: val }));

  const addCustom = () => {
    if (!inputValue.trim()) return;
    const id = `custom-${Date.now()}`;
    setCustomTopics((prev) => [...prev, { id, label: inputValue.trim() }]);
    setCustomOutcomes((prev) => ({ ...prev, [id]: "handover" }));
    setInputValue("");
  };

  const removeCustom = (id) => {
    setCustomTopics((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={css.page}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={css.pageTitle}>Scope</div>
        <div style={css.pageSubtitle}>
          Control what AI Agent responds to. The qualify step runs on every message — not just the first one.
          Tick a topic to stop AI Agent from handling it, then choose whether to hand over to a human or send a
          generic deflection message.
        </div>

        {/* Tier 1 */}
        <div style={css.card}>
          <div style={css.sectionTitle}>Always escalate</div>
          <div style={css.sectionDesc}>
            Universal hard stops. AI Agent always hands over immediately. Not configurable.
          </div>
          {TOPICS.tier1.map((t) => (
            <div key={t.id} style={css.tier1Row}>
              <div style={{ flex: 1 }}>
                <div style={css.tier1Label}>{t.label}</div>
                <div style={css.tier1Desc}>{t.description}</div>
              </div>
              <span style={css.tier1Badge}>Always handover</span>
            </div>
          ))}
        </div>

        {/* Tier 2 */}
        <div style={css.card}>
          <div style={css.sectionTitle}>Configurable topics</div>
          <div style={css.sectionDesc}>
            Tick a topic to prevent AI Agent from handling it. Choose the outcome: transfer to a human agent, or
            send a polite deflection without transferring.
          </div>
          {TOPICS.tier2.map((t) => (
            <div
              key={t.id}
              style={{ ...css.topicRow, ...(checked[t.id] ? css.topicRowActive : {}) }}
              onClick={() => toggle(t.id)}
            >
              <div style={css.checkbox(checked[t.id])}>
                {checked[t.id] && <span style={css.checkmark}>✓</span>}
              </div>
              <span style={css.topicLabel(checked[t.id])}>{t.label}</span>
              {checked[t.id] && (
                <div
                  style={css.outcomeSelector}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    style={css.outcomeBtn(outcomes[t.id] === "handover", "handover")}
                    onClick={() => setOutcome(t.id, "handover")}
                  >
                    Handover
                  </button>
                  <button
                    style={css.outcomeBtn(outcomes[t.id] === "deflect", "deflect")}
                    onClick={() => setOutcome(t.id, "deflect")}
                  >
                    Deflect
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tier 3 */}
        <div style={css.card}>
          <div style={css.sectionTitle}>Your topics</div>
          <div style={css.sectionDesc}>
            Add topics specific to your brand. For example: "Allergic reactions to any of our skincare
            products" or "Requests involving a pending litigation."
          </div>

          {customTopics.map((t) => (
            <div key={t.id} style={css.customRow}>
              <div style={{ ...css.checkbox(true) }}>
                <span style={css.checkmark}>✓</span>
              </div>
              <span style={{ ...css.topicLabel(true), flex: 1 }}>{t.label}</span>
              <div style={css.outcomeSelector} onClick={(e) => e.stopPropagation()}>
                <button
                  style={css.outcomeBtn(customOutcomes[t.id] === "handover", "handover")}
                  onClick={() => setCustomOutcome(t.id, "handover")}
                >
                  Handover
                </button>
                <button
                  style={css.outcomeBtn(customOutcomes[t.id] === "deflect", "deflect")}
                  onClick={() => setCustomOutcome(t.id, "deflect")}
                >
                  Deflect
                </button>
              </div>
              <button style={css.removeBtn} onClick={() => removeCustom(t.id)}>
                ×
              </button>
            </div>
          ))}

          <div style={css.addRow}>
            <div style={css.addIcon}>+</div>
            <input
              style={css.addInput}
              placeholder="Describe a topic AI Agent should not handle..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCustom()}
            />
            {inputValue && (
              <button
                onClick={addCustom}
                style={{
                  ...css.outcomeBtn(true, "handover"),
                  background: "#8B5CF6",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: 7,
                  fontSize: 13,
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
