'use client'
import "../globals.css";
import "./certifications.css";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Button from "../components/button/Button";
import Loader from "../components/loader/Loader";
import Popup from "../components/popup/Popup";

// Icons
import { FaBars, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function CertificationsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);
    const [openPopupId, setOpenPopupId] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Simular carregamento de página
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            // Limpar timeout se o componente for desmontado
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    // // Abrir o popup automaticamente 2 segundos após a página ser carregada
    // useEffect(() => {
    //     if (!loading) {
    //         const popupTimeoutId = setTimeout(() => {
    //             setOpenPopupId('popup1');
    //         }, 1000);

    //         return () => {
    //             clearTimeout(popupTimeoutId);
    //         };
    //     }
    // }, [loading]);

    const handleOpenPopup = (id: string) => {
        console.log(`Opening popup with id: ${id}`);
        setOpenPopupId(id);
    };

    const handleClosePopup = () => {
        console.log('Closing popup');
        setOpenPopupId(null);
    };

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <html lang="PT-pt">
                    <body
                        className={`antialiased flex flex-col items-center min-h-screen`}
                    >
                        <header className="z-10 fixed flex justify-between items-center px-4 md:px-2 py-4 w-full max-w-screen-xl">
                            <a href="../" title="Home">
                                <Image className="logo" src="/img/logo.svg" alt="logo" width={100} height={100} />
                            </a>
                            <section className="hidden md:flex justify-between deskto-menu w-3/4">
                                <nav>
                                    <ul className="flex justify-between items-center gap-4">
                                        <li><a className="link" href="../">Home</a></li>
                                        <li><a className="link" href="../">Sobre</a></li>
                                        <li><a className="link" href="../">Serviços</a></li>
                                        <li><a className="link" href="../">Certificações EC-Council</a></li>
                                        <li><a className="link" href="../">Cursos</a></li>
                                        <li><a className="link" href="../">Treinamentos</a></li>
                                    </ul>
                                </nav>
                                <section className="flex gap-4 btn">
                                    <Button onClick={() => handleOpenPopup('popup2')} variant="inactive">Entrar</Button>
                                    <Button onClick={() => handleOpenPopup('popup2')} variant="default" showArrow>Cadastrar</Button>
                                </section>
                            </section>
                            <section className="md:hidden flex menu-mobile" ref={menuRef}>
                                <input
                                    type="checkbox"
                                    id="menu-toggle"
                                    className="hidden"
                                    checked={menuOpen}
                                    onChange={() => setMenuOpen(!menuOpen)}
                                    title="Toggle Menu"
                                />
                                <label htmlFor="menu-toggle" className="menu-icon">
                                    <FaBars size={24} />
                                </label>
                                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                                    <ul className="flex flex-col gap-4">
                                        <li><a className="link" href="../">Home</a></li>
                                        <li><a className="link" href="../">Sobre</a></li>
                                        <li><a className="link" href="../">Serviços</a></li>
                                        <li><a className="link" href="../">Certificações EC-Council</a></li>
                                        <li><a className="link" href="../">Cursos</a></li>
                                        <li><a className="link" href="../">Treinamentos</a></li>
                                    </ul>
                                    <section className="flex flex-col gap-4">
                                        <Button onClick={() => handleOpenPopup('popup2')} variant="inactive">Entrar</Button>
                                        <Button onClick={() => handleOpenPopup('popup2')} variant="default" showArrow>Cadastrar</Button>
                                    </section>
                                </nav>
                            </section>
                        </header>
                        <main className="flex flex-col flex-1 w-full max-w-screen-xl min-h-full overflow-x-hidden">
                            {children}
                            {/* Parceiros e lientes */}
                            <section id="parceiros" className="flex flex-col justify-start items-center gap-7 py-4 w-full container-section">
                                {/* <section className="flex flex-col justify-center items-center gap-2">
                                    <h2 className='font-bold text-xl'>Nossos Parceiros</h2>
                                    <p className='md:w-2/3 text-center'>Trabalhamos lado a lado com empresas e instituições renomadas para oferecer formações de alto nível e soluções de cibersegurança inovadoras. </p>
                                </section> */}
                                <section className="max-w-screen md:max-w-screen-xl overflow-hidden scaleup partners-carousel">
                                    <div className="logos">
                                        <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                                    </div>
                                    <div className="logos">
                                        <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                                    </div>
                                    <div className="logos">
                                        <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                                    </div>
                                    <div className="logos">
                                        <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                                        <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                                    </div>
                                </section>
                            </section>
                        </main>
                        <footer className="flex flex-col justify-center items-center w-full">
                            <section className='flex md:flex-row flex-col justify-center gap-8 md:gap-52 p-4'>
                                <a href="../" title="Home" className='flex flex-col justify-center md:justify-start items-center'>
                                    <Image className="logo" src="/img/logo.svg" alt="logo" width={120} height={120} />
                                </a>
                                <div className='flex flex-col justify-center items-center gap-4 md:gap-1 contacts'>
                                    <p>Urbanização Nova vida Rua 60 casa nº 1597</p>
                                    <section className='flex justify-center items-center gap-1'>
                                        <a className='link' href="mailo:info@cyscomp.co.ao ">info@cyscomp.co.ao </a>|
                                        <a className='link' href="mailto:pfaria@cyscomp.co.ao">pfaria@cyscomp.co.ao</a>
                                    </section>
                                    <section className='flex justify-center items-center gap-1'>
                                        <a className='link' href="calto:+244938447195">+244 938 447 195 </a>|
                                        <a className='link' href="calto:+244934 659812">+244 934 659 812</a>
                                    </section>
                                </div>
                                <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 md:gap-1">
                                    <h2 className="font-bold">Siga-nos</h2>
                                    <section className="flex gap-8 md:gap-2 social">
                                        <a className='link' href="https://www.instagram.com/cyscomp" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram size={20} />
                                        </a>
                                        <a className='link' href="https://www.linkedin.com/company/cyscomp/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin size={20} />
                                        </a>
                                        <a className='link' href="https://www.facebook.com/profile.php?id=61560362402645" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook size={20} />
                                        </a>
                                        <a className='link' href="https://wa.me/244938447195" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp size={20} />
                                        </a>
                                    </section>
                                </div>
                            </section>
                            <section className='p-2 text-center'>
                                ©cyscomp 2025, Todos os direito reservados | Designed By <a className='link active' href="https://www.venancio-wapinda.me">Venâncio Wapinda</a>
                            </section>
                        </footer>
                        <Popup id="popup1" isOpen={openPopupId === 'popup1'} onClose={handleClosePopup}>
                            <Image src="/img/icon/verify.svg" alt="Popup 1 Image" width={60} height={60} />
                            <section className="flex flex-col items-center gap-1 text-center">
                                <h2 className='font-bold text-xl'>INVISTA NO SEU FUTURO SEM<br /> PENSAR NO BOLSO! </h2>
                                <p>Parcelamos sua certificação para facilitar sua jornada. Inscreva-se agora e conquiste seu próximo nível! 🚀</p>
                            </section>
                            <section className="flex gap-2 btn">
                                <Button href='#certificacoes' variant="inactive">Ver Cursos</Button>
                                <Button href='#' variant="default" showArrow>Inscreva-se Agora</Button>
                            </section>
                        </Popup>
                        <Popup id="popup2" isOpen={openPopupId === 'popup2'} onClose={handleClosePopup}>
                            <Image src="/img/logo.svg" alt="Popup 1 Image" width={100} height={100} />
                            <section className="flex flex-col items-center gap-1 text-center">
                                <h2 className='font-bold text-xl'>LAMENTAMOS!</h2>
                                <p>Infelizmente, nossa plataforma ainda está em desenvolvimento. No entanto, você pode se inscrever agora clicando no botão abaixo! 🚀</p>
                            </section>
                            <section className="flex gap-2 btn">
                                <Button href='#certificacoes' variant="inactive">Ver Cursos</Button>
                                <Button href='#' variant="default" showArrow>Inscreva-se Agora</Button>
                            </section>
                        </Popup>
                    </body>
                </html>
            )}
        </>
    );
}