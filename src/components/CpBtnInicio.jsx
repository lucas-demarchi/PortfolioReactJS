import React from "react";
import img_inicio from '../images/btnNavInicio.png';

const CpBtnInicio = () => {
    return (
        <div className="btn-nav">
            <a href="#top">
                <img src={img_inicio} alt="Voltar para o Início da Página" title="Voltar para o Início da Página" className="btn-nav-topo"/>
            </a>
        </div>
    )
}

// Exporta o Componente para o uso da Aplicação!
export default CpBtnInicio;