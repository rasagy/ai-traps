# AI Traps for Designers

A single-page reference site, originally built by Rasagy as a companion to a 1.5-day workshop on using Generative AI in data visualization design for B.Des and M.Des students.

## What it is
16 cognitive traps, biases, and failure modes that designers encounter when working with AI, grouped into 5 layers: Output Risks, Process Distortion, Overtrust, Deskilling, and Accountability. Each entry names the trap, describes what it does, gives a concrete "what to do" action, and links to 1–2 academic papers or seminal articles.

## Current structure

- Sticky site header with five numbered category links (01–05) that anchor-jump to each section
- Five category sections, each with a full-width header and a card grid
- Cards show a category code (e.g. OR-01), an SVG pictogram, a title, and a one-line description; clicking links to the trap's detail panel
- Detail panels open as a full-height overlay (hash-driven, with a backdrop), showing: a hazard description, a "control measures" block, and reference links; a close button returns to the category section
- Prev/next links in each detail panel navigate all 16 traps in sequence
- Copy-link button in each detail panel copies a direct URL to that trap

## Visual design

- Inspired by hazard posters and FUI (Fictional User Interface) design: dark editorial aesthetic, near-black background, large condensed display type
- Big Shoulders Display for headings, labels, and UI chrome
- JetBrains Mono for body text
- Five category accent colours, shown as swatches in the header nav:
  - Output Risks → #a67cff
  - Process Distortion → #ffb020
  - Overtrust → #ff3b5c
  - Deskilling → #00e5c3
  - Accountability → #3ddc84
- Each category section header shows a filled warning triangle and a large category number
- Detail panels have a thin accent bar at the top in the category colour, with three labelled sections (01 / Hazard Identification, 02 / Control Measures, 03 / References) and reference rows with a paper type badge, title, and a diagonal arrow link indicator

## Tech
Vanilla HTML/CSS/JS, no frameworks, no build step. Single self-contained HTML file plus a small `js/enhance.js`, ready to host on GitHub Pages.

## The 5 categories and 16 traps

1. Output Risks (3): Aesthetic Homogenisation, Context Collapse, Data Hallucination
1. Process Distortion (4): Anchoring, Satisficing, Prompt Fixation, Speed–Quality Confusion
1. Overtrust (4): Competence Illusion, Automation Bias, The "Looks Right" Trap, Sycophantic Confirmation
1. Deskilling (3): Cognitive Offloading, Skill Atrophy, Creative Learned Helplessness
1. Accountability (2): The Black Box Excuse, Attribution Erosion

## How AI was used in this project

- Brainstorming trap terms beyond the initial list, and categorising them
- Evaluating collated research & surfacing more relevant references
- Designing the main site icon (Gemini) and individual trap pictograms (Claude)
- Building the responsive website and talk slides