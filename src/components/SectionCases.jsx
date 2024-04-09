import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionCases = () => {
    const casesRef = useRef();
    const onScreen = useIsOnScreen(casesRef);
    return (
        <section id="cases" ref={casesRef} className="sectionCases">
            <div className="container">
                <div className={onScreen.casesIntersecting ? 'sectionCases__inner sectionCases__inner--active' : 'sectionCases__inner'}>
                    <h1 className="sectionCases__title">Use Cases</h1>
                    <p className="sectionCases__desc">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                    <div className="sectionCases__IndividualsBlock">
                        <div className="IndividualsBlock__images individuals__after">
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container.png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Managing Personal Finances</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (1).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Saving for the Future</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (2).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Homeownership</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (3).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Education Funding</p>
                            </div>
                        </div>
                        <div className="IndividualsBlock__info">
                            <p className="IndividualsBlock__info-title">For Individuals</p>
                            <p className="IndividualsBlock__info-text">For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                            <div className="IndividualsBlock__info-percentsBlock">
                                <div className="percentsBlock__item percentsBlock__item1">
                                    <p className="percentsBlock__item-percents">78%</p>
                                    <p className="percentsBlock__item-text">Secure Retirement Planning</p>
                                </div>
                                <div className="percentsBlock__item percentsBlock__item2">
                                    <p className="percentsBlock__item-percents">63%</p>
                                    <p className="percentsBlock__item-text">Manageable Debt Consolidation</p>
                                </div>
                                <div className="percentsBlock__item percentsBlock__item3">
                                    <p className="percentsBlock__item-percents">91%</p>
                                    <p className="percentsBlock__item-text">Reducing financial burdens</p>
                                </div>
                            </div>
                            <a href="#" className="IndividualsBlock__info-link">Learn More</a>
                        </div>
                    </div>
                    <div className="sectionCases__IndividualsBlock sectionCases__BusinessBlockMargin">
                        <div className="IndividualsBlock__info">
                            <p className="IndividualsBlock__info-title">For Business</p>
                            <p className="IndividualsBlock__info-text"> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                            <div className="IndividualsBlock__info-percentsBlock">
                                <div className="percentsBlock__item percentsBlock__item1">
                                    <p className="percentsBlock__item-percents">65%</p>
                                    <p className="percentsBlock__item-text">Cash Flow Management</p>
                                </div>
                                <div className="percentsBlock__item percentsBlock__item2">
                                    <p className="percentsBlock__item-percents">70%</p>
                                    <p className="percentsBlock__item-text">Drive Business Expansion</p>
                                </div>
                                <div className="percentsBlock__item percentsBlock__item3">
                                    <p className="percentsBlock__item-percents">45%</p>
                                    <p className="percentsBlock__item-text">Streamline payroll processing</p>
                                </div>
                            </div>
                            <a href="#" className="IndividualsBlock__info-link">Learn More</a>
                        </div>
                        <div className="IndividualsBlock__images business__after">
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (4).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Startups and Entrepreneurs</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (5).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Cash Flow Management</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (6).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Business Expansion</p>
                            </div>
                            <div className="IndividualsBlock__images-item">
                                <img src="BankLanding/images/sectionCases/Icon Container (7).png" alt="" className="IndividualsBlock__images-img" />
                                <p className="IndividualsBlock__images-text">Payment Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionCases;