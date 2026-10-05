# PixelMetrics brand identity rethink

_Started 2026-09-28 13:58 UTC_

---

## User

PixelMetrics is a software development, web design and automation studio founded by operators who also build and run their own businesses. We build custom software, high-converting websites, automations and operational systems.
I want to completely rethink the PixelMetrics visual identity before designing the website.
The brand should feel like a genuinely exceptional independent design studio, not a SaaS template, AI startup, generic development agency or traditional corporate consultancy.
Central creative opportunity: explore the idea of the pixel as the fundamental building block of a digital system. I want one distinctive, ownable visual idea based on pixels that can become part of the logo, typography, layouts, interaction and motion system. It should feel sophisticated and contemporary rather than retro, 8-bit, gaming-inspired or gimmicky.
Think like a top-tier identity designer. Start with concept, not decoration.
Develop 3 genuinely different creative directions for PixelMetrics. For each, define:
1. The central visual idea and why it belongs specifically to PixelMetrics
2. Logo/wordmark concept
3. Proprietary pixel-based brand device
4. Typography system
5. Color system
6. Grid/layout philosophy
7. Motion/interaction behavior
8. How the system would translate into the website
9. A homepage hero concept
10. What makes the identity recognizable even when the PixelMetrics logo is absent
Avoid predictable agency aesthetics: floating UI cards, generic gradients, glowing AI effects, excessive blue, stock 3D objects, random geometric shapes, faux-terminal interfaces and generic Swiss-grid layouts.
The result should make a sophisticated founder think: “If they designed this, I want them designing my company.”

I've attached the current design. Preserve any useful messaging, but do not iterate visually on this. I want a fundamentally stronger creative concept.

## Assistant

_[tool: read_skill_prompt]_

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

I've built three identity directions, one page each, linked from the top bar. Each page covers your 10 points in order, with live demos and a full homepage hero using your existing messaging. Direction A is checked; B and C haven't been through the same check yet, apart from the B logo alignment fix below.

- **A: Resolution.** Squares split into four, but only where there's detail worth showing, like zooming in on the one step that's wasting time. The logo is a square split three times toward one vermilion corner. The hero's grid keeps splitting toward your cursor. Precise and systematic.
- **B: One Pixel On.** Only one lime square is ever lit on a screen, meaning "this is live". It fits "we build it, we run it." The logo is "pixelmetrics" in a serif with two i's; only the first one's dot is lit. In the hero the square is the headline's full stop and moves to whatever you hover. Dark and very restrained.
- **C: Channels.** Every screen pixel is made of three coloured parts. Here they stand for software, websites and automation: one team, three disciplines. The logo is three vertical bars. Each project gets a bar showing how much of each discipline went into it. Headlines are filled with fine clay, moss and slate stripes. Warm and systematic.

**Caveats:**
- The fonts are Google stand-ins; a final identity would use custom or licensed type.
- Image areas are empty for now. No photos have been added.

**Next step:** pick one direction, or combine parts (e.g. A's grid with B's single lit pixel), and I'll develop it into the full homepage.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: save_screenshot]_

Found it — `componentDidUpdate`'s prevState can be undefined in this runtime.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

I fixed both issues the check found, and Direction B is being re-checked now.

- **B (One Pixel On):** the console errors on load came from a bug in the code that moves the lit square in the hero. That's fixed, and a fresh check is running.
- **C (Channels):** in the section 07 demo, the three offset copies of "Launched" now sit 4px apart sideways and 3px vertically instead of 14px and 9px, so the word stays readable.

## User

Don't love the brand colors from A but in love with the cursor action. The logo looks a little too much like Windows. I like the logo and colors of B but our brand uses a few capital letters - PixelMetrics. Please don't use any em dashes in any of the copy.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: dc_write]_

_[tool: grep]_

_[tool: ready_for_verification]_

I've added Direction D, "Live Resolution". It combines A's cursor grid with B's logo and colours, and a final check is running on it now.

- **Logo:** B's serif wordmark, now written "PixelMetrics" with your capitals. The first i's dot is the lime square; the second is a normal dot.
- **Colours:** B's warm dark, bone and lime, plus three dark grey tones for the grid.
- **A's square logo is dropped.** The small-size symbol is now B's single lime square in a tile.
- **The cursor grid:** it's drawn in fine lines on the dark background, and the smallest square under your cursor lights up in lime. That square is the only lit pixel on screen. In the hero, the logo's dot goes dark so the grid holds the light.
- **Also carried over from A:** the recursive layout grid, the services strip that opens the cell you hover, and the effect where content sharpens in steps as it appears.

I removed every em dash from the copy on all four pages, and added D to the top navigation on each.

## User

Do you think the cursor should carry throughout the website? Maybe not so intense like as you move the mouse, the cursor blurs the pixels around the green one?

I like the logo/wordmark better. Something does feel off with the two i's the "dots" may need a second look - one needs to be moved up and the other down so they are in line...?

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

Now the template: ambient layer, wrapper, wordmark dots, and motion copy.

_[tool: run_script]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Yes, the cursor should carry through the whole site, but quietly. I've added that to Direction D, fixed the two i dots, and a final check is running.

**Site-wide cursor:**
- Anywhere on the page, a faint cluster of small squares now forms around your cursor. It blurs out with distance, and leaves a soft trail when you move.
- Only the one square under the cursor is lit green.
- The full-strength version stays in the hero only, so it still feels like a moment there.
- There's a Tweaks setting to turn it Off, Subtle or Strong, so you can compare. It starts on Subtle.

**The i dots:**
- Both i's now use drawn dots set to the same height and size as the typeface's own dot, so they line up exactly. I checked them side by side with a normal i.
- The square is drawn a touch smaller than the round dot so the two look the same size.
- The fix is in all three places the wordmark appears on the page.

## User

The cursor effect should be on the top layer of the design throughout

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The cursor effect in Direction D now sits on the top layer everywhere, including over the header, panels and images. It still doesn't block any clicks.

To keep the one-lit-pixel rule, the site-wide effect switches off while your cursor is over the hero or demo grids, since those already light their own square.

## User

Save this design as a PDF: `Direction D - Live Resolution.dc.html`

## Assistant

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_pdf_export_dialog]_

The export dialog is open, but nothing has printed yet. Click "Print or save as PDF" in it, and choose your page size there.

The PDF comes from a separate print copy, so your original page is unchanged. The copy keeps the dark background, fonts and grid images, and drops the sticky header and the cursor effect.

The two moving grids appear as a single frame, the one on screen when you click. Long sections may split across pages; I kept images and headlines from being cut in half.

