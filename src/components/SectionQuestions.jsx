import { useRef, useState } from "react";
import { useIsOnScreen } from "../hooks/useIsOnScreen";

const SectionQuestions=()=>{
    const [activeText,setActiveText]=useState(false);
    const questionsRef=useRef();
    const onScreen=useIsOnScreen(questionsRef);
    return(
        <section id="questions" ref={questionsRef} className={onScreen.questionsIntersecting ? 'sectionQuestions sectionQuestions--active' : 'sectionQuestions'}>
            <div className="container">
                <div className="sectionQuestions__inner">
                    <h1 className="sectionQuestions__title"><span className="info__title-span">Frequently</span> Asked Questions</h1>
                    <p className="sectionQuestions__text">Still you have any questions? Contact our Team via support@yourbank.com</p>
                    <div className={activeText === true ? 'sectionQuestions__blocks sectionQuestions__blocks--active' : 'sectionQuestions__blocks'}>
                        <div className="sectionQuestions__blocks-inner">
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">How do I open an account with YourBank?</p>
                                <p className="blocks__item-desc">Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                            </div>
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">What documents do I need to provide to apply for a loan?</p>
                                <p className="blocks__item-desc">The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
                            </div>
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">How can I access my accounts online?</p>
                                <p className="blocks__item-desc">Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
                            </div>
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">Are my transactions and personal information secure?</p>
                                <p className="blocks__item-desc">At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
                            </div>
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">How do I open an account with YourBank?</p>
                                <p className="blocks__item-desc">Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                            </div>
                            <div className="sectionQuestions__blocks-item">
                                <p className="blocks__item-title">How do I open an account with YourBank?</p>
                                <p className="blocks__item-desc">Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                            </div>
                        </div>
                        <div className={activeText===false ? "sectionQuestion__blocks-gradientBlock--active" : "sectionQuestion__blocks-gradientBlock"}></div>
                    </div>
                    <button className="sectionQuestions__btn" onClick={()=>setActiveText((prev)=>!prev)}>
                        {activeText===true ? 
                            'Hide All FAQ’s'
                            : 
                            'Load All FAQ’s'
                        }
                    </button>
                </div>
            </div>
        </section>
    )
}
export default SectionQuestions;