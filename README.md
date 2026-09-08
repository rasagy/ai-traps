# AI Traps for Designers

A single-page reference site built for a 1.5-day workshop on using Generative AI in data visualization design, aimed at B.Des and M.Des students.

## What it is
17 cognitive traps, biases, and failure modes that designers encounter when working with AI — grouped into 5 categories: Overtrust, Deskilling, Process Distortion, Output Risks, and Accountability. Each entry has a plain-language description of the phenomenon, a concrete "what to do" action, and 1–2 references to real academic papers or seminal articles.

## Current structure

- Header with title and subtitle
- Horizontal scrollable tab bar to filter by category (All + 5 categories), each with its own accent colour
- Responsive card grid (3 col → 2 col → 1 col), each card showing category pill, title, and description
- Click/tap on a card opens a modal with the full description, "what to do" block, and reference links
- Escape key and clicking outside closes the modal

## Visual design

- Noir/cyber aesthetic: near-black background (#08080f), scanline overlay
- Press Start 2P (pixel font) for all headings, labels, and UI chrome
- Space Mono for body text
- Five category accent colours:
  - Overtrust → #ff3b5c
  - Deskilling → #00e5c3
  - Process Distortion → #ffb020
  - Output Risks → #a67cff
  Accountability → #3ddc84
- Full 4-sided pixel-art card borders in the category accent colour, square corners (no border-radius), ASCII corner glyphs (┌── / ──┘) as pseudo-elements
- Modal: same pixel border style, darker inset background for the "what to do" block and reference cards, 2px visible borders on those sections

## Tech
Vanilla HTML/CSS/JS, no frameworks, no build step. Single self-contained .html file ready to host on GitHub Pages.

## The 5 categories and 17 traps

1. Overtrust (4): Competence Illusion, Automation Bias, The "Looks Right" Trap, Sycophantic Confirmation
1. Deskilling (4): Cognitive Offloading, Skill Atrophy, Creative Learned Helplessness, Encoding Illiteracy
1. Process Distortion (4): Satisficing, Prompt Fixation, Speed–Quality Confusion, Anchoring
1. Output Risks (3): Data Hallucination, Aesthetic Homogenisation, Context Collapse
1. Accountability (2): Attribution Erosion, The Black Box Excuse