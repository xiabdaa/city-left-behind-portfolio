# Milan Feature Diptych Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Place `DSCF1634.JPG` and `DSCF1676.JPG` together as one larger two-column feature on the Milan page while preserving a single-column mobile layout.

**Architecture:** Reuse the existing Milan `figure.diptych > .diptych-images` markup and add one scoped `feature-diptych` modifier. Extend the existing repository check so the two filenames must live inside that feature container and so desktop/mobile CSS requirements stay explicit.

**Tech Stack:** Static HTML, CSS media queries, Node.js repository check, GitHub Pages.

---

### Task 1: Lock the feature-pair structure with a failing check

**Files:**
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Write the failing check**

Add checks that extract `figure.diptych.feature-diptych`, require both target images inside it, and require the feature-specific desktop and mobile CSS selectors.

```js
const featureDiptych = milan.match(/<figure class="diptych feature-diptych">[\s\S]*?<\/figure>/)?.[0] ?? "";
if (!featureDiptych.includes("DSCF1634.JPG") || !featureDiptych.includes("DSCF1676.JPG")) {
  throw new Error("Milan feature diptych should contain DSCF1634 and DSCF1676.");
}
if (!/\.milan-detail \.photo-grid \.feature-diptych[\s\S]*?width:\s*min\(100%,\s*1700px\)/.test(css)) {
  throw new Error("Milan feature diptych should use the enlarged desktop width.");
}
if (!/@media\s*\(max-width:\s*900px\)[\s\S]*?\.milan-detail \.feature-diptych \.diptych-images[\s\S]*?grid-template-columns:\s*1fr/.test(css)) {
  throw new Error("Milan feature diptych should stack on mobile.");
}
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `node portfolio.check.mjs`

Expected: FAIL with `Milan feature diptych should contain DSCF1634 and DSCF1676.`

- [ ] **Step 3: Commit the failing check**

```bash
git add portfolio.check.mjs
git commit -m "test: define Milan feature diptych"
```

### Task 2: Build and enlarge the feature pair

**Files:**
- Modify: `milan.html`
- Modify: `styles.css`

- [ ] **Step 1: Replace the two separate portrait figures with one feature diptych**

Place the pair immediately after the Garibaldi heading, with `DSCF1634.JPG` left and `DSCF1676.JPG` right.

```html
<figure class="diptych feature-diptych">
  <div class="diptych-images">
    <span><img src="assets/DSCF1634.JPG" alt="A Garibaldi glass tower rising above a shaded market stall" /></span>
    <span><img src="assets/DSCF1676.JPG" alt="The UniCredit tower rising behind Porta Garibaldi and cyclists" /></span>
  </div>
  <figcaption>01 / Market, gate, and tower compress two scales of Garibaldi into one view.</figcaption>
</figure>
```

Delete the former standalone `DSCF1676.JPG` figure and renumber every following Milan caption continuously from `02` through `25`.

- [ ] **Step 2: Add scoped desktop enlargement**

Inside the existing `@media (min-width: 901px)` Milan overrides, add:

```css
.milan-detail .photo-grid .feature-diptych {
  width: min(100%, 1700px);
}

.milan-detail .feature-diptych .diptych-images {
  gap: clamp(18px, 2vw, 36px);
  align-items: start;
}

.milan-detail .feature-diptych .diptych-images span {
  height: auto;
}

.milan-detail .feature-diptych .diptych-images img {
  width: 100%;
  max-height: none;
}
```

- [ ] **Step 3: Keep the feature pair stacked and large on mobile**

Inside the existing `@media (max-width: 900px)` Milan overrides, add:

```css
.milan-detail .feature-diptych .diptych-images {
  grid-template-columns: 1fr;
}

.milan-detail .feature-diptych .diptych-images img {
  width: 100%;
  max-width: 680px;
  max-height: none;
}
```

- [ ] **Step 4: Update Milan cache-busting query strings**

Change the Milan stylesheet and detail-motion versions to `20260618-feature-pair`, and update the repository assertion to require those exact values.

- [ ] **Step 5: Run checks and verify they pass**

Run: `node portfolio.check.mjs && git diff --check`

Expected: `Portfolio multi-page checks passed.` and no whitespace errors.

- [ ] **Step 6: Commit the implementation**

```bash
git add milan.html styles.css portfolio.check.mjs
git commit -m "feat: enlarge Milan Garibaldi diptych"
```

### Task 3: Visually verify and publish

**Files:**
- No code files beyond Task 2.

- [ ] **Step 1: Start or reuse the local website server**

Open `http://127.0.0.1:4173/milan.html` in the in-app browser.

- [ ] **Step 2: Verify desktop layout**

At a desktop viewport, confirm the feature pair has two equal columns, `DSCF1634` is left, `DSCF1676` is right, both are larger than standard diptych images, and neither image is cropped or stretched.

- [ ] **Step 3: Verify mobile layout**

At a viewport at or below 900px, confirm the two feature images stack into one column without horizontal overflow.

- [ ] **Step 4: Run final verification**

Run: `node portfolio.check.mjs && git diff --check && git status --short --branch`

Expected: checks pass, branch is clean except the pre-existing untracked `docs/superpowers/.DS_Store`.

- [ ] **Step 5: Push and verify GitHub Pages**

Push `main`, wait for the Pages deployment to succeed, then confirm the live Milan HTML and CSS contain `feature-diptych` and the two target filenames.
