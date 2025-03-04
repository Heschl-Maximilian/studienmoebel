import { useState, useEffect } from "react";
import "./styles.css";
import Model3D from "./Model3D";
import ImgTextElementRight from "./imgTextElementRight";
import ImgTextElementLeft from "./imgTextElementLeft";
import ImgText from "./imgText";
import AnimatedHeader from "./AnimatedHeader";
import ImgTextElementLinkPopup from "./imgTextElementLinkPopup";
//Mobile Components
import ImgElementLeftMobile from "./MobileElements/imgElementLeftMobile";
import ImgElementRightMobile from "./MobileElements/imgElementRightMobile";
import ImgElementRightMobileLink from "./MobileElements/imgElementRightMobileLink";
export default function OnePage() {
    const [showPopup, setShowPopup] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);  // State to track if it's desktop

    const txtKiefer = "Die Kiefer – Ein Baum voller Stärke und Anpassungsfähigkeit. Die Kiefer (Pinus) ist ein faszinierender Baum, der in vielen Teilen der Welt wächst und sich durch seine außergewöhnliche Anpassungsfähigkeit auszeichnet. Sie gehört zur Familie der Kieferngewächse (Pinaceae) und umfasst über 100 verschiedene Arten. Von den weiten Wäldern Skandinaviens über die sandigen Böden Mitteleuropas bis hin zu den Bergregionen Nordamerikas – die Kiefer ist eine der widerstandsfähigsten Baumarten überhaupt.\n \nAussehen und Wachstum \n Die Kiefer ist ein immergrüner Nadelbaum, der je nach Art eine Höhe von 2 bis über 50 Metern erreichen kann. Ihr Wuchs ist oft schlank und hochstrebend, kann aber auch knorrig und gedrungen sein, insbesondere in rauen Klimazonen oder an windgepeitschten Küsten. Ihre Nadeln sind lang, schmal und meist in Bündeln zu zweit, dritt oder fünft angeordnet. Sie können zwischen 3 und 25 Zentimeter lang werden und bleiben oft mehrere Jahre am Baum, bevor sie abfallen. Dadurch behalten Kiefern selbst im tiefsten Winter ihr grünes Kleid und trotzen den harten Bedingungen vieler Regionen."

    const handleImageClick = () => {
        setShowPopup(true); // Popup öffnen
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Popup schließen
    };

    // Check screen width to detect mobile/desktop
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Update state to true for desktop and false for mobile
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // Event listener for window resize

        return () => window.removeEventListener("resize", handleResize); // Clean up event listener
    }, []);

    return (
        <div className="container container-main">
            {/* Always render the Header */}
            <section className="gradient-header">
                <AnimatedHeader title="STUDIENMÖBEL" subtitle="STEINACHER JUDITH" />
            </section>

            {/* Always render the 3D Model */}
            <section>
                <div>
                    <Model3D />
                </div>
            </section>

            {/* Conditionally Render Components for Desktop or Mobile */}
            {isDesktop ? (
                <>
                        {/* Materialien 1 */}
                    <section className="description">
                        <div className="txt-img-container">
                            <ImgTextElementLinkPopup
                                textLeft="HARTWACHS ÖL"
                                imgSrcLeft="./pictures/oel.jpg"
                                imgSrcRight="./pictures/holzstruktur.jpg"
                                textRight="KIEFER"
                                textMiddleLeft="MATERIALIEN"
                                textMiddleRight="BETT GESTELL"
                                onRightImageClick={handleImageClick} // Click-Funktion übergeben
                            />
                        </div>
                    </section>
                    {/* Desktop Components */}
                    <section className="description">
                        <div className="txt-img-container">
                            <ImgTextElementLeft
                                textMiddleLeft="NATÜRLICHKEIT"
                                imgSrcLeft="./pictures/bett.jpg"
                                imgSrcRight="./pictures/gras.jpg"
                                textMiddleRight="GEMÜTLICHKEIT"
                            />
                        </div>
                    </section>

                    <section className="description">
                        <div className="txt-img-container">
                            <ImgTextElementRight
                                textMiddleLeft="STOFFBEZUG"
                                imgSrcLeft="./pictures/stoff.jpg"
                                imgSrcRight="./pictures/jute.jpg"
                                textMiddleRight="JUTE / BAUMWOLLE"
                            />
                        </div>
                    </section>

                    <section className="description">
                        <div className="txt-img-container">
                            <ImgTextElementLeft
                                textMiddleLeft="RAUMGESTALTUNG"
                                imgSrcLeft="./pictures/rendering_sessel.jpg"
                                imgSrcRight="./pictures/rendering_niesche.jpg"
                                textMiddleRight="VISUALISIERUNG"
                            />
                        </div>
                    </section>
                    <section className="description">
                        <div className="test"></div>
                    </section>
                </>
            ) : (
                <>
                    <section className="description">
                        <div className="txt-img-container">
                           <ImgElementRightMobileLink
                                textUp="MATERIALIEN"
                                imgSrcUp="./pictures/oel.jpg"
                                textDown="BETT GESTELL"
                                imgSrcDown="./pictures/holzstruktur.jpg"
                                onRightImageClick={handleImageClick} // Click-Funktion übergeben

                           />
                        </div>
                    </section>
                    <section className="description">
                        <div className="txt-img-container">
                        <ImgElementLeftMobile
                                textUp="NATÜRLICHKEIT"
                                imgSrcUp="./pictures/bett.jpg"
                                textDown="GEMÜTLICHKEIT"
                                imgSrcDown="./pictures/gras.jpg"
                           />
                        </div>
                    </section>
                    <section className="description">
                        <div className="txt-img-container">
                        <ImgElementRightMobile
                                textUp="STOFFBEZUG"
                                imgSrcUp="./pictures/stoff.jpg"
                                textDown="JUTE / BAUMWOLLE"
                                imgSrcDown="./pictures/jute.jpg"
                           />
                        </div>
                    </section>
                    <section className="description">
                        <div className="txt-img-container">
                        <ImgElementLeftMobile
                                textUp="RAUMGESTAlTUNG"
                                imgSrcUp="./pictures/rendering_sessel.jpg"
                                textDown="VISUALISIERUNG"
                                imgSrcDown="./pictures/rendering_sessel.jpg"
                           />
                        </div>
                    </section>
                </>
            )}

            {/* Popup */}
            {showPopup && (
                <div className="overlay" onClick={handleClosePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={handleClosePopup}>✖</button>
                        <ImgText description={txtKiefer} imgSrc="./pictures/kiefer.jpg" title="KIEFER" />
                    </div>
                </div>
            )}
            <section className="description">
                        <div className="test"></div>
                    </section>
        </div>
    );
}
