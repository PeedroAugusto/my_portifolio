import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navabr'
import 'boxicons'
import Footer from '../Footer/footer'
import '../Contact/contact.css'
export default function Func() {
    return (
        <>
            <Navbar />
            <div className='main-contact'>
                <h1><i className='bx bx-checkbox-square'></i>CONTATO</h1>
                <p>Conheça meu trabalho e entre em contato comigo, será um prazer atende-lo<br />estou disponivel a todo momento.</p>
                <div className='links'>
                    <div className='git'>
                        <a href='https://github.com/PeedroAugusto'><i className='bx bxl-github'></i>https://github.com/PeedroAugusto</a>
                        <a href='https://gitlab.com/Peedro_Augusto'><i className='bx bxl-gitlab'></i>https://gitlab.com/Peedro_Augusto</a>
                    </div>
                    <div className='cont'>
                        <a href='mailto:pe.augusto0700@gmail.com'><i className='bx bxl-gmail'></i>pe.augusto0700@gmail.com</a>
                        <a className='a-tell'><i className='bx bx-phone-call' id='tell'></i>11 94831-6651</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}