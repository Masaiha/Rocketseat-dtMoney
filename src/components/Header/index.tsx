import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
      onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

 return (
       <header>
           <Container>
                  <Content>
                  <img src={logo} alt="dt money" />
                  <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova Transação
                  </button>
                  </Content>
           </Container>
       </header>
 ) }