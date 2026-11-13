/** Ortak açık tema sınıfları — admin paneli. */
export const admin = {
  pageTitle: "font-display text-3xl text-ink",
  pageLead: "mt-2 max-w-2xl text-sm text-ink/60",
  card: "border border-ink/10 bg-white p-5 shadow-sm sm:p-6",
  cardMuted: "border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink/65",
  alertError: "border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink",
  alertOk: "border border-ink/10 bg-ink/[0.03] px-4 py-3 text-sm text-ink/70",
  label: "block text-sm text-ink/70",
  labelXs: "block text-xs text-ink/50",
  input:
    "mt-1 w-full border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent",
  inputMt2:
    "mt-2 w-full border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent",
  btnPrimary: "bg-accent px-4 py-3 text-sm font-medium text-white disabled:opacity-60",
  btnSecondary: "border border-ink/20 bg-white px-4 py-3 text-sm text-ink hover:border-ink/40 disabled:opacity-60",
  btnDanger: "border border-accent/40 px-3 py-2 text-sm text-accent hover:bg-accent/5 disabled:opacity-60",
  btnSave: "bg-ink px-3 py-2 text-sm text-white disabled:opacity-60",
  sectionTitle: "font-display text-2xl text-ink",
  eyebrow: "text-xs tracking-[0.18em] text-ink/45 uppercase",
} as const;
