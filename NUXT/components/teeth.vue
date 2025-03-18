<template>
    <Grid>
        <GridCol>
            <!-- Add the 'trapeze' class to the div here -->
            <div 
                class="trapeze" 
                @click="changeBorderColor" 
                ref="trapezeElement"
            ></div>
        </GridCol>
    </Grid>
</template>

<script>
export default {
    data() {
        return {
            // Create an object that stores the border colors, padding color, and whether the feature is enabled
            styles: {
                top: { color: 'blue', enabled: false },
                right: { color: 'red', enabled: false },
                bottom: { color: 'blue', enabled: false },
                left: { color: 'red', enabled: false },
                padding: { color: 'white', enabled: false } // Padding color object
            },
            isColorChangeEnabled: false
        };
    },
    methods: {
        // Change the color of the clicked border or padding
        changeBorderColor(event) {
            const trapezeElement = this.$refs.trapezeElement;
            const boundingRect = trapezeElement.getBoundingClientRect();
            const clickX = event.clientX;
            const clickY = event.clientY;

            // Determine which side of the border or padding was clicked
            const borderWidth = 15; // Border width (from your CSS)

            // Check if the click is on the top border
            if (clickY <= boundingRect.top + borderWidth) {
                this.toggleBorderColor('top');
            }
            // Check if the click is on the bottom border
            else if (clickY >= boundingRect.bottom - borderWidth) {
                this.toggleBorderColor('bottom');
            }
            // Check if the click is on the left border
            else if (clickX <= boundingRect.left + borderWidth) {
                this.toggleBorderColor('left');
            }
            // Check if the click is on the right border
            else if (clickX >= boundingRect.right - borderWidth) {
                this.toggleBorderColor('right');
            }
            // If the click is inside the padding area, toggle the padding color
            else {
                this.togglePaddingColor();
            }
        },
        // Toggle the color change of the border
        toggleBorderColor(border) {
            this.styles[border].enabled = !this.styles[border].enabled;
            // Update the color of the clicked border
            if (this.styles[border].enabled) {
                this.styles[border].color = 'rgb(19, 201, 65)'; // Change to green
            } else {
                // Reset to initial color
                this.styles[border].color = border === 'top' || border === 'bottom' ? 'blue' : 'red';
            }
            this.updateStyles();
        },
        // Toggle the padding color change
        togglePaddingColor() {
            this.styles.padding.enabled = !this.styles.padding.enabled;
            // Update the padding color
            if (this.styles.padding.enabled) {
                this.styles.padding.color = 'rgba(19, 201, 65, 0.2)'; // Light green for padding
            } else {
                // Reset padding to initial color
                this.styles.padding.color = 'white'; // Default padding color
            }
            this.updateStyles();
        },
        // Update the border and padding styles based on the object properties
        updateStyles() {
            const trapezeElement = this.$refs.trapezeElement;

            // Update the borders
            trapezeElement.style.borderTopColor = this.styles.top.color;
            trapezeElement.style.borderRightColor = this.styles.right.color;
            trapezeElement.style.borderBottomColor = this.styles.bottom.color;
            trapezeElement.style.borderLeftColor = this.styles.left.color;

            // Update the padding color by changing the background color of the element
            trapezeElement.style.backgroundColor = this.styles.padding.color;
        }
    },
    mounted() {
        this.updateStyles(); // Set the initial styles
    }
};
</script>

<style>
.trapeze {

    width: 100px;
    height: 100px;
    border: 15px solid blue;
    padding: 10px;
    cursor: pointer; /* Make it clear that the element is clickable */
    position: relative;
    transition: all 0.3s ease; /* Smooth transition for color change */
}

.trapeze{
    box-shadow: 0 0 10px gray;

}
.trapeze.padding-left{
    padding: 50px;
}
</style>
