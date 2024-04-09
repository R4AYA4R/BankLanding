import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionMission=()=>{
    const missionRef=useRef();
    const onScreen=useIsOnScreen(missionRef);
    return(
        <section id="mission" ref={missionRef} className={onScreen.missionIntersecting ? 'sectionMission sectionMission--active' : 'sectionMission'}>
            <div className="container">
                <div className="sectionMission__inner">
                    <h1 className="sectionMission__title">Mission & Vision</h1>
                    <p className="sectionMission__desc">We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
                    <div className="sectionMission__info">
                        <div className="info__topline">
                            <div className="info__bottomline-imgContainer">
                                <img src="BankLanding/images/sectionMission/Image.png" alt="" className="info__bottomline-img" />
                            </div>
                            <div className="info__topline-text">
                                <p className="info__topline-title">Mission</p>
                                <p className="info__topline-desc">At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                            </div>
                        </div>
                        <div className="info__bottomline">
                            <div className="info__bottomline-text">
                                <p className="info__topline-title">Vision</p>
                                <p className="info__topline-desc">Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                            </div>
                            <div className="info__bottomline-imgContainer">
                                <img src="BankLanding/images/sectionMission/Image (1).png" alt="" className="info__bottomline-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionMission;