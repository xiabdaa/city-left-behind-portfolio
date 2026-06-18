# Milan portrait scale system

## Goal

Use the displayed `DSCF1634.JPG` and `DSCF1676.JPG` row as the Milan page reference size and spacing for every vertical pair and every single vertical photograph.

## Scope

- Keep `DSCF1634.JPG` left and `DSCF1676.JPG` right in the leading Garibaldi pair.
- Mark every diptych whose two images are vertical with `portrait-diptych`.
- On desktop, every vertical diptych uses a centered 1500px maximum row and a responsive gap of 24–36px.
- Each vertical photograph is capped at 600px wide and 76% of the browser height, up to 900px tall, so the full image and caption fit in one computer viewport.
- Every single vertical photograph uses the same responsive size as one column of a vertical diptych.
- Reclassify the vertical `DSCF0583.JPG` photograph from `wide` to `portrait`.
- On screens at or below 900px, vertical pairs stack at full available width.

## Non-goals

- Do not add the previously discussed full-site lightbox yet.
- Do not resize horizontal photographs or mixed-orientation diptychs.
- Do not alter navigation, typography, colors, or the location grouping.

## Verification

- Confirm all eight vertical pairs have the `portrait-diptych` class.
- Confirm the four single vertical photographs use the `portrait` class.
- Confirm vertical pairs render as two 600 × 900px columns with a 36px gap at 2048 × 1194.
- Confirm vertical pairs and singles shrink to approximately 365 × 547px at 1280 × 720, leaving room for captions and surrounding whitespace.
- Confirm single vertical photographs always match one vertical-pair column.
- Confirm mobile computed layout has one column and no horizontal overflow.
- Run repository checks, inspect the local page, publish `main`, and verify the live Milan page.
