import React from 'react'
import { useEffect, useState } from 'react'
import '../Navbar/navbar.css'
export default function Func() {
    function NavbarF() {
        window.setInterval(function () {
            const activePage = window.location.pathname;
            const navlinks = document.getElementsByClassName("lis")
            for (let index = 0; index < navlinks.length; index++) {
                const element = navlinks[index];
                if (element.href.includes(`${activePage}`)) {
                    element.classList.add("active")
                }
                else {
                    element.classList.remove("active")
                }
            }

        }, 0)
    }
    const name = " Pedro Augusto /"
    useEffect(() => { NavbarF() }, [])
    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One:ital@1&family=Archivo+Black&family=Rubik:wght@500&family=Sarabun:ital,wght@1,700&family=Secular+One&display=swap" rel="stylesheet"></link>
            <div className='main-navbar'>
                <div className='navbar'>
                    <div className='logo'>
                        <p><i className='bx bx-chevron-left' ></i>{name}<i className='bx bx-chevron-right'></i></p>
                    </div>
                    <div className='links'>
                        <ul id='linksUl'>
                            <li id='s'><a className='lis' href='/about'>About</a></li>
                            <li id='s' ><a className='lis' href='/skills'>Habilidades</a></li>
                            <li id='s' ><a className='lis' href='/contact'>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}