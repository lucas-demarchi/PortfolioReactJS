import React from "react";

// Chamada da Biblioteca Hook Form.
import { useForm } from "react-hook-form";

// Chamada da Biblioteca  Yup.
import { yupResolver } from "@hookform/resolvers/yup";

// Chamada da Validação de Campos via Javascript.
import { Validar } from '../js/validar-formulario';

// Chamada dos Assets do Contato!
import icon_contact_email from '../images/icones/iconsEmail.png';
import icon_contact_telefone from '../images/icones/iconsTelefone.png';
import icon_contact_whatsapp from '../images/icones/iconsWhatsapp.png';
import icon_contact_local from '../images/icones/iconsLocalizacao.png';

const CpContato = () => {

    // Estrutura os elementos do Formulário HTML - Variáveis para os campos Input.
    const Input = ({ label, id, name, type, register, error}) => {
        return(
            <div className="form-group">
                <label>{label}</label>
                {error && <span className="msg-warning">{error.message}</span>}
                <input className="camp-form" id={id} name={name} type={type} placeholder="Digite os dados aqui..." {...register(name)}/>
            </div>
        )
    }

    // Estrutura os elementos do Formulário HTML - Variáveis para os campos Textarea.
    const Textarea = ({ label, id, name, register, error}) => {
        return(
            <div className="form-group">
                <label>{label}</label>
                {error && <span className="msg-warning">{error.message}</span>}
                <textarea className="camp-form-msg" id={id} name={name} placeholder="Digite os dados aqui..." {...register(name)}></textarea>
            </div>
        )
    }

    // Registro e verificação do Formulário, além de monitorar se o campo possui os dados ou não, caso sim, remove a mensagem, se não carrega o errors!
    // Realiza também o reset caso o botão seja clicado, lembrando que todos os recursos são construídos e executados graças as Bibliotecas HookForm e Yup!
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    });

    // Monta o pacote de informações e teste o console.log!
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className="title-contact">Contato!</h1>
                <div className="box-contact">
                    <div className="info-contact">
                        <span>Tire todas as suas dúvidas sobre os nossos serviços ou realize um orçamento.</span>
                        <span>Esses são nossos principais meios de contato:</span>
                        <ul className="itens-contato">
                            <li className="item-contato">
                                <img src={icon_contact_email} alt="E-mail para contato..." title="E-mail para contato..." className="icon-ct"/>
                                <span>contato@jptecnologia.com.br</span>
                            </li>
                            <li className="item-contato">
                                <img src={icon_contact_telefone} alt="Telefone para contato..." title="Telefone para contato..." className="icon-ct"/>
                                <span>(43) 3333-0000</span>
                            </li>
                            <li className="item-contato">
                                <img src={icon_contact_whatsapp} alt="Nos chame pelo WhatsApp..." title="Nos chame pelo WhatsApp..." className="icon-ct"/>
                                <div className="box-item-contato">
                                    <a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank" className="link-wht-contato" alt="Clique e fale direto pelo WhatsApp..." title="Clique e fale direto pelo WhatsApp..." rel="noopener noreferrer">
                                        (43) 9 0000-0000
                                    </a>
                                    <span>Clique no número!</span>
                                </div>
                            </li>
                            <li className="item-contato">
                                <img src={icon_contact_local} alt="Nossa localização..." title="Nossa localização..." className="icon-ct"/>
                                <span>Avenida Teste N°100. CEP: 00000-000 - Londrina PR.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="form-contact">

                        {/* GET: Envia os dados para a URL da página de destino. */}
                        {/* POST: Trafega os dados de forma oculta via requisição de protocólo http/https. */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Digite seu Nome:</label>
                            <Input type="text" name="nome" id="nome" placeholder="Digite seu Nome aqui..."  register={register} error={errors.nome}/>

                            <label>Digite seu E-mail:</label>
                            <Input type="email" name="email" id="email" placeholder="Digite seu E-mail aqui..."  register={register} error={errors.email}/>

                            <label>Digite seu Assunto:</label>
                            <Input type="text" name="ass" id="ass" placeholder="Digite seu Assunto aqui..."  register={register} error={errors.ass}/>

                            <label>Digite sua Mensagem:</label>
                            <Textarea placeholder="Digite sua Mensagem aqui..." name="msg" id="msg" register={register} error={errors.msg}></Textarea>

                            <div className="align-btn">
                                <button type="submit" name="btnEnviar" className="btn-enviar">ENVIAR</button>
                                <button type="reset" name="btnResetar" className="btn-resetar" onClick={() => reset()}>RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8973483268865!2d-51.178923024407304!3d-23.319482952750967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4313ff0ee975%3A0x1c33d6cf3ae5b478!2sWMBarros%20Treinamento%20em%20TI%20Cursos%20de%20Programa%C3%A7%C3%A3o%2C%20Front-end%2C%20Cria%C3%A7%C3%B5es%20de%20Sites%3A%20TUDO%20NA%20PR%C3%81TICA%20-%20PRESENCIAL%20E%20REMOTO!5e0!3m2!1spt-BR!2sbr!4v1754354513823!5m2!1spt-BR!2sbr" width="100%" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização!"></iframe>
            </div>
        </section>
    )
}

// Exporta o Componente para o uso da Aplicação!
export default CpContato;