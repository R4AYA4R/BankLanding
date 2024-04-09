import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionProducts=()=>{
    const productsRef=useRef();
    const onScreen=useIsOnScreen(productsRef);
    return(
        <section id="products" ref={productsRef} className={onScreen.productsIntersecting ? 'sectionProducts sectionProducts--active' : 'sectionProducts'}>
            <div className="container">
                <div className="sectioProducts__inner">
                    <div className="sectionProducts__info">
                        <div className="sectionProducts__info-titles">
                            <h1 className="sectionProducts__info-title">Our <span className="info__title-span">Products</span></h1>
                            <p className="sectionProducts__text">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                        </div>
                        <div className="sectionProducts__btnInfo">
                            <div className="btnInfo__text1">For Individuals</div>
                            <div className="btnInfo__text2">For Businesses</div>
                        </div>
                    </div>
                    <div className="sectionProducts__blocks">
                        <div className="blocks__item blocks__item1">
                            <img src="BankLanding/images/sectionProducts/Icon Container.png" alt="" className="blocks__item-img" />
                            <p className="blocks__item-title">Checking Accounts</p>
                            <p className="blocks__item-desc">Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                        </div>
                        <div className="blocks__item blocks__item2">
                            <img src="BankLanding/images/sectionProducts/Icon Container (1).png" alt="" className="blocks__item-img" />
                            <p className="blocks__item-title">Savings Accounts</p>
                            <p className="blocks__item-desc">Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
                        </div>
                        <div className="blocks__item blocks__item3">
                            <img src="BankLanding/images/sectionProducts/Icon Container (2).png" alt="" className="blocks__item-img" />
                            <p className="blocks__item-title">Loans and Mortgages</p>
                            <p className="blocks__item-desc">Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionProducts;