import { useState } from 'react';
import { motion } from "framer-motion";
import "./styles.css";  // This file now contains our full-screen, no-margin styles.
import Model3D from "./Model3D";
import ImgTextElementRight from "./imgTextElementRight";
import ImgTextElementLeft from "./imgTextElementLeft";
import ImgText from "./imgText"
import AnimatedHeader from "./AnimatedHeader";
export default function OnePage() {
    const [isActive, setIsActive] = useState(false);
    const txtKiefer = "Die Kiefer – Ein Baum voller Stärke und Anpassungsfähigkeit. Die Kiefer (Pinus) ist ein faszinierender Baum, der in vielen Teilen der Welt wächst und sich durch seine außergewöhnliche Anpassungsfähigkeit auszeichnet. Sie gehört zur Familie der Kieferngewächse (Pinaceae) und umfasst über 100 verschiedene Arten. Von den weiten Wäldern Skandinaviens über die sandigen Böden Mitteleuropas bis hin zu den Bergregionen Nordamerikas – die Kiefer ist eine der widerstandsfähigsten Baumarten überhaupt.\n \nAussehen und Wachstum \n Die Kiefer ist ein immergrüner Nadelbaum, der je nach Art eine Höhe von 2 bis über 50 Metern erreichen kann. Ihr Wuchs ist oft schlank und hochstrebend, kann aber auch knorrig und gedrungen sein, insbesondere in rauen Klimazonen oder an windgepeitschten Küsten. Ihre Nadeln sind lang, schmal und meist in Bündeln zu zweit, dritt oder fünft angeordnet. Sie können zwischen 3 und 25 Zentimeter lang werden und bleiben oft mehrere Jahre am Baum, bevor sie abfallen. Dadurch behalten Kiefern selbst im tiefsten Winter ihr grünes Kleid und trotzen den harten Bedingungen vieler Regionen."
    const toggleGradientTransition = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="container container-main">
            {/* Animated Title with Background */}
            <section className="gradient-header">
                <AnimatedHeader
                    title="STUDIENMÖBEL"
                    subtitle="STEINACHER JUDITH"
                />
            </section>
            
           
            {/* 3D-Modell */}
            <section className="model-placeholder">
                <div className="placeholder-box">
                    <Model3D />
                </div>
            </section>

            {/* Bauanleitung */}
            <section className="description">
                <h2>Bauanleitung</h2>
                <p>Eine detaillierte Explosionszeichnung zeigt den Aufbau des Möbelstücks.</p>
                <img src="/pictures/explosionszeichnung.jpg" alt="Explosionszeichnung" />
            </section>
            {/* Kiefer  */}
            <section className="description">
                <div className="txt-img-container">
                    <ImgText description={txtKiefer} imgSrc="./pictures/kiefer.jpg" title="Kiefer"/>
                </div>
            </section>
             {/* Materialien 1 */}
            <section className="description">
                <div className="txt-img-container">
                    <ImgTextElementRight textLeft="Hartwachs Öl" imgSrcLeft="./pictures/oel.jpg" imgSrcRight={"./pictures/holzstruktur.jpg"}  textRight="Kiefer" textMiddleLeft="Materialien" textMiddleRight="Bettgestell"/>
                </div>
            </section>
            {/* Raumgestaltung */}
            <section className="description">
                <div className="txt-img-container">
                    <ImgTextElementLeft textLeft="Natürlichkeit" imgSrcLeft="./pictures/bett.jpg" imgSrcRight={"./pictures/gras.jpg"}  textRight="Natürlichkeit"/>
                </div>
            </section>
            {/* Materialien */}
         <section className="description">
                <div className="txt-img-container">
                    <ImgTextElementLeft textLeft="Stoffbezug" imgSrcLeft="./pictures/stoff.jpg" imgSrcRight={"./pictures/jute.jpg"}  textRight="Jute / Baumwolle"/>
                </div>
            </section>
            {/* Raumgestaltung */}
            <section className="description">
                <div className="txt-img-container">
                    <ImgTextElementLeft textLeft="Raumgestaltung" imgSrcLeft="./pictures/rendering_sessel.jpg" imgSrcRight={"./pictures/rendering_niesche.jpg"}  textRight="Visualisierung"/>
                </div>
            </section>        
        </div>
    );
}
