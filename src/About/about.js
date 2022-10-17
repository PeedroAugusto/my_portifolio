import React from 'react'
import { useEffect, useState } from 'react'
import '../About/about.css'
import Navbar from '../Navbar/navabr'
import 'boxicons'
import Me from '../Img/me.jpg'
import Footer from '../Footer/footer'
import Doc from '../Img/curriculo.pdf'
export default function Func() {

    function WriteTxt() {
        consoleText(['Olá meu nome é Pedro, moro em São Paulo, tenho 17 anos e começei a estudar programação quando eu tinha 14 anos, des de então venho me aprimorando nesse mundo. <br />Sou dev junior, desenvolvendo no backend em <strong>C# Asp.Net Core</strong> e no frotend em <strong>React</strong>, banco de dados uso <strong>PostgresSql</strong> e<strong>SQL</strong> ou <strong>MySql</strong>, no momento estou estudando um pouco de <strong>JavaScript</strong>.<br />Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:<br /><br /><div class="tec"><div><i class=\'bx bx-right-arrow\'></i> <strong>React</strong> <br /><i class=\'bx bx-right-arrow\'></i> <strong>C# Asp.Net Core</strong><br /><i class=\'bx bx-right-arrow\'></i> <strong>PostgressSql</strong></div><div><i class=\'bx bx-right-arrow\'></i> <strong>SQL</strong> <br /><i class=\'bx bx-right-arrow\'></i> <strong>Js</strong><br /><i class=\'bx bx-right-arrow\'></i> <strong>MySQL</strong></div></div>'], 'text');
    
        function consoleText(words, id) {
            var letterCount = 1;
            var x = 1;
            var waiting = false;
            var target = document.getElementById(id)

            window.setInterval(function () {

                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function () {
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x;
                }
            }, 30)
        }
    }
    useEffect(() => { WriteTxt() }, []);
    return (
        <>
            <Navbar />
            <div className='main-home'>

                <div className='banner'>
                    <h2>DESENVOLVER FULL-STACK</h2>
                    <h1>Olá, eu sou<br /> Pedro Augusto</h1>
                    <p className='txt-sub'>Sou programador e gosto de criar sites a partir das minhas próprias APIs.</p>
                    <a style={{ textDecoration: "none", color: "white" }} href={Doc} download ><button id='btnDoc'>BAIXAR CURRÍCULO</button></a>
                </div>
                <div className='about'>
                    <div className='content'>
                        <div className='imgs'>
                            <img src={Me} />
                        </div>
                        <p>Pedro Augusto</p>
                        <div className='links'>
                            <a href="https://github.com/PeedroAugusto"><i className='bx bxl-github' ></i></a>
                            <a href="https://gitlab.com/Peedro_Augusto"><i className='bx bxl-gitlab'></i></a>
                            <a href='mailto:pe.augusto0700@gmail.com'><i className='bx bxl-gmail'></i></a>
                        </div>
                    </div>
                    <div className='content1'>
                        <h2><i className='bx bx-checkbox-square'></i>SOBRE</h2>
                        <p className='sub-title'><strong>Conheça um pouco sobre mim</strong></p>
                        <div className='console-container'>
                            <span id='text'>
                            </span>
                            <div className='console-underscore' id='console'>&#95;</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}