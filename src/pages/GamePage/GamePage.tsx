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

function GamePage() {
  ScrollToTop();
  const hero = {url: "./library_hero_2x.jpg", name: "Assassin's Creed Valhalla"}
  const logo = {url: "./logo_2x.png"}
  const cover = {url: "./library_2x.jpg"}
  const [heroActionsBg, setHeroActionsBg] = useState("")

  const { isMobile } = useResponsiveContext()

  interface HSL {
    h: number;
    s: number;
    l: number;
  }

  interface RGB {
    r: number;
    g: number;
    b: number;
  }

  interface HUE {
    h: number;
    u: number;
    e: number;
  }

  function rgbToHsl(rgb: RGB): HSL {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let h: number = 0;
    let s: number = 0;
    let l: number = (max + min) / 2;

    if (max !== min) {
        let d = max - min;

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {h: h * 360, s: s * 100, l: l * 100};
  }

  function hueToRgb(hue: HUE): number {
      let h = hue.h;
      let u = hue.u;
      let e = hue.e;

      if (e < 0) e += 1;
      if (e > 1) e -= 1;
      if (e < 1 / 6) return h + (u - h) * 6 * e;
      if (e < 1 / 2) return u;
      if (e < 2 / 3) return h + (u - h) * (2 / 3 - e) * 6;
      return h;
  }

  function hslToRgb(hsl: HSL): RGB {
    let h = hsl.h / 255;
    let s = hsl.s / 255;
    let l = hsl.l / 255;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // Achromatic
    } else {
        const hueU = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const hueH = 2 * l - hueU;
        r = hueToRgb({h: hueH, u: hueU, e: h + 1 / 3});
        g = hueToRgb({h: hueH, u: hueU, e: h});
        b = hueToRgb({h: hueH, u: hueU, e: h - 1 / 3});
    }

    return {
      r: Math.round(r * 255), 
      g: Math.round(g * 255), 
      b: Math.round(b * 255)
    };
  }

  const darkenRgb = (rgb: RGB, percent: number, maxLighter: number) => {
    let hsl = rgbToHsl(rgb);
    hsl.l = Math.max(0, hsl.l - percent); // Reduz a luminosidade
    hsl.l = Math.min(hsl.l, maxLighter)
    return hslToRgb(hsl);
  }

  const dominantColorHandle = (color: any) => {
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
    <GameCard name="God of War" cover="/similar_games/godofwar.png" key={0}></GameCard>,
    <GameCard name="Remnant: From the Ashes" cover="/similar_games/remnant.jpg" key={1}></GameCard>,
    <GameCard name="Dragon: Marked for Death" cover="/similar_games/dragonmarketfordeath.png" key={2}></GameCard>,
    <GameCard name="Borderlands 3" cover="/similar_games/borderlands3.png" key={3}></GameCard>,
    <GameCard name="Life is Feudal: Your Own" cover="/similar_games/lifeisfeudal.jpg" key={4}></GameCard>,
    <GameCard name="Pokemon Shield" cover="/similar_games/pokemonshield.png" key={5}></GameCard>,
    <GameCard name="Warhammer: Chaosbane" cover="/similar_games/warhammer-chaosbane.png" key={6}></GameCard>,
    <GameCard name="Battle Brothers" cover="/similar_games/battlebrothers.png" key={7}></GameCard>,
    <GameCard name="Savage Lands" cover="/similar_games/savagelands.png" key={8}></GameCard>,
    <GameCard name="Torchlight III" cover="/similar_games/torchilight3.jpg" key={9}></GameCard>,
    <GameCard name="Assassins Creed Odyssey" cover="/similar_games/assassinscreedodyssey.png" key={10}></GameCard>,
    <GameCard name="Children of Morta" cover="/similar_games/childrenofmorta.jpg" key={11}></GameCard>,
    <GameCard name="Shadows: Awakening" cover="/similar_games/shadowsawakening.png" key={12}></GameCard>,
    <GameCard name="GreedFall" cover="/similar_games/greedfall.png" key={13}></GameCard>,
    <GameCard name="Hytale" cover="/similar_games/hytale.png" key={14}></GameCard>,
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