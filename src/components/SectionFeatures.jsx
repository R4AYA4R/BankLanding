import { useState } from "react";
import TabBanking from "./TabBanking";
import TabFinance from "./TabFinance";
import TabCustomer from "./TabCustomer";

const SectionFeatures = () => {
    const [tab, setTab] = useState('banking');
    return (
        <section className="sectionFeatures">
            <div className="container">
                <div className="sectionFeatures__inner">
                    <h1 className="sectionFeatures__title">Our <span className="info__title-span">Features</span></h1>
                    <p className="sectionFeatures__text">Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                    <div className="sectionFeatures__blocks">
                        <div className="blocks__tabs">
                            <button className={tab === 'banking' ? "blocks__tabs-btn blocks__tabs-btn--active" : "blocks__tabs-btn"} onClick={() => setTab('banking')}>Online Banking</button>
                            <button className={tab === 'finance' ? "blocks__tabs-btn blocks__tabs-btn--active" : "blocks__tabs-btn"} onClick={() => setTab('finance')}>Financial Tools</button>
                            <button className={tab === 'customer' ? "blocks__tabs-btn blocks__tabs-btn--active" : "blocks__tabs-btn"} onClick={() => setTab('customer')}>Customer Support</button>
                        </div>
                        {tab === 'banking' &&
                            <TabBanking tab={tab}/>
                        }
                        {tab === 'finance' &&
                            <TabFinance tab={tab}/>
                        }
                        {tab === 'customer' &&
                            <TabCustomer tab={tab}/>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionFeatures;