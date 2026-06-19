# Event and Jeju Row Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove Event's old first photograph, place the remaining three Event opening photographs in one row, and pair the selected Jeju bicycle and bus photographs.

**Architecture:** Add semantic row wrapper figures to the existing static HTML and a small set of shared detail-page CSS rules. Preserve the site's existing captions, borders, image lightbox behavior, natural aspect ratios, and mobile one-column layout.

**Tech Stack:** Static HTML, CSS Grid, Node.js repository checks, in-app browser QA, GitHub Pages.

---

### Task 1: Define the expected content structure

**Files:**
- Modify: `portfolio.check.mjs`

- [ ] **Step 1: Add a failing Event check**

Require the numbered Event photo grid to omit `DSCF0200.JPG` while keeping it as the hero, and contain `DSCF0484.JPG`, `DSCF0445.JPG`, and `DSCF1295.JPG` inside one `triple-row` figure.

- [ ] **Step 2: Add a failing Jeju check**

Require `jeju.html` to contain `DSCF0813.JPG` followed by `DSCF1014.JPG` inside one `paired-row` figure.

- [ ] **Step 3: Run the check**

Run: `node portfolio.check.mjs`

Expected: FAIL because the new wrappers do not yet exist and Event still references `DSCF0200.JPG`.

### Task 2: Implement the two rows

**Files:**
- Modify: `event.html`
- Modify: `jeju.html`
- Modify: `styles.css`

- [ ] **Step 1: Replace the Event opening figures**

Remove `DSCF0200.JPG`, create one `triple-row` figure containing the three remaining opening images and their individual captions, and renumber later Event captions sequentially.

- [ ] **Step 2: Pair the two Jeju photographs**

Replace the separate `DSCF1014.JPG` and `DSCF0813.JPG` figures with one `paired-row` figure ordered bicycle first, buses second; renumber the bicycle, buses, and coast captions as `06`, `07`, and `08`.

- [ ] **Step 3: Add responsive row CSS**

Use three desktop columns for `.triple-row-images`, two desktop columns for `.paired-row-images`, preserve natural ratios, and switch both to one column under the existing 900px breakpoint.

- [ ] **Step 4: Cache-bust the updated pages**

Update Event and Jeju stylesheet and motion query strings to `20260619-editorial-rows`.

- [ ] **Step 5: Run automated checks**

Run: `node portfolio.check.mjs && git diff --check`

Expected: `Portfolio multi-page checks passed.` with no whitespace errors.

### Task 3: Verify and publish

**Files:**
- No additional source files.

- [ ] **Step 1: Verify desktop layout**

At 1280px and 2048px widths, confirm Event has three columns, Jeju has two columns, image ratios are preserved, and no horizontal overflow occurs.

- [ ] **Step 2: Verify mobile layout**

At 390px width, confirm both rows stack to one column and no horizontal overflow occurs.

- [ ] **Step 3: Commit and push**

Commit the spec, plan, tests, HTML, and CSS; push `main` without staging the pre-existing `.DS_Store` file.

- [ ] **Step 4: Verify GitHub Pages**

Wait for the Pages deployment and confirm the live Event and Jeju HTML and shared CSS contain the new row classes and cache-busting value.
