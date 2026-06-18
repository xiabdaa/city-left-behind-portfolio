# Milan feature diptych

## Goal

Place `DSCF1634.JPG` and `DSCF1676.JPG` together in one enlarged row on the Milan page so the two related Garibaldi views are easier to compare and view.

## Scope

- Replace the two separate portrait figures with one shared diptych near the beginning of the Garibaldi sequence.
- Keep `DSCF1634.JPG` on the left and `DSCF1676.JPG` on the right.
- Give this pair a dedicated `feature-diptych` class so it can be enlarged without changing every other photograph.
- On desktop, the photographs remain in one row and use a larger width and height than standard diptychs.
- On screens at or below 900px, the photographs stack vertically at full available width.
- Use one combined caption and renumber the following Milan captions continuously.

## Non-goals

- Do not add the previously discussed full-site lightbox yet.
- Do not resize or rearrange other photographs.
- Do not alter navigation, typography, colors, or the location grouping.

## Verification

- Confirm each target filename appears exactly once in `milan.html` and both are inside the same `feature-diptych`.
- Confirm desktop computed layout has two columns and mobile computed layout has one column.
- Confirm the feature pair is visibly larger than a standard diptych without cropping or stretching.
- Run repository checks, inspect the local page, publish `main`, and verify the live Milan page.
