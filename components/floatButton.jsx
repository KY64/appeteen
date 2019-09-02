import React from 'react';

export default props =>
    <button className={props.icon}>

        <style jsx>{`
            button {
                right: 36px;
                bottom: 80px;
                border: none;
                color: white;
                width: 60px;
                height: 60px;
                outline: none;
                position: fixed;
                font-size: ${props.size};
                background: #DD2E54;
                border-radius: 100%;
                box-shadow: 0 2px 5px rgba(0,0,0,.5)
            }
            button:active {
                background: #F22451;
            }
        `}</style>
    </button>