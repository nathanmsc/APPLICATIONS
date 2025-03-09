<template>
<div class="carousel">
<BBlockquoteFigure>
<BBlockquote>
    <Carousel
        control
        indicators
        >
        
        <CarouselInner>
        <CarouselItem>
        <CarouselItemImage
            src="https://usebootstrap.org/unsplash/image/cafe/claudio-poggio-xCK8kr0R0JE-unsplash.jpg"
        />
        <CarouselCaption>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
        <CarouselItemImage
            src="https://usebootstrap.org/unsplash/image/cafe/roman-bozhko-OXXsAafHDeo-unsplash.jpg"
        />
        <CarouselCaption>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </CarouselCaption>
        </CarouselItem>
        <CarouselItem>

        <CarouselItemImage
            src="https://usebootstrap.org/unsplash/image/cafe/janosch-lino-k6w8miMpfUI-unsplash.jpg"
        />
        <CarouselCaption>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </CarouselCaption>
        </CarouselItem>
        </CarouselInner>

    </Carousel>

</BBlockquote>
</BBlockquoteFigure>
</div>
</template>
<style>
.carousel{
    max-width: 68%;
}
</style>