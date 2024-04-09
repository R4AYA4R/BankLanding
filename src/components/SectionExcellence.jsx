import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionExcellence=()=>{
    const excellenceRef=useRef();
    const onScreen=useIsOnScreen(excellenceRef);
    return(
        <section id="excellence" ref={excellenceRef} className={onScreen.excellenceIntersecting ? 'sectionExcellence sectionExcellence--active' : 'sectionExcellence'}>
            <div className="container">
                <div className="sectionExcellence__inner">
                    <div className="sectionExcellence__secondInner">
                        <div className="sectionExcellence__info">
                            <p className="info__subtitle">Welcome to YourBank</p>
                            <h1 className="info__title">Where Banking Meets <span className="info__title-span">Excellence!</span></h1>
                            <p className="info__text">At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
                        </div>
                        <img src="BankLanding/images/sectionExcellence/Image.png" alt="" className="sectionExcellence__img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionExcellence;