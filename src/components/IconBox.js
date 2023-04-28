import React from 'react';

const IconBox = ({ icon, title }) => {
    return (
        <div className='text-center' style={{color: "#5F6D7E"}}>
            <div className='icon_box border mx-auto rounded-circle' style={{ width: "32px", height: "32px" }}>
                {icon}
            </div>
            {title}
        </div>
    );
};

export default IconBox;