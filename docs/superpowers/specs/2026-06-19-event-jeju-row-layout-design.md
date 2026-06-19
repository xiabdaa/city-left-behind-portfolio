# Event and Jeju row layout

## Goal

Make two focused editorial changes without altering the rest of the portfolio:

- Remove the red installation `DSCF1295.JPG` from Event's numbered photograph grid.
- Place Event photographs `DSCF0200.JPG`, `DSCF0484.JPG`, and `DSCF0445.JPG` in one three-column row.
- Place Jeju photographs `DSCF0813.JPG` and `DSCF1014.JPG` in one two-column row, with the bicycle first and the mountain buses second.

## Layout

- Desktop Event uses a centered three-column row with equal-width cells and the existing page spacing, captions, borders, and click-to-enlarge behavior.
- Desktop Jeju uses a centered two-column row with equal-width cells and the existing page spacing, captions, borders, and click-to-enlarge behavior.
- Images keep their natural aspect ratios and use `object-fit: contain`; no image is cropped or stretched.
- At 900px and below, both rows stack into one column.

## Content

- Event opening captions are renumbered `01`, `02`, and `03` after removing the old first photograph.
- Later Event captions are renumbered sequentially to `04` and `05`.
- Jeju keeps the existing caption text and renumbers the bicycle, bus, and following coast photograph sequentially as `06`, `07`, and `08`.

## Verification

- Automated checks confirm Event's numbered grid no longer references `DSCF1295.JPG` and contains the three specified opening images in one row.
- Automated checks confirm Jeju contains `DSCF0813.JPG` and `DSCF1014.JPG` in one row and in that order.
- Desktop and mobile browser checks confirm correct columns, natural image ratios, and no horizontal overflow.
- GitHub Pages is verified after deployment.
