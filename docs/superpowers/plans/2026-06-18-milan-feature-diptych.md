# Site-wide Portrait System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every vertical photograph on the five work detail pages one responsive, fully visible desktop scale and a consistent, wider pair gap.

**Architecture:** Classify vertical singles, consecutive portrait pairs, vertical diptychs, and the one mixed-diptych portrait cell in HTML. Shared detail-page CSS uses viewport-height-derived width and height limits, keeps natural aspect ratios, and preserves the existing mobile stack.

**Tech Stack:** Static HTML, CSS Grid, CSS viewport units, Node.js repository check, GitHub Pages.

---

### Task 1: Classify the site-wide portrait content

**Files:**
- Modify: `home.html`
- Modify: `event.html`
- Modify: `jeju.html`
- Modify: `venice.html`
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Add failing portrait-assignment checks**

Require the Home pair, two Event pairs, the Jeju single, three Venice pairs, the Event vertical diptych, and Event's mixed-diptych vertical cell.

- [ ] **Step 2: Run `node portfolio.check.mjs`**

Expected: FAIL on the first missing assignment.

- [ ] **Step 3: Add semantic portrait classes**

Use `portrait-pair-left`, `portrait-pair-right`, `portrait-single`, `portrait-diptych`, and `portrait-cell`; do not reclassify horizontal photographs.

### Task 2: Apply the shared responsive scale

**Files:**
- Modify: `styles.css`
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Define shared dimensions**

```css
--portrait-photo-width: min(600px, 50.666svh);
--portrait-photo-gap: clamp(32px, 3vw, 56px);
```

- [ ] **Step 2: Fit paired singles, centered singles, and diptychs**

Cap images at `min(76svh, 900px)`, use `width: auto`, `max-width: 100%`, and `height: auto` so every photograph remains uncropped and undistorted.

- [ ] **Step 3: Preserve mobile behavior**

At 900px and below, pair figures and diptychs return to one-column stacking without horizontal overflow.

- [ ] **Step 4: Run `node portfolio.check.mjs && git diff --check`**

Expected: `Portfolio multi-page checks passed.` and no whitespace errors.

### Task 3: Verify and publish

**Files:**
- Modify cache-busting values in `milan.html`, `home.html`, `event.html`, `jeju.html`, and `venice.html`.

- [ ] **Step 1: Verify 2048 × 1194**

Expected: 600 × 900px standard portraits, a 56px gap, preserved ratios, and no horizontal overflow.

- [ ] **Step 2: Verify 1280 × 720**

Expected: approximately 365 × 547px standard portraits, a 38px gap, complete figures under 720px, preserved ratios, and no overflow.

- [ ] **Step 3: Verify 390 × 844**

Expected: one-column portrait layout and no horizontal overflow on all five pages.

- [ ] **Step 4: Cache-bust, commit, push `main`, and verify GitHub Pages**

Use `20260619-portrait-system`, run final checks, push, wait for Pages, and verify the live HTML and CSS.
