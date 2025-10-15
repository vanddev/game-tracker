import "./GamePage.css"
import GameHero from "../../components/GameHero/GameHero"
import GameHeroActions from "../../components/GameHeroActions/GameHeroActions"
import GameDetails from "../../components/GameDetails/GameDetails"
import ResponsiveCaroulsel from "../../components/ResponsiveCarousel/ResponsiveCarousel"
import Section from "../../components/ui/Section/Section"
import PageTitle from "../../components/PageTitle/PageTitle"
import { useState } from "react"
import Color from "color"
import { useResponsiveContext } from '../../context/ResponsiveContext'
import ScrollToTop from '../../components/ScrollToTop';
import GameCard from "../../components/GameCard/GameCard"



const GamePage = () => {
  ScrollToTop();
  const hero = {url: "./library_hero_2x.jpg", name: "Assassin's Creed Valhalla"}
  const logo = {url: "./logo_2x.png"}
  const cover = {url: "./library_2x.jpg"}
  const [heroActionsBg, setHeroActionsBg] = useState([])

  const { isMobile } = useResponsiveContext()

  const rgbToHsl = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  }

  const hslToRgb = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // Achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  const darkenRgb = (r, g, b, percent, maxLighter) => {
    let [h, s, l] = rgbToHsl(r, g, b);
    l = Math.max(0, l - percent); // Reduz a luminosidade
    l = Math.min(l, maxLighter)
    return hslToRgb(h, s, l);
  }

  const dominantColorHandle = (color) => {
    const backgroundColor = color
      ? new Color(color).darken(0.7).toString()
      : "";
    setHeroActionsBg(backgroundColor)
  }

  const htlb = {
    "main_story": "65 Hours", 
    "main_plus_sides": "82 Hours", 
    "completionist": "102 Hours", 
    "all_styles": "84 Hours"
  }

  const similarGames = [
    <GameCard name="God of War" image="/similar_games/godofwar.png" key={0}></GameCard>,
    <GameCard name="Remnant: From the Ashes" image="/similar_games/remnant.jpg" key={1}></GameCard>,
    <GameCard name="Dragon: Marked for Death" image="/similar_games/dragonmarketfordeath.png" key={2}></GameCard>,
    <GameCard name="Borderlands 3" image="/similar_games/borderlands3.png" key={3}></GameCard>,
    <GameCard name="Life is Feudal: Your Own" image="/similar_games/lifeisfeudal.jpg" key={4}></GameCard>,
    <GameCard name="Pokemon Shield" image="/similar_games/pokemonshield.png" key={5}></GameCard>,
    <GameCard name="Warhammer: Chaosbane" image="/similar_games/warhammer-chaosbane.png" key={6}></GameCard>,
    <GameCard name="Battle Brothers" image="/similar_games/battlebrothers.png" key={7}></GameCard>,
    <GameCard name="Savage Lands" image="/similar_games/savagelands.png" key={8}></GameCard>,
    <GameCard name="Torchlight III" image="/similar_games/torchilight3.jpg" key={9}></GameCard>,
    <GameCard name="Assassins Creed Odyssey" image="/similar_games/assassinscreedodyssey.png" key={10}></GameCard>,
    <GameCard name="Children of Morta" image="/similar_games/childrenofmorta.jpg" key={11}></GameCard>,
    <GameCard name="Shadows: Awakening" image="/similar_games/shadowsawakening.png" key={12}></GameCard>,
    <GameCard name="GreedFall" image="/similar_games/greedfall.png" key={13}></GameCard>,
    <GameCard name="Hytale" image="/similar_games/hytale.png" key={14}></GameCard>,
  ]


  return (
    <>
      <PageTitle title={ hero.name } />
      <div className="overflow-container">
        <GameHero game_name={hero.name}
                  background_image={hero.url}
                  foreground_image={ isMobile ? cover.url : logo.url }
                  content_style={ isMobile ? "cover" : "logo" }
                  colorHandle={dominantColorHandle}
                  hltb={isMobile ? null : htlb}>
        </GameHero>
        <GameHeroActions bgColor={heroActionsBg} isFloating={isMobile}></GameHeroActions>
      </div>
      <GameDetails></GameDetails>
      <Section title="You may also like" removeBackground>
        <ResponsiveCaroulsel>
          { similarGames }
        </ResponsiveCaroulsel>
      </Section>
    </>
    
  )
}

export default GamePage