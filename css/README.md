# CSS Structure

Clean, modular CSS organization for the Ocean Tracer documentation.

## File Organization

```
css/
├── base.css      → Core styles (typography, resets, colors)
├── layout.css    → Layout components (flex, containers, arrow base styles)
├── print.css     → Print-specific styles
├── arrows.css    → Documentation for arrow system
└── arrows.js     → JavaScript to generate arrows from data attributes
```

## Arrows

### Add arrows to a screenshot:
```html
<div class="flex-image" data-arrows='[
    {"top": "85px", "label": "Tally button", "side": "right"},
    {"top": "180px", "label": "Settings icon", "side": "right"},
    {"top": "320px", "label": "Menu", "side": "left"}
]'>
    <img src="images/guide/screenshot.png" alt="Screenshot" class="screenshot">
</div>
```

### Parameters:

- **top**: Position from top of image (use "85px" or "45%")
- **label**: Text to display next to arrow
- **side**: "right" or "left" (default: "right")

### Example:

```json
{"top": "120px", "label": "Login button", "side": "right"}
{"top": "45%", "label": "Search field", "side": "left"}
{"top": "300px", "label": "Submit", "side": "right"}
```

### To remove arrows:
Delete arrow objects from the JSON array or remove the entire `data-arrows` attribute.

### To add more arrows:
Just add more objects to the array
No CSS changes needed