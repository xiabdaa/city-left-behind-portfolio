# Site-wide portrait scale system

## Goal

Use the displayed `DSCF1634.JPG` and `DSCF1676.JPG` row as the reference size and spacing for vertical photographs across every work detail page.

## Scope

- Keep `DSCF1634.JPG` left and `DSCF1676.JPG` right in the leading Garibaldi pair.
- Mark every diptych whose two images are vertical with `portrait-diptych`.
- On desktop, every vertical diptych uses a centered row and a responsive gap of 32–56px.
- Each vertical photograph is capped at 600px wide and 76% of the browser height, up to 900px tall, so the full image and caption fit in one computer viewport.
- Every single vertical photograph uses the same responsive size as one column of a vertical diptych.
- Reclassify the vertical `DSCF0583.JPG` photograph from `wide` to `portrait`.
- Pair consecutive vertical photographs on Home, Event, and Venice using the same fitted dimensions and spacing.
- Center the single vertical Jeju photograph using the same fitted dimensions.
- Mark Event's all-vertical diptych and the vertical cell in its mixed diptych so they preserve full height and natural aspect ratio.
- On screens at or below 900px, vertical pairs stack at full available width.

## Non-goals

- Do not add the previously discussed full-site lightbox yet.
- Do not resize horizontal photographs or mixed-orientation diptychs.
- Do not alter navigation, typography, colors, or the location grouping.

## Verification

- Confirm all eight Milan vertical pairs and the Event vertical pair have the `portrait-diptych` class.
- Confirm the four single vertical photographs use the `portrait` class.
- Confirm vertical pairs render up to 600 × 900px with an approximately 56px gap at 2048 × 1194.
- Confirm vertical pairs and singles shrink to approximately 365 × 547px at 1280 × 720, leaving room for captions and surrounding whitespace.
- Confirm single vertical photographs always match one vertical-pair column.
- Confirm mobile computed layout has one column and no horizontal overflow.
- Confirm all Home, Event, Jeju, and Venice portrait assignments, then inspect locally, publish `main`, and verify the live detail pages.
