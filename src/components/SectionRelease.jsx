import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionRelease=()=>{
    const releaseRef=useRef();
    const onScreen=useIsOnScreen(releaseRef);
    return(
        <div className="sectionRelease__wrapper">
            <section id="release" ref={releaseRef} className={onScreen.releaseIntersecting ? 'sectionRelease sectionRelease--active' : 'sectionRelease'}>
                <div className="container">
                    <div className="sectionRelease__inner">
                        <h1 className="sectionRelease__title">Press Releases</h1>
                        <p className="sectionRelease__desc">Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
                        <div className="sectionRelease__info">
                            <div className="sectionRelease__info-item">
                                <img src="BankLanding/images/sectionRelease/Image.jpg" alt="" className="sectionRelease__item-img" />
                                <p className="sectionRelease__item-title">YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</p>
                                <div className="sectionRelease__item-locGroup">
                                    <div className="sectionRelease__item-location">
                                        <p className="item__location-text">Location: India</p>
                                    </div>
                                    <div className="sectionRelease__item-date">
                                        <p className="item__date-text">Date: 06/11/2024</p>
                                    </div>
                                </div>
                                <p className="sectionRelease__item-desc">YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                            </div>
                            <div className="sectionRelease__info-item">
                                <img src="BankLanding/images/sectionRelease/Image (1).jpg" alt="" className="sectionRelease__item-img" />
                                <p className="sectionRelease__item-title">YourBank Expands Branch Network with Opening of New Location in Chennai</p>
                                <div className="sectionRelease__item-locGroup">
                                    <div className="sectionRelease__item-location">
                                        <p className="item__location-text">Location: India</p>
                                    </div>
                                    <div className="sectionRelease__item-date">
                                        <p className="item__date-text">Date: 12/11/2024</p>
                                    </div>
                                </div>
                                <p className="sectionRelease__item-desc">YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
                            </div>
                            <div className="sectionRelease__info-item">
                                <img src="BankLanding/images/sectionRelease/Image (2).jpg" alt="" className="sectionRelease__item-img" />
                                <p className="sectionRelease__item-title">YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</p>
                                <div className="sectionRelease__item-locGroup">
                                    <div className="sectionRelease__item-location">
                                        <p className="item__location-text">Location: India</p>
                                    </div>
                                    <div className="sectionRelease__item-date">
                                        <p className="item__date-text">Date: 24/12/2024</p>
                                    </div>
                                </div>
                                <p className="sectionRelease__item-desc">YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                            </div>
                            <div className="sectionRelease__info-item">
                                <img src="BankLanding/images/sectionRelease/Image (3).jpg" alt="" className="sectionRelease__item-img" />
                                <p className="sectionRelease__item-title">YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</p>
                                <div className="sectionRelease__item-locGroup">
                                    <div className="sectionRelease__item-location">
                                        <p className="item__location-text">Location: India</p>
                                    </div>
                                    <div className="sectionRelease__item-date">
                                        <p className="item__date-text">Date: 28/12/2024</p>
                                    </div>
                                </div>
                                <p className="sectionRelease__item-desc">YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
}
export default SectionRelease;