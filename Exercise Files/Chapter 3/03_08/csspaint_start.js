if (typeof registerPaint !== 'undefined') {
    // define a class to implement the paint worklet
    class SampleCSSPaint {
        // TODO: declare the properties that the class has access to
        static get inputProperties() {
            return ['--cross-thickness', '--cross-color']
        }
        
        // TODO: fill out the paint function to do the drawing work
        paint(ctx, size, props) {
            let width = props.get('--cross-thickness');
            let color = props.get('--cross-color').toString();

            ctx.lineWidth = width;
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(size.width,size.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(size.width,0);
            ctx.lineTo(0,size.height);
            ctx.stroke();
        }
    }

    // TODO: register the paint worklet for CSS
    registerPaint("samplepainter", SampleCSSPaint);
}