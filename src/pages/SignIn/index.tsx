import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container, Content, Background, ContentFooter } from './styles';

import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('signIn');
  }, []);

  return (
    <Container>
      <Background>
        <div>
          <img src={logoImg} alt="Proffy" />
          <h1>Sua plataforma de estudos online.</h1>
        </div>
      </Background>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
        <ContentFooter>
          <div>
            <p>Não tem conta?</p>
            <span>
              É de graça <img src={purpleHeart} alt="Coração roxo" />
            </span>
          </div>
          <a href="/">Cadastre-se</a>
        </ContentFooter>
      </Content>
    </Container>
  );
};

export default SignIn;
