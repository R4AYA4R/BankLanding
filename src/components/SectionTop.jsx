import { useRef } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionTop=()=>{
    const topRef=useRef();
    const onScreen=useIsOnScreen(topRef);
    return(
        <section id="top" ref={topRef} className={onScreen.topIntersecting ? 'sectionTop sectionTop--active' : 'sectionTop'}>
            <div className="container">
                <div className="sectionTop__inner">
                    <div className="sectionTop__info">
                        <div className="info__subdiv">
                            <img src="/images/sectionTop/Icon.png" alt="" className="subdiv__img" />
                            <p className="subdiv__text">No LLC Required, No Credit Check.</p>
                        </div>
                        <h1 className="info__title">Welcome to YourBank Empowering Your <span className="info__title-span">Financial Journey</span></h1>
                        <p className="info__desc">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                        <a href="#" className="info__link">Open Account</a>
                    </div>
                    <div className="sectionTop__moneyBlock">
                        <div className="moneyBlock__transactions">
                            <p className="transactions__title">Your Transactions</p>
                            <img src="/images/sectionTop/Container.png" alt="" className="transactions__img" />
                        </div>
                        <div className="moneyBlock__exchange">
                            <p className="exchange__title">Money Exchange</p>
                            <div className="exchange__table">
                                <div className="table__IndianBlock">
                                    <div className="IndianBlock__titleImg">
                                        <img src="/images/sectionTop/Image.png" alt="" className="titleImg__img" />
                                        <p className="titleImg__text">INR</p>
                                    </div>
                                    <p className="IndianBlock__text">Indian Rupees</p>
                                </div>
                                <div className="table__USABlock">
                                    <div className="USABlock__titleImg">
                                        <img src="/images/sectionTop/Image (1).png" alt="" className="titleImg__img" />
                                        <p className="titleImg__text">USD</p>
                                    </div>
                                    <p className="USABlock__text">United States Dollar</p>
                                </div>
                                <div className="table__priceBlock priceBlock__border">
                                    <p className="priceBlock__text">5,0000</p>
                                </div>
                                <div className="table__priceBlock">
                                    <p className="priceBlock__text">12.00</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="moneyBlock__link">Exchange</a>
                        <div className="sectionTop__income">
                            <img src="/images/sectionTop/Icon Container.png" alt="" className="income__img" />
                            <div className="income__info">
                                <p className="income__info-price">+ $5000,00</p>
                                <p className="income__info-text">Monthly Income</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTop__currency">
                        <p className="currency__text">Supported Currency</p>
                        <div className="currency__images">
                            <img src="/images/sectionTop/Icon (1).png" alt="" className="currency__images-img" />
                            <img src="/images/sectionTop/Icon (2).png" alt="" className="currency__images-img" />
                            <img src="/images/sectionTop/Icon (3).png" alt="" className="currency__images-img" />
                            <img src="/images/sectionTop/Icon (4).png" alt="" className="currency__images-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionTop;