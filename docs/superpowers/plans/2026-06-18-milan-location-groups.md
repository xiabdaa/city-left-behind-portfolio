# Milan Location Groups Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add all 12 supplied photographs to the Milan page and distinguish Garibaldi from CityLife without changing the site's established editorial layout.

**Architecture:** Keep the static HTML/CSS structure and existing motion script. Extend the Milan sequence with semantic section headers and the existing `wide`, `portrait`, and `diptych` figure patterns; add structural checks to the repository's current Node validation script.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js validation, GitHub Pages.

---

### Task 1: Lock the new Milan content requirements

**Files:**
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Add a failing structural test**

Add assertions requiring the two location headings, all 12 supplied filenames, one HTML reference per supplied file, and the matching files in `assets/`.

- [ ] **Step 2: Run the check and verify RED**

Run: `node portfolio.check.mjs`

Expected: failure reporting the missing Garibaldi heading or a missing supplied photograph.

### Task 2: Add assets and group the Milan sequence

**Files:**
- Create: `assets/DSCF1634.JPG`
- Create: `assets/DSCF1639.JPG`
- Create: `assets/DSCF1648.JPG`
- Create: `assets/DSCF1660.JPG`
- Create: `assets/DSCF1670.JPG`
- Create: `assets/DSCF1676.JPG`
- Create: `assets/DSCF1723.JPG`
- Create: `assets/DSCF1734.jpg`
- Create: `assets/DSCF1754.jpg`
- Create: `assets/DSCF1765.JPG`
- Create: `assets/DSCF1781.JPG`
- Create: `assets/DSCF1807.JPG`
- Modify: `milan.html`

- [ ] **Step 1: Copy the supplied photographs into `assets/`**

Preserve the original filenames and bytes so image orientation metadata remains intact.

- [ ] **Step 2: Add Garibaldi and CityLife headers**

Insert accessible section headings within the existing Milan photo essay. Garibaldi precedes the 14 June sequence; CityLife precedes the 15 June sequence.

- [ ] **Step 3: Add all supplied photographs with existing figure patterns**

Use `diptych` for complementary landscape/portrait pairs, `portrait` for a single vertical composition, and `wide` for a single landscape composition. Give each image descriptive alternative text and each figure a concise numbered caption.

- [ ] **Step 4: Run the check and verify the content assertions advance**

Run: `node portfolio.check.mjs`

Expected: all new asset and markup assertions pass; any remaining failure points to presentation requirements.

### Task 3: Match the existing visual and motion system

**Files:**
- Modify: `styles.css`
- Modify: `detail-motion.js`
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Add failing presentation assertions**

Require a location-section heading style and inclusion of those headings in the existing reveal target list.

- [ ] **Step 2: Run the check and verify RED**

Run: `node portfolio.check.mjs`

Expected: failure reporting missing location-section styling or reveal behavior.

- [ ] **Step 3: Implement the minimal presentation changes**

Style the headers with the page's existing rules, uppercase labels, responsive spacing, and typography. Add them to the reveal targets without creating new controls or routes.

- [ ] **Step 4: Run the check and verify GREEN**

Run: `node portfolio.check.mjs`

Expected: `Portfolio checks passed.`

### Task 4: Visual QA and publication

**Files:**
- Modify only if visual QA reveals a scoped Milan issue: `milan.html`, `styles.css`, `detail-motion.js`

- [ ] **Step 1: Serve the site locally**

Run: `python3 -m http.server 4173`

Expected: the site responds at `http://127.0.0.1:4173/milan.html`.

- [ ] **Step 2: Inspect desktop and mobile layouts**

Check the hero, both location boundaries, every supplied image, diptych stacking, captions, and the page ending. Confirm no image is stretched, cropped unintentionally, or missing.

- [ ] **Step 3: Run final verification**

Run: `node portfolio.check.mjs && git diff --check`

Expected: `Portfolio checks passed.` and exit code 0.

- [ ] **Step 4: Commit and publish**

Commit only the Milan implementation, supplied assets, tests, and plan; preserve unrelated user changes. Push `main` to `origin` so GitHub Pages updates the live site.
