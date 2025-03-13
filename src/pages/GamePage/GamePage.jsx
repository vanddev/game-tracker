import "./GamePage.css"
import GameHero from "../../components/GameHero/GameHero"
import GameHeroActions from "../../components/GameHeroActions/GameHeroActions"
import GameDetails from "../../components/GameDetails/GameDetails"
import SimilarGames from "../../components/SimilarGames/SimilarGames"
import { useCallback, useState } from "react"
import Color from "color"


const GamePage = () => {
  const hero = {url: "./hero-spider.jpg", name: "God of War"}
  const logo = {url: "./logo.png"}
  const [heroActionsBg, setHeroActionsBg] = useState([])

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


  return (
    <>
      <GameHero hero={hero} logo={logo} colorHandle={dominantColorHandle}></GameHero>
      <GameHeroActions bgColor={heroActionsBg}></GameHeroActions>
      <GameDetails></GameDetails>
      <SimilarGames></SimilarGames>
      <div className="footer"></div>
    </>
    
  )
}

export default GamePage