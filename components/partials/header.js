import React, {useState} from 'react';
import './header.scss'
import logo from '../../logo.svg';


const Header = ({total}) => {
        return (
            <header>
        <div className="burger"></div>
        <img src={logo} className="Logo" alt="logo" />

        <div className="cta-header switch bg-grey">
            <div className="active">Livraison</div>
            <div>À emporté</div>
        </div>
        <div className="cta-header location bg-grey">
            <div>
                <svg width="16px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                     aria-label="Livrer à l'adresse" role="img" focusable="false">
                    <path
                        d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                        fill="#000000"></path>
                </svg>
                10 Rue Paris <span></span> Maintenant
            </div>
        </div>

        <div className="cta-header search bg-grey">
            <div>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="dc dd cc cd">
                    <path
                        d="M18.834 17l-3.666-3.667c.916-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75 4.417.75.834 4.333.834 8.667c0 4.333 3.583 7.916 7.917 7.916 1.75 0 3.333-.583 4.666-1.5l3.667 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.416 2.417 5.416 5.417-2.416 5.417-5.416 5.417c-3 0-5.417-2.417-5.417-5.417z"></path>
                </svg>
                Plats, courses ali...
            </div>
        </div>

        <div className="cta-header xs checkout bg-black">
            <div>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="ct dr cc cd">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"></path>
                </svg>
                Panier <span></span> {total}
            </div>
        </div>

        <div className="cta-header xs login bg-grey">
            <div>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="ct dr cc cd">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                </svg>
                Connexion
            </div>
        </div>

        <div className="cta-header xs register bg-grey">
            <div>
                Inscription
            </div>
        </div>
    </header>
        )
}

export default Header;
