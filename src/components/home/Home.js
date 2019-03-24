import React from 'react';
import LoginButton from './LoginButton';
import NavBar from './NavBar';

export const Home = () => (
    <div>
        <NavBar />
        <div className="home-layout">
            <div className="box-layout__box">
                <div className="box-layout__title"><em>Realize seu evento</em></div>
                <div className="box-layout__text">Sistema para gerenciamento de <span className="title">eventos</span>, <span className="title">palestras</span>, <span className="title">seminários</span>.</div>
                <LoginButton />
            </div>
        </div>
    </div>
)

export default Home
