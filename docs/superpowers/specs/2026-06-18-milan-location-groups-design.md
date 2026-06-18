# Milan location groups

## Goal

Add all 12 supplied photographs to the existing Milan photo essay without redesigning the page. Make the Garibaldi and CityLife sequences visibly distinct while preserving the current editorial layout, typography, spacing, captions, responsive behavior, and scroll reveals.

## Organization

- **Garibaldi** contains the existing and supplied photographs shot on 14 June 2026. The supplied files are `DSCF1634.JPG`, `DSCF1639.JPG`, `DSCF1648.JPG`, `DSCF1660.JPG`, `DSCF1670.JPG`, `DSCF1676.JPG`, and `DSCF1723.JPG`.
- **CityLife** contains the existing and supplied photographs shot on 15 June 2026. The supplied files are `DSCF1734.jpg`, `DSCF1754.jpg`, `DSCF1765.JPG`, `DSCF1781.JPG`, and `DSCF1807.JPG`.
- Existing Milan photographs that do not belong to either location remain on the page after those two sequences. They will not be forced into an inaccurate location group.

## Presentation

- Keep the existing Milan hero, reading text, navigation, colors, type, image sizing, and editorial pacing.
- Add restrained section headers for Garibaldi and CityLife using the page's existing horizontal-rule and uppercase-label language.
- Place photographs with the existing `wide`, `portrait`, and `diptych` figure patterns. Pair images by visual rhythm and orientation; do not crop or stretch them.
- Continue captions in the same concise English editorial voice and renumber the sequence continuously.
- Preserve the existing desktop and mobile behavior. On smaller screens, diptychs continue to stack vertically.

## Behavior and accessibility

- Existing scroll-reveal behavior remains intact for all figures.
- New section headers participate in the same reveal rhythm without introducing new controls or routes.
- Every new image receives descriptive alternative text.

## Verification

- Confirm all 12 supplied files are present in `assets/` and referenced once from `milan.html`.
- Run the repository checks and verify there are no missing image references.
- Inspect the Milan page at desktop and mobile widths, checking spacing, image orientation, captions, and section boundaries.
- Compare the updated page with the current live page to ensure the visual system is preserved.
