# Event and Jeju row layout

## Goal

Make two focused editorial changes without altering the rest of the portfolio:

- Remove `DSCF0200.JPG` from Event.
- Place Event's remaining opening photographs `DSCF0484.JPG`, `DSCF0445.JPG`, and `DSCF1295.JPG` in one three-column row.
- Place Jeju photographs `DSCF0813.JPG` and `DSCF1014.JPG` in one two-column row, with the bicycle first and the mountain buses second.

## Layout

- Desktop Event uses a centered three-column row with equal-width cells and the existing page spacing, captions, borders, and click-to-enlarge behavior.
- Desktop Jeju uses a centered two-column row with equal-width cells and the existing page spacing, captions, borders, and click-to-enlarge behavior.
- Images keep their natural aspect ratios and use `object-fit: contain`; no image is cropped or stretched.
- At 900px and below, both rows stack into one column.

## Content

- Event opening captions are renumbered `01`, `02`, and `03` after removing the old first photograph.
- Later Event captions are renumbered sequentially to `04` and `05`.
- Jeju keeps its existing image captions and numbering; only the bicycle and bus photographs change position and grouping.

## Verification

- Automated checks confirm Event no longer references `DSCF0200.JPG` and contains the three specified opening images in one row.
- Automated checks confirm Jeju contains `DSCF0813.JPG` and `DSCF1014.JPG` in one row and in that order.
- Desktop and mobile browser checks confirm correct columns, natural image ratios, and no horizontal overflow.
- GitHub Pages is verified after deployment.
