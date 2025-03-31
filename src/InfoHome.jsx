import React from 'react';
import './InfoHome.css';
import foto from "../public/foto.png"

export function HomeInfo() {
    return (
        <selection className='selection'>
            <div className='info'>
                        <p>Hi There!</p>
                        <h1>I'm Saith</h1>
                        <p>And I'm a Software Developer</p>
                        <br></br>
                        <ButtonContact />
                    </div>
            <div className='home-info-container'>
                <div className='foto'>
                    <img src={foto} alt="Foto" />
                </div>
            </div>
        </selection>
    );
}

export function ButtonContact() {
    return (
    <button className='button-contact'><b>Contact me</b></button>
    );
}
