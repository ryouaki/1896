import React from 'react';

class HeaderBar extends React.Component {
    render() {
        return(
            <div className="header-root-div">
                <div className="header-container container">
                    <div className="header-logo-text header-left-font-size">
                        Hi1896 - The best Outdoor WebSite!!!
                    </div>
                    <div className="header-logo-right-div">
                        <div className="header-logo-text header-right-font-size header-right-logo-text">
                            Contact Me
                        </div>
                        <img 
                            className="header-avatar-img" 
                            src="https://avatars0.githubusercontent.com/u/9922563?v=3&s=40" 
                            alt="my avatar"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBar;