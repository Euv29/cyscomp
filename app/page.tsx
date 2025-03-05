'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Button from "./components/button/Button";
import Loader from "./components/loader/Loader";
import Popup from "./components/popup/Popup";
import CourseCard from "./components/cards/CourseCard";
import FeedbackCard from "./components/cards/FeedbackCard";

// Icons
import { FaCertificate, FaBookOpen, FaGraduationCap, FaBars, FaArrowRight, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
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

  // Abrir o popup automaticamente 2 segundos após a página ser carregada
  useEffect(() => {
    if (!loading) {
      const popupTimeoutId = setTimeout(() => {
        setOpenPopupId('popup1');
      }, 1000);

      return () => {
        clearTimeout(popupTimeoutId);
      };
    }
  }, [loading]);

  const handleOpenPopup = (id: string) => {
    setOpenPopupId(id);
  };

  const handleClosePopup = () => {
    setOpenPopupId(null);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="flex flex-col items-center min-h-screen">
          <header className="z-10 fixed flex justify-between items-center px-4 md:px-2 py-4 w-full max-w-screen md:max-w-screen-xl">
            <a href="">
              <Image className="logo" src="/img/logo.svg" alt="logo" width={100} height={100} />
            </a>
            <section className="hidden md:flex justify-between deskto-menu w-3/4">
              <nav>
                <ul className="flex justify-between items-center gap-4">
                  <li><a className="link" href="#home">Home</a></li>
                  <li><a className="link" href="#sobre">Sobre</a></li>
                  <li><a className="link" href="#servicos">Serviços</a></li>
                  <li><a className="link" href="#certificacoes">Certificações EC-Council</a></li>
                  <li><a className="link" href="#cursos">Cursos</a></li>
                  <li><a className="link" href="#treinamentos">Treinamentos</a></li>
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
                  <li><a className="link" href="#home">Home</a></li>
                  <li><a className="link" href="#sobre">Sobre</a></li>
                  <li><a className="link" href="#servicos">Serviços</a></li>
                  <li><a className="link" href="#certificacoes">Certificações EC-Council</a></li>
                  <li><a className="link" href="#cursos">Cursos</a></li>
                  <li><a className="link" href="#treinamentos">Treinamentos</a></li>
                </ul>
                <section className="flex flex-col gap-4">
                  <Button onClick={() => handleOpenPopup('popup2')} variant="inactive">Entrar</Button>
                  <Button onClick={() => handleOpenPopup('popup2')} variant="default" showArrow>Cadastrar</Button>
                </section>
              </nav>
            </section>
          </header>
          <main className="flex flex-col flex-1 w-full md:max-w-screen-xl min-h-full">
            {/* Hero Section */}
            <section id="home" className="flex md:flex-row flex-col-reverse flex-1 justify-center items-center gap-2 md:gap-7 px-4 md:px-11 py-20 w-full min-h-scree hero-section">
              <section className="flex flex-col justify-center items-center md:items-start gap-4 md:pt-20 w-full md:w-[56%] md:min-h-full">
                <h1 className="font-bold text-1xl text-white md:text-5xl md:text-left text-center decodanimation">
                  Protegemos Infraestruturas e Formamos Especialistas Para o Futuro da Cibersegurança.
                </h1>
                <p className="md:text-left text-center">
                  Defenda-se contra ameaças digitais com nossos cursos certificados e treinamento prático. Aprenda com especialistas e domine a cibersegurança!
                </p>
                <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Agendar Matrícula Agora</Button>
                <section className="flex gap-2">
                  <a href="#certificacoes" className="flex flex-col items-center gap-2 p-4 card-more">
                    <div className="icon">
                      <FaCertificate size={20} color="white" />
                    </div>
                    <p className="text-{12px} text-center">Certificações EC-Council</p>
                  </a>
                  <a href="#cursos" className="flex flex-col items-center gap-2 p-4 card-more principal">
                    <div className="icon">
                      <FaBookOpen size={20} color="white" />
                    </div>
                    <p className="text-{12px} text-center">Cursos Técnicos e Práticos</p>
                  </a>
                  <a href="#treinamentos" className="flex flex-col items-center gap-2 p-4 card-more">
                    <div className="icon">
                      <FaGraduationCap size={20} color="white" />
                    </div>
                    <p className="text-{12px} text-center">Formações Compleme-
                      ntares</p>
                  </a>
                </section>
              </section>
              <section className="w-[40%] md:w-[30%] hero-img">
                <Image id="herImg" className="hero-img" src="/img/img2.webp" alt="Description of image" width={600} height={500} priority />
              </section>
            </section>
            {/* Sobre */}
            <section id="sobre" className="flex md:flex-row flex-col flex-1 justify-center items-center gap-2 md:gap-7 px-4 md:px-11 w-full min-h-scree container-section scaleup">
              <section className="hidden md:flex hero-img">
                <Image id="herImg" className="hero-img" src="/img/img1.webp" alt="Description of image" width={400} height={600} priority />
              </section>
              <section className='flex flex-col gap-4 md:w-2/4'>
                <h2 className='font-bold text-xl'>Quem Somos</h2>
                <p className='text-justify'>A CYSCOMP é uma empresa de excelência no domínio da Cibersegurança e Gestão de Incidentes, dedicada à protecção e resiliência das infraestruturas digitais dos seus clientes.</p>
                <p className='text-justify'>Com uma equipa composta por profissionais altamente qualificados e a aplicação de tecnologias de ponta, disponibilizamos serviços especializados para Centros de Operações de Segurança (SOC). </p>
                <p className='text-justify'>A nossa missão é assegurar a continuidade operacional, proteger informações sensíveis e responder rapidamente a qualquer tipo de incidente cibernético.</p>
                <h2 className='font-bold'>“Capacitando Profissionais e Organizações para a Segurança Digital”</h2>
                <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Entrar em Contacto</Button>
              </section>
            </section>
            {/* servicos */}
            <section id="servicos" className="flex flex-col items-center gap-4 px-4 md:px-11 container-section">
              <section className="flex flex-col justify-center items-center gap-2">
                <h2 className='font-bold text-xl'>Nossos Serviços</h2>
                <p className='md:w-1/2 text-center'>Soluções especializadas em cibersegurança para monitoramento, defesa e resposta a ameaças, garantindo a integridade e a resiliência do seu ambiente digital.</p>
              </section>
              <section className='flex md:flex-row flex-col justify-center items-center gap-4 py-7 w-full md'>
                {/* Service 1 */}
                <section className="md:w-1/4 md:min-h-[29rem] service-card scaleup">
                  <section className="w-full min-h-36 md:min-h-52 service-img soc">
                  </section>
                  <section className="flex flex-col justify-between items-center gap-2 p-4 w-full h-full description-service">
                    <h1 className='w-full font-bold'>Implementação de Centros de Operações de Segurança (SOC)</h1>
                    <p className='h-full md:text-sm text-base'>Configuração de SOCs físicos ou virtuais adaptados às necessidades específicas de cada infraestrutura, permitindo monitorar, detectar, analisar e responder a ameaças cibernéticas em tempo real.</p>
                    <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Contratar Serviço</Button>
                  </section>
                </section>
                {/* Service 2 */}
                <section className="md:w-1/4 md:min-h-[29rem] service-card scaleup">
                  <section className="w-full min-h-36 md:min-h-52 service-img fma">
                  </section>
                  <section className="flex flex-col justify-between items-center gap-2 p-4 w-full h-full description-service">
                    <h1 className='w-full font-bold'>Ferramentas de Monitoramento Avançadas</h1>
                    <p className='h-full md:text-sm text-base'>Utilização de soluções como SIEM (Security Information and Event Management) e IDS/IPS (Intrusion Detection/Prevention System) para um monitoramento contínuo e abrangente da rede e dos sistemas.</p>
                    <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Contratar Serviço</Button>
                  </section>
                </section>
                {/* Service 3 */}
                <section className="md:w-1/4 md:min-h-[29rem] service-card scaleup">
                  <section className="w-full min-h-36 md:min-h-52 service-img ee">
                  </section>
                  <section className="flex flex-col justify-between items-center gap-2 md:gap-7 p-4 w-full h-full description-service">
                    <h1 className='w-full font-bold'>Equipe Especializada</h1>
                    <p className='h-full md:text-sm text-base'>Disponibilização de analistas de segurança certificados e treinados para operar o SOC, assegurando monitoramento 24/7 e resposta rápida a incidentes.</p>
                    <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Contratar Serviço</Button>
                  </section>
                </section>
                {/* Service 4 */}
                <section className="md:w-1/4 md:min-h-[29rem] service-card scaleup">
                  <section className="w-full min-h-36 md:min-h-52 service-img dpp">
                  </section>
                  <section className="flex flex-col justify-between items-center gap-2 p-4 w-full h-full description-service">
                    <h1 className='w-full font-bold'>Desenvolvimento de Políticas e Procedimentos</h1>
                    <p className='h-full md:text-sm text-base'>Elaboração de procedimentos operacionais padrão (SOPs) e políticas de resposta a incidentes personalizadas para cada organização, garantindo conformidade e eficiência na gestão de incidentes.</p>
                    <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Contratar Serviço</Button>
                  </section>
                </section>
              </section>
            </section>
            {/* Certificações */}
            <section id="certificacoes" className="flex flex-col items-center gap-7 px-4 md:px-11 container-section">
              <section className="flex flex-col justify-center items-center gap-2">
                <h2 className='font-bold text-xl'>Certificações EC-Council</h2>
                <p className='md:w-1/2 text-center'>As nossas formações em cibersegurança são alinhadas com as principais certificações internacionais, como as da EC-Council, com programas que atendem às necessidades de profissionais iniciantes e experientes.</p>
              </section>
              <section className='flex flex-col justify-center items-center gap-4 w-full'>
                <section className='flex md:flex-row flex-col justify-center items-center gap-4 w-full'>
                  {/* C1 */}
                  <a href='certifications/CEH' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/shield-half-sharp.svg" alt="CEH Certification" width={40} height={50} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Certified Ethical Hacker (CEH)</h3>
                        <p className=''>Formação intensiva em hacking ético e segurança ofensiva, incluindo testes de penetração e mitigação de vulnerabilidades.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                  {/* C2 */}
                  <a href='certifications/ECSA' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/search-sharp.svg" alt="ECSA Certification" width={40} height={40} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Certified Security Analyst (ECSA)</h3>
                        <p className=''>Avançado em análise de segurança, abordando desde auditorias a
                          técnicas avançadas de testes de penetração.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                  {/* C3 */}
                  <a href='certifications/CMA' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/bug-sharp.svg" alt="CMA Certification" width={40} height={40} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Certified Malware Analyst (CMA)</h3>
                        <p className=''>Capacitação em resposta a incidentes cibernéticos e gestão de crises
                          em ambientes corporativos.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                </section>
                <section className='flex md:flex-row flex-col justify-center items-center gap-4 w-full'>
                  {/* C1 */}
                  <a href='certifications/ECIH' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/bug-sharp.svg" alt="ECIH Certification" width={40} height={40} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Certified Incident Handler (ECIH)</h3>
                        <p className=''>Capacitação em resposta a incidentes cibernéticos e gestão de crises
                          em ambientes corporativos.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                  {/* C2 */}
                  <a href='certifications/CND' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/shield-half-sharp.svg" alt="CND Certification" width={40} height={50} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Certified Network Defender (CND)</h3>
                        <p className=''>Enfoque na proteção de redes contra intrusões e ataques cibernéticos,
                          além de boas práticas em segurança de redes.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                  {/* C3 */}
                  <a href='certifications/CHFI' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 scaleup card-certification">
                    <section className="icon-certification">
                      <Image src="/img/icon/laptop.svg" alt="CHFI Certification" width={40} height={40} />
                    </section>
                    <section className="flex flex-col justify-between w-4/5 description-certification">
                      <section className='flex flex-col gap-1'>
                        <h3 className='font-bold text-base'>Computer Hacking Forensic Investigator (CHFI)</h3>
                        <p className=''>Capacitação em investigação forense digital para coleta de evidências
                          em cibercrimes.</p>
                      </section>
                      <label className='flex justify-end items-center gap-2 font-bold'>Saber mais <FaArrowRight className='arrow' /></label>
                    </section>
                  </a>
                </section>
              </section>
              {/* notif */}
              <section className="flex flex-col justify-center items-center gap-2 scaleup">
                <h2 className='font-bold text-base'>Invista No Seu Futuro Sem Pesar No Bolso!</h2>
                <p className='md:w-2/3 text-center'>Parcelamos sua certificação para facilitar sua jornada. Inscreva-se agora e conquiste seu próximo nível! 🚀</p>
                <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Inscreva-se Agora</Button>
              </section>
            </section>
            {/* Cursos */}
            <section id="cursos" className="flex flex-col justify-start items-center gap-7 px-4 md:px-11 w-full container-section">
              <section className="flex flex-col items-start gap-2 w-full scaleup">
                <h2 className='font-bold text-2xl'>Cursos Técnicos <br /> & Práticos</h2>
              </section>
              <section className="flex items-start gap-4 px-4 md:px-12 w-screen md:max-w-screen-xl scaleup courseCards-section">
                <CourseCard
                  title="Fundamentos de Cibersegurança"
                  description="Inicie sua jornada no mundo da segurança digital com nosso curso de Fundamentos de Cibersegurança."
                  imageUrl="/img/course/course1.webp"
                  link="#c"
                />
                <CourseCard
                  title="Pentest Profissional"
                  description="Aprenda a identificar e explorar vulnerabilidades em sistemas, redes e aplicações web com técnicas avançadas de testes de penetração."
                  imageUrl="/img/course/course2.webp"
                  link="#c"
                />
                <CourseCard
                  title="Security Operations Center"
                  description="Torne-se um especialista em monitoramento, análise e resposta a incidentes cibernéticos com nosso curso de Security Operations Center."
                  imageUrl="/img/course/course3.webp"
                  link="#c"
                />
                <CourseCard
                  title="Detecção de Intrusão"
                  description="Aprenda a proteger redes e sistemas contra ataques cibernéticos com nosso curso de Detecção de Intrusão."
                  imageUrl="/img/course/course4.webp"
                  link="#c"
                />
                <CourseCard
                  title="Análise de Malware"
                  description="Domine as técnicas essenciais para identificar, desmontar e analisar malware com nosso curso de Análise de Malware."
                  imageUrl="/img/course/course5.webp"
                  link="#c"
                />
                <CourseCard
                  title="Resposta a Incidentes"
                  description="Desenvolva habilidades práticas para identificar ameaças, analisar compromissos de segurança e recuperar sistemas."
                  imageUrl="/img/course/course6.webp"
                  link="#c"
                />
                <CourseCard
                  title="Pentest Web"
                  description="Torne-se um especialista em Pentest em aplicações web, aprenda a identificar vulnerabilidades.."
                  imageUrl="/img/course/course7.webp"
                  link="#c"
                />
              </section>
            </section>
            {/* Treinamentos */}
            <section id="treinamentos" className="flex flex-col justify-start items-center gap-7 px-4 md:px-11 w-full container-section">
              <section className="flex flex-col items-start gap-2 w-full scaleup">
                <h2 className='font-bold text-2xl'>Formações  <br /> Complementares</h2>
              </section>
              <section className="flex items-start gap-4 px-4 md:px-12 w-screen md:max-w-screen-xl scaleup courseCards-section">
                <CourseCard
                  title="Gestão de Projectos"
                  description="Certificação em metodologias ágeis como Scrum e PMP."
                  imageUrl="/img/course/course8.webp"
                  link="#c"
                />
                <CourseCard
                  title="Design Digital & Criatividade"
                  description="Desenvolva habilidades práticas em design gráfico e ferramentas criativas como Photoshop e Illustrato."
                  imageUrl="/img/course/course9.webp"
                  link="#c"
                />
                <CourseCard
                  title="Administração & Marketing Digital"
                  description="Formação em marketing digital, redes sociais e análise de dados."
                  imageUrl="/img/course/course10.webp"
                  link="#c"
                />
              </section>
            </section>
            {/* Feedback de Alunos */}
            <section id="feedack" className="flex flex-col justify-start items-center gap-7 px-4 md:px-11 w-full container-section">
              <section className="flex flex-col justify-center items-center gap-2">
                <h2 className='font-bold text-xl'>A Voz Dos Nossos Alunos</h2>
                <p className='md:w-1/2 text-center'>Nossos alunos são a prova do impacto dos nossos cursos! Veja o que eles têm a dizer sobre suas experiências, aprendizados e como a formação na CYSCOMP os ajudou a evoluir na carreira e enfrentar os desafios da cibersegurança.</p>
              </section>
              <section className="flex md:flex-row flex-col gap-4 scaleup feedback-cards">
                <FeedbackCard
                  name="André M."
                  mensange="O curso de Pentest Profissional foi um divisor de águas na minha carreira. As aulas práticas e o uso de ferramentas reais me deram a confiança para atuar no mercado com mais segurança."
                  imageUrl="/img/profile1.webp"
                  className="scaleup"
                />
                <FeedbackCard
                  name="Carla T."
                  mensange="Aprender sobre análise forense e resposta a incidentes na CYSCOMP me trouxe uma visão prática do que realmente acontece no mundo da cibersegurança."
                  imageUrl="/img/profile3.webp"
                  className="md:h-56 scaleup"
                />
                <FeedbackCard
                  name="Lucas R."
                  mensange="Fiz o curso de Pentest Web e foi incrível! Consegui identificar vulnerabilidades em aplicações e aplicar correções antes que se tornassem riscos reais. "
                  imageUrl="/img/profile2.webp"
                  className="scaleup"
                />
              </section>
            </section>
            {/* Parceiros e lientes */}
            <section id="parceiros" className="flex flex-col justify-start items-center gap-7 w-full max-w-screen overflow-hidden container-section">
              <section className="flex flex-col justify-center items-center gap-2 scaleup">
                <h2 className='font-bold text-xl'>Nossos Parceiros</h2>
                <p className='md:w-2/3 text-center'>Trabalhamos lado a lado com empresas e instituições renomadas para oferecer formações de alto nível e soluções de cibersegurança inovadoras. </p>
              </section>
              <section className="max-w-screen md:max-w-screen-xl overflow-hidden scaleup partners-carousel">
                <div className="flex flex-nowrap logos">
                  <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                </div>
                <div className="flex flex-nowrap logos">
                  <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                </div>
                <div className="flex flex-nowrap logos">
                  <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                </div>
                <div className="flex flex-nowrap logos">
                  <Image src="/img/partners/logo1.png" alt="Logo 1" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo2.png" alt="Logo 2" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo3.png" alt="Logo 3" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo4.png" alt="Logo 4" width={80} height={30} className="logo" />
                  <Image src="/img/partners/logo5.png" alt="Logo 5" width={80} height={30} className="logo" />
                </div>
              </section>
            </section>
            {/* Porque */}
            <section id="section" className="flex md:flex-row flex-col justify-center items-center gap-7 px-4 md:px-11 w-full container-section">
              <section className="flex flex-col gap-2 w-full md:w-2/5">
                <h2 className='font-bold text-2xl'>Por que escolher a <br /> CYSCOMP?</h2>
                <p>
                  <b>Formação Prática e Certificada</b> <br />
                  Cursos alinhados com certificações internacionais e focados em aplicações reais do mercado.
                </p>
                <p>
                  <b>Instrutores Especializados</b> <br />
                  Aprenda com profissionais experientes e atuantes na área de cibersegurança.
                </p>
                <p>
                  <b>Tecnologias e Metodologias Avançadas</b> <br />
                  Uso de ferramentas líderes do setor e abordagem baseada nos principais frameworks de segurança.
                </p>
                <p className='text-lg'><b>Garanta seu futuro na cibersegurança!</b></p>
              </section>
              <section className="">
                <Image src="/img/footerImg.png" alt="New Image" width={500} height={400} />
              </section>
            </section>
            <canvas className="bg-canvas"></canvas>
          </main>
          <footer className="flex flex-col justify-center items-center w-full">
            <section className='flex md:flex-row flex-col justify-center gap-8 md:gap-52 p-4'>
              <a className='flex flex-col justify-center md:justify-start items-center' href="">
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
        </div>
      )}
      <Popup id="popup1" isOpen={openPopupId === 'popup1'} onClose={handleClosePopup}>
        <Image src="/img/icon/verify.svg" alt="Popup 1 Image" width={60} height={60} />
        <section className="flex flex-col items-center gap-1 text-center">
          <h2 className='font-bold text-xl'>INVISTA NO SEU FUTURO SEM<br /> PENSAR NO BOLSO! </h2>
          <p>Parcelamos sua certificação para facilitar sua jornada. Inscreva-se agora e conquiste seu próximo nível! 🚀</p>
        </section>
        <section className="flex md:flex-row flex-col gap-2 btn">
          <Button className="text-sm md:text-base" href='#certificacoes' variant="inactive">Ver Cursos</Button>
          <Button className="text-sm md:text-base" href='https://wa.me/244938447195' variant="default" showArrow>Inscreva-se Agora</Button>
        </section>
      </Popup>
      <Popup id="popup2" isOpen={openPopupId === 'popup2'} onClose={handleClosePopup}>
        <Image src="/img/logo.svg" alt="Popup 1 Image" width={100} height={100} />
        <section className="flex flex-col items-center gap-1 text-center">
          <h2 className='font-bold text-xl'>LAMENTAMOS!</h2>
          <p>Infelizmente, nossa plataforma ainda está em desenvolvimento. No entanto, você pode se inscrever agora clicando no botão abaixo! 🚀</p>
        </section>
        <section className="flex gap-2 btn">
          <Button className="w-fit text-sm md:text-base" href="https://wa.me/244938447195" variant="default" showArrow>Agendar Matrícula Agora</Button>
        </section>
      </Popup>
    </>
  );
}