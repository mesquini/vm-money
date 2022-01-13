import { useState } from 'react';

import logoImg from '../../assets/logo.svg'

import {Container, Content} from './styles'

interface IHeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({onOpenNewTransitionModal}: IHeaderProps) {
  

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="vm money" />
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova transação
        </button>

        

      </Content>
    </Container>
  )
}