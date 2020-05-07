import React from 'react';

const BusinessCard: React.FC = () => {

    return (
        <div className="contact-business-card">
            <h2>John Starr</h2>
            <h3>Information Technology</h3>
            <div className="contact-business-header">
                <h3>Business Card Info</h3>
            </div>
            <div className="contact-business-details">
                <div>
                    <div>Company:</div>
                    <div>Cross & Crown</div>
                </div>
                <div>
                    <div>Employment Title:</div>
                    <div>Developer</div>
                </div>
                <div>
                    <div>Address:</div>
                    <div>25 Penncraft Avenue<br/>Chambersburg, Pennsylvania 17201</div>
                </div>
                <div>
                    <div>Website:</div>
                    <div>https://cacpro.com</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;