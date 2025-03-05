
import Image from "next/image";
import Button from "../../components/button/Button";

// Icons
import { FaArrowRight } from 'react-icons/fa';

const CHFIPage: React.FC = () => {
    return (
        <section className='flex md:flex-row flex-col flex-1 justify-center items-start gap-2 md:gap-7 px-4 md:px-11 py-20 w-full min-h-scree hero-section'>
            <section className="flex flex-col gap-7 w-full main-content">
                <section className="flex md:flex-col flex-col-reverse gap-4">
                    <section className="flex flex-col justify-center items-center rounded-xl h-36 md:h-60 overflow-hidden certification-image cnd">
                        <h3 className='font-bold text-2xl'>Computer Hacking Forensic Investigator (CHFI) </h3>
                    </section>
                    <section className="flex items-center gap-1 px-4 py-2 rounded-xl w-full card-certification">
                        <section className="icon-certification">
                            <Image src="/img/icon/laptop.svg" alt="CEH Certification" width={40} height={50} />
                        </section>
                        <section className="flex flex-col justify-between w-full description-certification">
                            <section className='flex flex-col gap-1'>
                                <h3 className='font-bold text-base'>Computer Hacking Forensic Investigator (CHFI) </h3>
                                <p className=''>Torne-se um Perito em Investigação Digital</p>
                            </section>
                        </section>
                        <h3 className='font-bold text-base'></h3>
                    </section>
                </section>
                <section className="flex flex-col gap-7 certification-info">
                    <p className="text-justify">
                        O <b>Computer Hacking Forensic Investigator (CHFI) </b>, da EC-Council é a certificação definitiva para quem deseja se especializar na investigação de crimes cibernéticos, análise forense digital e recuperação de evidências eletrônicas. Em um mundo onde ataques cibernéticos e fraudes digitais crescem diariamente, profissionais certificados em CHFI são essenciais para rastrear criminosos e proteger dados corporativos e governamentais.
                    </p>
                    <p className="text-justify">
                        <b className="text-lg">Por que escolher o CHFI?</b><br />
                        <u className="flex flex-col gap-1 no-underline">
                            <li><b>Investigação forense completa</b> – Coleta, preservação e análise de evidências digitais.</li>
                            <li><b>Treinamento prático</b> – Simulações realistas de crimes cibernéticos.</li>
                            <li><b>Ferramentas e técnicas avançadas</b> – Utilize software forense de nível mundial.</li>
                            <li><b>Reconhecimento global</b> – Certificação aceita por órgãos governamentais, empresas e instituições de segurança.</li>
                        </u>
                    </p>
                    <p className="text-justify">
                        <b className="text-lg">O que você vai aprender?</b><br />
                        <ul className="flex flex-col gap-1 no-underline">
                            <li>✅ Metodologias de investigação digital</li>
                            <li>✅ Recuperação e análise de arquivos apagados ou ocultos</li>
                            <li>✅ Rastreamento e identificação de hackers e fraudadores</li>
                            <li>✅ Uso de ferramentas forenses para análise de discos rígidos, logs e redes</li>
                            <li>✅ Leis e regulamentos sobre crimes cibernéticos e perícia digital</li>
                        </ul>
                    </p>
                    <p className="text-justify">
                        <b className="text-lg">Para quem é esta certificação?</b><br />
                        <ul className="flex flex-col gap-1 no-underline">
                            <li>🕵️ Peritos e Investigadores Forenses Digitais</li>
                            <li>🔍 Especialistas em Segurança Cibernética</li>
                            <li>💻 Profissionais de TI que desejam atuar na área forense</li>
                            <li>⚖️ Agentes da lei, auditores e profissionais jurídicos</li>
                        </ul>
                    </p>
                    <section className="flex flex-col justify-center items-center md:items-start gap-4 w-full">
                        <p className="text-center md:text-justify">
                            <b className="text-lg">🚀 Desvende crimes digitais e torne-se um especialista forense!</b><br />
                            <ul className="flex flex-col gap-1 text-center md:text-justify no-underline">
                                <li className="text-center md:text-justify">Invista no seu futuro com condições especiais de pagamento!</li>
                            </ul>
                        </p>
                        <Button className="w-fit" href="https://wa.me/244938447195" variant="default" showArrow>Inscreva-se Agora</Button>
                    </section>
                </section>
            </section>
            <section className='w-full md:w-2/6 min-h-full'>
                <section className="flex flex-col justify-start items-start gap-2 py-4">
                    <h2 className='font-bold text-xl'>Certificações <br /> EC-Council</h2>
                </section>
                <section className='flex flex-col justify-center items-center gap-4 w-full'>
                    <section className='flex flex-col justify-center items-center gap-4 w-full'>
                        {/* C1 */}
                        <a href='../certifications/CEH' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
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
                        <a href='../certifications/ECSA' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
                            <section className="icon-certification">
                                <Image src="/img/icon/search-sharp.svg" alt="CEH Certification" width={40} height={40} />
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
                        <a href='../certifications/CMA' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
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
                        {/* C4 */}
                        <a href='../certifications/ECIH' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
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
                        {/* C5 */}
                        <a href='../certifications/CND' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
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
                        {/* C6 */}
                        <a href='#' className="flex gap-2 p-2 rounded-xl w-full md:w-96 min-h-40 card-certification">
                            <section className="icon-certification">
                                <Image src="/img/icon/laptop.svg" alt="CEH Certification" width={40} height={40} />
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
            </section>
        </section>
    );
};

export default CHFIPage; 