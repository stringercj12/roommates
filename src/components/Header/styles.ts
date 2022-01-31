import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;0
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 77px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.third};
  border-radius: 10px;
  position: relative;
`;

export const InputSearch = styled.input`
  width: 464px;
  background-color: ${({ theme }) => theme.colors.third};
  border: none;
  border-radius: 10px;
  padding: 21px 29px;
  color:  ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  line-height: 19px;
  &::placeholder {
    font-weight: bold;
    color:  ${({ theme }) => theme.colors.black};
  }
  &:focus {
    outline: ${({ theme }) => theme.colors.third};
  }
  &:focus-within {
    border-bottom-width: 2px;
    border-bottom-color:  ${({ theme }) => theme.colors.primary};
  }
`;

export const IconeContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  ${({ theme }) => theme.colors.third};
  background-color:  ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;


export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuListItem = styled.li`
  margin: 0 20px;
  color: #a5a7a7;
  width: 30px;
  height: 30px;
  &:hover {
    color: #2b67f6;
  }
`;

export const Line = styled.div`
  width: 0.97px;
  height: 54.57px;
  color: #a5a7a7;
  background: #a5a7a7;
  border-radius: 8px;
  display: inline-block;
  padding: 1px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const AvatarContainer = styled.div`
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Description = styled.div``;

export const Name = styled.h4`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
`;

export const Type = styled.h6`
  font-size: 12px;
  font-family: Roboto, sans-serif;
  color: #2b67f6;
`;

export const Language = styled.select`
  margin-left: 30px;
  width: 86.73px;
  height: 54.57px;

  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 54px;

  appearance: none;
  background-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #2e2e2e;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const LanguageOption = styled.option`

`;