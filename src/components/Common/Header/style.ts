import styled from '@emotion/styled';

export const HeaderLayout = styled.div`
  width: 89%;
  height: 80px;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const UserSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100px;
`;

export const Login = styled.p`
  font-family: 'Karla', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #80bcff;
`;
