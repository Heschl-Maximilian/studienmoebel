import { useState } from 'react';
import { motion } from "framer-motion";
import "./styles.css";  // This file now contains our full-screen, no-margin styles.
import Model3D from "./Model3D";
import ImgTextElementRight from "./imgTextElementRight";
import ImgTextElementLeft from "./imgTextElementLeft";
import AnimatedHeader from "./AnimatedHeader";

export default function OnePage() {
    const [isActive, setIsActive] = useState(false);

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
            
            {/* Übergang */}
            <div className={`gradient-transition ${isActive ? 'active' : ''}`} onClick={toggleGradientTransition}></div>

            {/* 3D-Modell */}
            <section className="model-placeholder">
                <div className="placeholder-box">
                    <Model3D />
                </div>
            </section>
ch
            {/* Bauanleitung */}
            <section className="description">
                <h2>Bauanleitung</h2>
                <p>Eine detaillierte Explosionszeichnung zeigt den Aufbau des Möbelstücks.</p>
                <img src="/pictures/explosionszeichnung.jpg" alt="Explosionszeichnung" />
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

            {/* Footer */}
            <footer className="footer">
                © 2025 Judith Steinacher - Designerin
            </footer>
        </div>
    );
}
