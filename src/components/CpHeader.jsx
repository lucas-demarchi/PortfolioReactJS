import React, { useState } from "react";
import img_logotipo from '../images/logotipoJP.png';

const CpHeader = () => {

    // Gerencia o estado/comportamento do Menu Mobile, no caso, em estado de desativado (Desktop).
    const [classOn, setClassOn] = useState(false);

    return (
        <header className="topo">
            <section className="container">
                <div className="logotipo">
                    <img src={img_logotipo} alt="Portfólio JP " title="Portfólio JP " className="img-logotipo" />
                </div>

                {/* classOn junto com o onClick vai manipular a ação de ativar e desativar o Menu Mobile de acordo o click do usuário */}
                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>

                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a href="#topo">home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about">quem sou</a>
                            </li>
                            <li className="nav-item">
                                <a href="#project">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact">contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}

// Exporta o Componente para o uso da Aplicação!
export default CpHeader;