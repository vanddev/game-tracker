import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import "./ResponsiveCarousel.css"
import { CircleArrowRight, CircleArrowLeft  } from 'lucide-react';

function ButtonGroup({ next, previous, goToSlide, ...rest }: any) {
    const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;

    // Calculate if at the end
    const isEnd = currentSlide >= totalItems - slidesToShow;

    const noCarousel = totalItems <= slidesToShow;

    if (noCarousel) {
        return null; // Don't render buttons if all items fit in view
    }

    return (
        <div className="carousel-button-group">
            <button disabled={currentSlide === 0} onClick={() => previous()}>
                <CircleArrowLeft size={24} />
            </button>
            <button disabled={isEnd} onClick={() => next()}>
                <CircleArrowRight size={24} />
            </button>
        </div>
    );
}

interface ResponsiveCarouselProps {
    children: React.ReactNode;
}

function ResponsiveCarousel( props: ResponsiveCarouselProps ) {
    const responsive = {
        fullHD: {
            breakpoint: { min: 1408, max: 9999 },
            items: 6,
            slidesToSlide: 6
        },
        widescreen: {
            breakpoint: { max: 1407, min: 1216 },
            items: 6,
            slidesToSlide: 6
        },
        desktop: {
            breakpoint: { max: 1215, min: 1024 },
            items: 5,
            slidesToSlide: 5
        },
        tablet: {
            breakpoint: { max: 1023, min: 769 },
            items: 4,
            slidesToSlide: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2,
            slidesToSlide: 2
        }
    };

    return (
        <div className="responsive-carousel">
            <Carousel 
                responsive={responsive}
                showDots={false}
                infinite={false}
                ssr={false}
                autoPlay={false}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
                customTransition='transform 1600ms ease'
                transitionDuration={1600}
            >
                { props.children }
            </Carousel>
        </div>
    )
}

export default ResponsiveCarousel