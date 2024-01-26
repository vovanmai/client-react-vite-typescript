import React from 'react'


const Header: React.FC = () => {
    return (
        <div style={{borderBottom: "1px solid #e1dbdb", height: 60, padding: "0 5px", boxShadow: "0px 25px 20px -20px rgba(157,157,157,0.45)" }} className="d-flex align-item-center">
            <h2>Channels</h2>
        </div>
    );
}

export default Header