import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

import logoImg from '../../assets/logo.svg';

import { Avatar, AvatarContainer, Container, Description, Form, IconeContainer, InputSearch, Language, LanguageOption, Line, Logo, LogoContainer, Menu, MenuList, MenuListItem, Name, Type, User } from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoImg} alt="Logo" />
        <Form>
          <InputSearch type="text" placeholder="New york" />
          <IconeContainer>
            <FiSearch />
          </IconeContainer>
        </Form>
      </LogoContainer>
      <Menu>
        <MenuList>
          <MenuListItem>
            <MdOutlineMessage size={28} />
          </MenuListItem>
          <MenuListItem>
            <HiOutlineBell size={28} />
          </MenuListItem>
          <MenuListItem>
            <AiOutlineHeart size={28} />
          </MenuListItem>
        </MenuList>
        <Line />
        <User>
          <AvatarContainer>
            <Avatar src="https://images.unsplash.com/photo-1642980074229-439281d19f29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </AvatarContainer>
          <Description>
            <Name>
              Richard Lucas
            </Name>
            <Type>Renter</Type>
          </Description>
        </User>
        <Language name="language" id="language">
          <LanguageOption value="">Lang</LanguageOption>
          <LanguageOption value="">US</LanguageOption>
          <LanguageOption value="">PT-BR</LanguageOption>
          <LanguageOption value="">PT</LanguageOption>
        </Language>
      </Menu>
    </Container>
  )
}

