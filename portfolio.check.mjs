import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const pages = ["index.html", "milan.html", "home.html", "event.html", "jeju.html", "venice.html"];

for (const page of pages) {
  if (!existsSync(join(root, page))) {
    throw new Error(`${page} is missing`);
  }
}

if (!existsSync(join(root, "styles.css"))) {
  throw new Error("styles.css is missing");
}

if (!existsSync(join(root, "motion.js"))) {
  throw new Error("motion.js is missing");
}

if (!existsSync(join(root, "detail-motion.js"))) {
  throw new Error("detail-motion.js is missing");
}

if (!existsSync(join(root, "city-left-behind-pixel-film.mov"))) {
  throw new Error("Ending pixel film is missing.");
}

if (!existsSync(join(root, "ending-film-poster.jpeg"))) {
  throw new Error("Ending pixel film poster is missing.");
}

if (!existsSync(join(root, "DSCF0700.JPG"))) {
  throw new Error("Pudong Airport ceiling image DSCF0700.JPG is missing.");
}

const index = readFileSync(join(root, "index.html"), "utf8");
const milan = readFileSync(join(root, "milan.html"), "utf8");
const home = readFileSync(join(root, "home.html"), "utf8");
const event = readFileSync(join(root, "event.html"), "utf8");
const jeju = readFileSync(join(root, "jeju.html"), "utf8");
const venice = readFileSync(join(root, "venice.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const motion = readFileSync(join(root, "motion.js"), "utf8");
const detailMotion = readFileSync(join(root, "detail-motion.js"), "utf8");
const allHtml = `${index}\n${milan}\n${home}\n${event}\n${jeju}\n${venice}`;

const homepageText = [
  "The City Left Behind",
  "opening-loader",
  "title-word",
  "A city becomes old when the new layer forgets it is a layer.",
  "Selected works /",
  "The city does not disappear",
  "Milan",
  "Home",
  "Event",
  "Korean Jeju Island",
  "Korean Jeju",
  "Venice",
  "milan.html",
  "home.html",
  "event.html",
  "jeju.html",
  "venice.html",
  "DSCF0962.JPG",
  "motion.js",
  "data-work-counter",
  "city-left-behind-pixel-film.mov",
  "ending-film-poster.jpeg",
  "The City Left Behind / final moving image",
  "ending-underlay",
  "06 / Pixel film",
  "Old city under new surface",
];

for (const text of homepageText) {
  if (!index.includes(text)) {
    throw new Error(`Homepage missing: ${text}`);
  }
}

const pageRequirements = [
  [
    milan,
    "Milan",
    "DSCF0177.JPG",
    "DSCF0214.JPG",
    "DSCF0641.JPG",
    "DSCF0611.JPG",
    "DSCF0608.JPG",
    "DSCF0587.JPG",
    "DSCF0583.JPG",
    "DSCF0575.JPG",
    "DSCF0557.JPG",
    "DSCF0505.JPG",
    "DSCF0470.JPG",
    "DSCF0495.JPG",
    "DSCF1667.JPG",
    "DSCF1685.JPG",
    "DSCF1693.JPG",
    "DSCF1729.JPG",
    "DSCF1741.JPG",
    "DSCF1743.jpg",
    "DSCF1745.JPG",
    "DSCF1746.JPG",
    "DSCF1753.JPG",
    "DSCF1778.jpg",
    "DSCF1802.JPG",
  ],
  [home, "Home", "DSCF1279.JPG", "DSCF1590.JPG", "DSCF1440.JPG", "DSCF0693.JPG", "DSCF0700.JPG"],
  [
    event,
    "Event",
    "DSCF0200.JPG",
    "DSCF0484.JPG",
    "DSCF0445.JPG",
    "DSCF1295.JPG",
    "DSCF1535.JPG",
    "DSCF1710.JPG",
    "DSCF1704.JPG",
    "DSCF1795.JPG",
  ],
  [
    jeju,
    "Korean Jeju Island",
    "DSCF0962.JPG",
    "DSCF0802.JPG",
    "DSCF0958.JPG",
    "DSCF0970.JPG",
    "DSCF0980.JPG",
    "DSCF1014.JPG",
    "DSCF1021.JPG",
    "DSCF0813.JPG",
  ],
  [venice, "Venice", "DSCF1313.JPG", "DSCF1346.JPG", "DSCF1448.JPG", "DSCF1435.JPG", "DSCF1536.JPG", "DSCF1558.JPG"],
];

const removedMilanImages = [
  "DSCF1749.JPG",
  "DSCF1760.JPG",
  "DSCF1611.JPG",
  "DSCF1742.jpg",
  "DSCF1740.JPG",
];

for (const image of removedMilanImages) {
  if (milan.includes(image)) {
    throw new Error(`Removed Milan photograph is still published: ${image}`);
  }
}

for (const [html, place, ...images] of pageRequirements) {
  if (!html.includes(place)) {
    throw new Error(`Detail page missing place name: ${place}`);
  }
  for (const image of images) {
    if (!html.includes(image)) {
      throw new Error(`${place} detail page missing image: ${image}`);
    }
  }
}

if (!allHtml.includes("Korean Jeju Island")) {
  throw new Error("Jeju should be named Korean Jeju Island.");
}

if (!allHtml.includes("detail-motion.js") || !allHtml.includes("gsap.min.js") || !allHtml.includes("ScrollTrigger.min.js")) {
  throw new Error("Detail pages should load GSAP and detail-motion.js.");
}

if (!home.includes("Pudong Airport ceiling")) {
  throw new Error("Home should include the Pudong Airport ceiling caption.");
}

if (milan.includes("DSCF0200.JPG")) {
  throw new Error("The Apple water image DSCF0200.JPG should live in Event, not Milan.");
}

if (venice.includes("DSCF1279.JPG")) {
  throw new Error("The chair image DSCF1279.JPG should live in Home, not Venice.");
}

if (home.includes("DSCF0962.JPG")) {
  throw new Error("The red bench image DSCF0962.JPG should live in Korean Jeju Island, not Home.");
}

if (!/href="jeju\.html"[\s\S]*?src="assets\/DSCF1021\.JPG"/.test(index)) {
  throw new Error("Korean Jeju work card should use the coastal original image DSCF1021.JPG.");
}

if (!/href="venice\.html"[\s\S]*?src="assets\/DSCF1343\.JPG"/.test(index)) {
  throw new Error("Venice work card should use the boat original image DSCF1343.JPG.");
}

if (!/class="work-image-event"\s+src="assets\/DSCF1535\.JPG"/.test(index)) {
  throw new Error("Event work card should keep the Biennale gold-searching image.");
}

const imageRefs = [...allHtml.matchAll(/src="([^"]+\.(?:JPG|jpg))"/g)].map((match) => match[1]);
for (const image of imageRefs) {
  if (!existsSync(join(root, image))) {
    throw new Error(`Missing image file: ${image}`);
  }
}

const cssRequirements = [
  ".hero-stage",
  ".opening-loader",
  ".home-intro",
  ".intro-title",
  ".panel-card",
  ".dark-statement",
  ".works-section",
  ".work-counter",
  ".work-card",
  ".work-copy",
  ".reveal-up",
  ".location-card",
  ".detail-hero",
  ".photo-grid",
  ".photo-grid figure::after",
  "@media",
  "background:",
  "font-family:",
];

for (const item of cssRequirements) {
  if (!css.includes(item)) {
    throw new Error(`CSS missing: ${item}`);
  }
}

if (!/\.home-intro\s+\.poster-image\s+img\s*{[\s\S]*?filter:\s*grayscale\(1\)/s.test(css)) {
  throw new Error("Homepage cover should be the only black-and-white photograph.");
}

const detailPhotoRules = [
  ...css.matchAll(/\.photo-grid[^{]*\{[^}]*\}/g),
  ...css.matchAll(/\.detail-hero[^{]*\{[^}]*\}/g),
].map((match) => match[0]);

if (detailPhotoRules.some((rule) => rule.includes("grayscale("))) {
  throw new Error("Detail photographs should stay in color.");
}

if (
  /html\s*{[^}]*background:\s*var\(--black\)/s.test(css) ||
  /body\s*{[^}]*background:\s*var\(--black\)/s.test(css)
) {
  throw new Error("Outer page background should not be black.");
}

if (/--line:\s*#(?:000000|050505|111111|171717)\b/i.test(css)) {
  throw new Error("Divider lines should stay soft, not black.");
}

if (!/\.poster-image-large\s+img\s*{[\s\S]*?aspect-ratio:\s*21\s*\/\s*5/s.test(css)) {
  throw new Error("Desktop homepage hero image should match the fuller horizontal reference size.");
}

if (!/@media\s*\(max-width:\s*900px\)[\s\S]*?\.poster-image-large\s+img\s*{[\s\S]*?aspect-ratio:\s*21\s*\/\s*5/s.test(css)) {
  throw new Error("Mobile homepage hero image should stay horizontal.");
}

if (!/@media\s*\(max-width:\s*520px\)[\s\S]*?\.poster-image-large\s+img\s*{[\s\S]*?aspect-ratio:\s*21\s*\/\s*5/s.test(css)) {
  throw new Error("Small-phone homepage hero image should stay horizontal.");
}

if (!/class="intro-copy"/.test(index)) {
  throw new Error("Homepage should keep a bottom-left intro copy block.");
}

if (!/class="intro-meta"/.test(index)) {
  throw new Error("Homepage should keep a bottom-right metadata block for symmetry.");
}

if (!/\.poster-image\s*{[\s\S]*?width:\s*100%;/s.test(css) || !/\.poster-title\s*{[\s\S]*?width:\s*100%;/s.test(css)) {
  throw new Error("Homepage title should align to the slim cover width.");
}

if (!/\.site-shell\s*{[\s\S]*?width:\s*calc\(100%\s*-\s*clamp\(8px,\s*1vw,\s*18px\)\);[\s\S]*?padding:\s*0\s+0\s+/s.test(css)) {
  throw new Error("Homepage layout should be wide with only a small outer margin.");
}

if (/\.location-index\s*{[^}]*border:\s*1px\s+solid/s.test(css)) {
  throw new Error("Place index should use open horizontal rules, not a boxed border.");
}

if (!/\.location-name\s*{[\s\S]*?font-size:\s*clamp\(/s.test(css)) {
  throw new Error("Place names should be responsive and editorial, not oversized fixed text.");
}

if (!/\.photo-grid\s+img\s*{[\s\S]*?max-height:\s*min\(64vh,\s*620px\);[\s\S]*?object-fit:\s*contain;/s.test(css)) {
  throw new Error("Detail photographs should be constrained to the browser viewport.");
}

if (!/@media\s*\(min-width:\s*901px\)[\s\S]*?\.works-layout\s*{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*minmax\(164px,\s*0\.24fr\)\s+minmax\(0,\s*1fr\)/s.test(css)) {
  throw new Error("Works section should use a reference-style split layout.");
}

if (!/@media\s*\(min-width:\s*901px\)[\s\S]*?\.work-counter\s*{[\s\S]*?overflow:\s*hidden;[\s\S]*?border-right:\s*1px\s+solid[\s\S]*?font-size:\s*clamp\(78px,\s*12\.2vw,\s*222px\);[\s\S]*?font-weight:\s*500;/s.test(css)) {
  throw new Error("Works counter should be thinner and constrained inside the left rule.");
}

if (!/\.works-section\s+\.work-card\s+img\s*{[\s\S]*?aspect-ratio:\s*1\s*\/\s*1;[\s\S]*?object-fit:\s*cover;/s.test(css)) {
  throw new Error("Works representative images should use a unified square display area.");
}

if (!/\.works-section\s+\.work-image-event\s*{[\s\S]*?object-position:\s*center\s+64%;/s.test(css)) {
  throw new Error("Event work image should crop lower to show the central action.");
}

if (!/\.ending-stage\s*{[\s\S]*?background:\s*var\(--paper\);/s.test(css)) {
  throw new Error("Ending area should reveal the homepage paper background around the black card.");
}

if (!/\.ending-card,\s*\n\.ending-card-video\s*{[\s\S]*?width:\s*min\(calc\(100vw\s*-\s*clamp\(44px,\s*4vw,\s*92px\)\),\s*1760px\);/s.test(css)) {
  throw new Error("Ending video card should be narrower than the page with rounded black-card edges.");
}

if (!/\.ending-stage\.is-visible\s+\.ending-card,[\s\S]*?\.ending-stage:not\(\.is-visible\)\s+\.ending-card-video\s*{[\s\S]*?transform:\s*translateY\(var\(--ending-shift\)\)\s+scale\(var\(--ending-scale\)\);/s.test(css)) {
  throw new Error("Ending card should animate upward like a card transition.");
}

if (index.includes("ending-card-statement") || index.includes("Final layer")) {
  throw new Error("Ending should not include the extra final-layer statement card.");
}

if (!/\.ending-stack\s*{[\s\S]*?min-height:\s*172svh;/s.test(css)) {
  throw new Error("Ending section should have enough scroll room for stacked card switching.");
}

if (!/\.ending-card,\s*\n\.ending-card-video\s*{[\s\S]*?width:\s*min\(calc\(100vw\s*-\s*clamp\(44px,\s*4vw,\s*92px\)\),\s*1760px\);/s.test(css)) {
  throw new Error("Ending video card should be a narrow black card over the paper background.");
}

if (!/\.ending-video-card\s*{[\s\S]*?width:\s*min\(70vw,\s*980px\);/s.test(css)) {
  throw new Error("Ending video should sit inside a narrower centered card.");
}

if (!/\.ending-underlay\s*{[\s\S]*?position:\s*absolute;[\s\S]*?z-index:\s*1;[\s\S]*?transform:\s*translateY\(var\(--ending-label-y\)\);/s.test(css)) {
  throw new Error("Ending video labels should float beneath the outgoing Venice card.");
}

if (!/\.ending-underlay-secondary\s*{[\s\S]*?transform:\s*translateY\(calc\(var\(--ending-label-y\)\s*\+\s*24px\)\);/s.test(css)) {
  throw new Error("Secondary ending labels should rise as a lower layer.");
}

if (!/\.dark-statement\s*{[\s\S]*?display:\s*block;/s.test(css)) {
  throw new Error("Statement card should not inherit the old parent grid layout.");
}

if (!/\.statement-grid\s*{[\s\S]*?grid-template-areas:[\s\S]*?\"kicker title body\"[\s\S]*?\"rows rows rows\"/s.test(css)) {
  throw new Error("Statement title, body, and theme rows should have separate grid areas.");
}

if (
  !/\.dark-statement\s+\.statement-title\s*{[\s\S]*?grid-area:\s*title;[\s\S]*?min-width:\s*0;/s.test(css) ||
  !/\.dark-statement\s+\.statement-body\s*{[\s\S]*?grid-area:\s*body;[\s\S]*?min-width:\s*0;/s.test(css)
) {
  throw new Error("Statement title and body should stay in independent, non-overlapping grid areas.");
}

if (!/@media\s*\(max-width:\s*900px\)[\s\S]*?\.home-intro\s*{[\s\S]*?min-height:\s*auto;/s.test(css)) {
  throw new Error("Mobile homepage should not reserve a full-screen blank gap above the title.");
}

if (!/@media\s*\(max-width:\s*900px\)[\s\S]*?\.works-section\s+\.work-card\s*{[\s\S]*?grid-template-areas:[\s\S]*?\"copy\"[\s\S]*?\"photo\"/s.test(css)) {
  throw new Error("Mobile work cards should separate copy and photo into stable rows.");
}

if (!/@media\s*\(max-width:\s*900px\)[\s\S]*?\.works-section\s+\.work-copy\s*{[\s\S]*?grid-template-areas:[\s\S]*?\"num name\"[\s\S]*?\"\. note\"[\s\S]*?\"\. view\"/s.test(css)) {
  throw new Error("Mobile work copy should keep number, title, note, and view link in fixed areas.");
}

if (!/\.work-counter\s*{[\s\S]*?position:\s*sticky;/s.test(css)) {
  throw new Error("Works section should have a sticky changing number.");
}

if (!/\.work-counter\s*{[\s\S]*?align-items:\s*flex-start;/s.test(css)) {
  throw new Error("Works counter should sit near the upper-left area.");
}

if (!/\.dark-statement\s*{[\s\S]*?margin:\s*0;/s.test(css)) {
  throw new Error("Statement card should not use a negative margin that covers the homepage at rest.");
}

if (!/IntersectionObserver/.test(motion) || !/data-work-counter/.test(motion) || !/--hero-progress/.test(motion)) {
  throw new Error("Homepage motion should reveal sections and update the work counter.");
}

if (!/--ending-shift/.test(motion) || !/--ending-scale/.test(motion) || !/ending-stage/.test(motion)) {
  throw new Error("Ending video card should have scroll-driven card motion.");
}

if (!/--ending-label-y/.test(motion) || !/--ending-label-opacity/.test(motion) || !/labelProgress/.test(motion)) {
  throw new Error("Ending video labels should use scroll-driven floating motion.");
}

if (
  !/--works-exit-scale/.test(motion) ||
  !/--works-exit-radius/.test(motion) ||
  !/--works-exit-opacity/.test(motion) ||
  !/\.works-section\s*{[\s\S]*?border-bottom-left-radius:\s*var\(--works-exit-radius\);[\s\S]*?transform:\s*translateY\(var\(--works-exit-y\)\)\s+scale\(var\(--works-exit-scale\)\);/s.test(css)
) {
  throw new Error("Works/Venice panel should round, shrink, and lift before the ending card appears.");
}

if (!/\.works-section\s*{[\s\S]*?opacity:\s*var\(--works-exit-opacity\);/s.test(css)) {
  throw new Error("Works/Venice panel should fade slightly during the final card transition.");
}

if (!/gsap/.test(detailMotion) || !/ScrollTrigger/.test(detailMotion) || !/detail-ready/.test(detailMotion)) {
  throw new Error("Detail pages should have GSAP entry and scroll animation.");
}

if (!/\.detail-page\s+\.detail-hero\s*{[\s\S]*?min-height:\s*calc\(100svh\s*-\s*68px\)/s.test(css)) {
  throw new Error("Detail pages should use a full editorial hero close to the homepage layout.");
}

if (!/\.detail-page\s+\.photo-grid\s*{[\s\S]*?grid-template-columns:\s*repeat\(12,\s*minmax\(0,\s*1fr\)\)/s.test(css)) {
  throw new Error("Detail photo grids should use the refined editorial grid.");
}

if (!/is-opening/.test(motion) || !/openingLift/.test(css)) {
  throw new Error("Homepage should include an opening push-up animation.");
}

console.log("Portfolio multi-page checks passed.");
