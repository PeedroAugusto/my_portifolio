import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navabr'
import '../Skills/skills.css'
import FlappyBird from '../Img/flappybird.jpg'
import Footer from '../Footer/footer'
import Library from '../Img/library.webp'



import AspNet from '../Img/dotnetIcon.png'
import Html from '../Img/icon1.png'
import Css from '../Img/icon2.png'
import Js from '../Img/icon3.png'
import StackOverflow from '../Img/icon6.png'
import Postgress from '../Img/icon4.png'


export default function Func() {
    return (
        <>
            <Navbar />
            <div className='main-skills'>
                <div className='skills'>
                    <h1 id='titlehab'><i className='bx bx-checkbox-square'></i>HABILIDADES</h1>
                    <div className='skills-logo'>
                        <div>
                            <img src={AspNet} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "rgb(123 31 162)", width: "50px", boxShadow: "0px 0px 0px rgb(123 31 162), 0px 0px 10px rgb(123 31 162)" }}></div></div>
                        </div>
                        <div>
                            <img src={StackOverflow} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "rgb(250 152 1)", width: "50px", boxShadow: "0px 0px 0px rgb(250 152 1), 0px 0px 30px rgb(250 152 1)" }}></div></div>
                        </div>
                        <div>
                            <img src={Postgress} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "#47759c", width: "30px", boxShadow: "0px 0px 0px #47759c, 0px 0px 30px #47759c" }}></div></div>
                        </div>
                        <div>
                            <img src={Html} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "rgb(233 98 40)", width: "15px", boxShadow: "0px 0px 0px rgb(233 98 40), 0px 0px 30px rgb(233 98 40)" }}></div></div>
                        </div>
                        <div>
                            <img src={Css} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "rgb(45 153 202)", width: "15px", boxShadow: "0px 0px 0px rgb(45 153 202), 0px 0px 30px rgb(45 153 202)" }}></div></div>
                        </div>
                        <div>
                            <img src={Js} />
                            <div className='bar'><div className='progress' style={{ backgroundColor: "rgb(255 214 0)", width: "10px", boxShadow: "0px 0px 0px rgb(255 214 0), 0px 0px 30px rgb(255 214 0)" }}></div></div>
                        </div>
                    </div>
                </div>
                <div className='main-projects'>
                    <h1 id='titleprod'><i className='bx bx-checkbox-square'></i>PROJETOS</h1>
          
                    <div className='list-projects'>
                        <div className='project' onClick={() => { window.location.href = "https://github.com/PeedroAugusto/FlappyBird" }}>
                            <img src={FlappyBird} />
                            <p>Flappy Bird</p>
                            <a>Descrição: esse é um projeto do jogo Flappy Bird que fiz em <strong>C# Windowns Form</strong></a>
                        </div>
                        <div className='project prod'>
                            <p className='title'>Github</p>
                            <p className='txt'>Visite meu Github e veja alguns dos meus projetos</p>
                            <button onClick={() => { window.location.href = "https://github.com/PeedroAugusto" }}>Ir ao meu Github</button>
                        </div>
                        <div className='project' onClick={() => { window.location.href = "https://github.com/PeedroAugusto/pedro_book" }}>
                            <img src={Library} />
                            <p>Pedro Books</p>
                            <a>Descrição: esse é um projeto do uma livraria que fiz em <strong>React</strong> e a api em <strong>C#</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}