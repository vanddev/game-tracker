import GameCard from '../GameCard/GameCard'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import "./SimilarGames.css"

const SimilarGames = () => {
    const responsive = {
        fullHD: {
            // the naming can be any, depends on you.
            breakpoint: { min: 1408, max: 9999 },
            items: 6,
            slidesToSlide: 6
        },
        widescreen: {
            breakpoint: { max: 1407, min: 1216 },
            items: 3,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1215, min: 1024 },
            items: 2,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1023, min: 769 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className="similar_games">
            <h6 style={{paddingLeft: "20px"}}>Similar Games</h6>
            <Carousel 
                responsive={responsive}
                showDots={false}
                infinite={false}
                ssr={false}
                autoPlay={false}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
            >
                <GameCard name="God of War" image="./similar_games/godofwar.png"></GameCard>
                <GameCard name="Remnant: From the Ashes" image="./similar_games/remnant.jpg"></GameCard>
                <GameCard name="Dragon: Marked for Death" image="./similar_games/dragonmarketfordeath.png"></GameCard>
                <GameCard name="Borderlands 3" image="./similar_games/borderlands3.png"></GameCard>
                <GameCard name="Life is Feudal: Your Own" image="./similar_games/lifeisfeudal.jpg"></GameCard>
                <GameCard name="Pokemon Shield" image="./similar_games/pokemonshield.png"></GameCard>
                <GameCard name="Warhammer: Chaosbane" image="./similar_games/warhammer-chaosbane.png"></GameCard>
                <GameCard name="Battle Brothers" image="./similar_games/battlebrothers.png"></GameCard>
                <GameCard name="Savage Lands" image="./similar_games/savagelands.png"></GameCard>
                <GameCard name="Torchlight III" image="./similar_games/torchilight3.jpg"></GameCard>
                <GameCard name="Assassins Creed Odyssey" image="./similar_games/assassinscreedodyssey.png"></GameCard>
                <GameCard name="Children of Morta" image="./similar_games/childrenofmorta.jpg"></GameCard>
                <GameCard name="Shadows: Awakening" image="./similar_games/shadowsawakening.png"></GameCard>
                <GameCard name="GreedFall" image="./similar_games/greedfall.png"></GameCard>
                <GameCard name="Hytale" image="./similar_games/hytale.png"></GameCard>
            </Carousel>
        </section>
    )
}

export default SimilarGames