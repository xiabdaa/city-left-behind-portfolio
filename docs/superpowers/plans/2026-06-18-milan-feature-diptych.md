# Milan Portrait Fit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every vertical pair and single vertical photograph on the Milan page share one responsive, fully visible computer-browser scale.

**Architecture:** Add semantic `portrait-diptych` classes to pairs whose two images are vertical and use the existing `portrait` class for singles. Scoped Milan CSS derives each photo width from the viewport height, preserves image aspect ratios, and stacks pairs on mobile.

**Tech Stack:** Static HTML, CSS media queries and viewport units, Node.js repository check, GitHub Pages.

---

### Task 1: Define portrait groups and checks

**Files:**
- Modify: `portfolio.check.mjs`
- Modify: `milan.html`

- [ ] **Step 1: Add failing checks for all vertical pairs and singles**

Require the eight vertical pairs to use `portrait-diptych` and require `DSCF1723.JPG`, `DSCF1754.jpg`, `DSCF1807.JPG`, and `DSCF0583.JPG` to use `portrait`.

- [ ] **Step 2: Run `node portfolio.check.mjs`**

Expected: FAIL because the portrait classes and fitted CSS are not yet complete.

- [ ] **Step 3: Add the portrait classes**

Keep horizontal and mixed-orientation groups unchanged.

### Task 2: Fit vertical photographs to the browser

**Files:**
- Modify: `styles.css`
- Modify: `milan.html`
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Define fitted desktop dimensions**

```css
--portrait-photo-width: min(600px, 50.666svh);
--portrait-photo-gap: clamp(24px, 2vw, 36px);
```

- [ ] **Step 2: Apply the shared pair and single sizing**

Use two centered portrait columns on desktop, cap image height at `min(76svh, 900px)`, preserve full aspect ratios, and keep the existing one-column mobile layout.

- [ ] **Step 3: Update Milan cache-busting values**

Use `20260618-portrait-fit` for both the stylesheet and detail-motion query strings.

- [ ] **Step 4: Run automated checks**

Run: `node portfolio.check.mjs && git diff --check`

Expected: `Portfolio multi-page checks passed.` with no whitespace errors.

### Task 3: Verify responsive layout and publish

**Files:**
- No additional code files.

- [ ] **Step 1: Verify at 2048 × 1194**

Expected: portrait columns are 600 × 900px with a 36px gap; single portraits are the same size; no crop, stretch, or horizontal overflow.

- [ ] **Step 2: Verify at 1280 × 720**

Expected: portrait columns shrink to about 365 × 547px and complete figures remain below the 720px viewport height.

- [ ] **Step 3: Verify at 390 × 844**

Expected: portrait pairs stack into one column and the page has no horizontal overflow.

- [ ] **Step 4: Commit, push `main`, and verify GitHub Pages**

Confirm the live Milan HTML includes `portrait-diptych` and the live CSS includes `--portrait-photo-width`.
