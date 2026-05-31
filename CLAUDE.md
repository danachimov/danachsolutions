@AGENTS.md

# Design fidelity — do NOT redesign

This site is a deliberate, faithful pixel-for-pixel port of an earlier static
site. The visual design, copy, layout, and CSS class names must be preserved
exactly. When editing existing pages, match the surrounding styles — do not
restyle, modernize, or "improve" the look.

**Do not invoke the `frontend-design` skill on this project.** It is disabled for
the model via `.claude/settings.json` (`skillOverrides`), but treat this as a hard
rule regardless: that skill generates new, opinionated aesthetics, which is the
opposite of what this port needs. If genuinely new UI is ever wanted (a brand-new
page or component), the user will invoke `/frontend-design` explicitly.
