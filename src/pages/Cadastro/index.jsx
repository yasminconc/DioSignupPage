import React from "react";
import { Header } from "../../components/Header";
import { BoxInput, ContainerInput, FirstDescription, Footer, LeftSide, MainContainer, Middle, RightSide, SecondDescription, Teste } from "./styles";
import person from "../../assets/person.svg";
import password from "../../assets/password.svg";
import email from "../../assets/email.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate()
  return (
    <>
      <MainContainer>
        <Header />

        <Middle>
          <LeftSide>
            <p>
              A plataforma para você aprender com experts, dominar as principais tecnologias e
              entrar mais rápido nas empresas mais desejadas.
            </p>
          </LeftSide>

          <RightSide>
            <h1>Comece agora grátis</h1>
            <p>Crie sua conta e make the change._</p>

            <ContainerInput>
              <BoxInput>
                <img src={person} alt="" />
                <input type="text" placeholder="Nome completo" />
              </BoxInput>
              <BoxInput>
                <img src={email} alt="" />
                <input type="email" placeholder="E-mail" />
              </BoxInput>
              <BoxInput>
                <img src={password} alt="" />
                <input type="text" placeholder="Password" />
              </BoxInput>

              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </ContainerInput>

            <Footer>
              <FirstDescription>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
                Privacidade e os Termos de Uso da DIO.
              </FirstDescription>
              <SecondDescription>
                Já tenho conta. <span onClick={() => navigate('/login')}>Fazer login</span>
              </SecondDescription>
            </Footer>
          </RightSide>
        </Middle>
      </MainContainer>
    </>
  );
};

export default Cadastro;
