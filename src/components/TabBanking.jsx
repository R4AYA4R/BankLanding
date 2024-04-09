const TabBanking = ({tab}) => {
    return (
        <div className={tab === 'banking' ? "blocks__info blocks__info--active" : "blocks__info"}>
            <div className="blocks__info-item">
                <div className="info__item-blockImg">
                    <p className="info__item-title">24/7 Account Access</p>
                    <a href="#" className="info__item-link">
                        <img src="BankLanding/images/sectionFeatures/Icon.png" alt="" className="info__item-img" />
                    </a>
                </div>
                <p className="info__item-desc">Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
            </div>
            <div className="blocks__info-item">
                <div className="info__item-blockImg">
                    <p className="info__item-title">Mobile Banking App</p>
                    <a href="#" className="info__item-link">
                        <img src="BankLanding/images/sectionFeatures/Icon.png" alt="" className="info__item-img" />
                    </a>
                </div>
                <p className="info__item-desc">Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
            </div>
            <div className="blocks__info-item">
                <div className="info__item-blockImg">
                    <p className="info__item-title">Secure Transactions</p>
                    <a href="#" className="info__item-link">
                        <img src="BankLanding/images/sectionFeatures/Icon.png" alt="" className="info__item-img" />
                    </a>
                </div>
                <p className="info__item-desc">Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
            </div>
            <div className="blocks__info-item">
                <div className="info__item-blockImg">
                    <p className="info__item-title">Bill Pay and Transfers</p>
                    <a href="#" className="info__item-link">
                        <img src="BankLanding/images/sectionFeatures/Icon.png" alt="" className="info__item-img" />
                    </a>
                </div>
                <p className="info__item-desc">Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
            </div>
        </div>
    )
}
export default TabBanking;