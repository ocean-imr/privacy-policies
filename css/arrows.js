/**
 * Arrow Annotation System
 * Automatically generates arrow callouts for screenshots based on data attributes
 * 
 * Usage in HTML:
 * <div class="flex-image" data-arrows='[
 *     {"top": "85px", "label": "Button name", "side": "right"},
 *     {"top": "50%", "label": "Another element", "side": "right"}
 * ]'>
 *     <img src="..." alt="..." class="screenshot">
 * </div>
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-arrows attribute
    const elementsWithArrows = document.querySelectorAll('[data-arrows]');
    
    elementsWithArrows.forEach(element => {
        try {
            // Parse the arrow configuration
            const arrows = JSON.parse(element.getAttribute('data-arrows'));
            
            // Create arrow container
            const container = document.createElement('div');
            container.className = 'arrow-container';
            
            // Add arrows based on configuration
            arrows.forEach(arrow => {
                const arrowItem = document.createElement('div');
                arrowItem.className = `arrow-item arrow-${arrow.side || 'right'}`;
                
                // Set positioning based on side
                if (arrow.side === 'top') {
                    // For top arrows, use 'left' property to position horizontally
                    if (arrow.left) {
                        arrowItem.style.left = arrow.left;
                    } else {
                        // Default to center
                        arrowItem.style.left = '50%';
                        arrowItem.style.transform = 'translateX(-50%)';
                    }
                } else {
                    // For side arrows, use 'top' property
                    arrowItem.style.top = arrow.top;
                }
                
                const label = document.createElement('span');
                label.className = 'arrow-label';
                label.textContent = arrow.label;
                
                const icon = document.createElement('span');
                icon.className = 'arrow-icon';
                
                // Set arrow direction based on side
                if (arrow.side === 'left') {
                    icon.textContent = '⟶';
                    arrowItem.appendChild(label);
                    arrowItem.appendChild(icon);
                } else if (arrow.side === 'top') {
                    icon.textContent = '↓';
                    arrowItem.appendChild(label);
                    arrowItem.appendChild(icon);
                } else {
                    icon.textContent = '⟵';
                    arrowItem.appendChild(icon);
                    arrowItem.appendChild(label);
                }
                
                container.appendChild(arrowItem);
            });
            
            // Add container to the element
            element.appendChild(container);
        } catch (error) {
            console.error('Error parsing arrows for element:', element, error);
        }
    });
});
