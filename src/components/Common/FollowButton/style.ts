import styled from '@emotion/styled';

export const FollowButton = styled.div`
  width: 86.4%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: auto;
  border-radius: 4px;
  border: 1.5px solid #d5b2e1;
  cursor: pointer;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #d5b2e1;
  transition: 0.2s;

  & > svg {
    margin-top: 10px;
  }

  :hover {
    border: 1.5px solid #d5b2e1;
    color: white;
    background-color: #d5b2e1;

    transition: 0.2s;

    & > svg > * {
      fill: #ffffff;
    }
  }

  & > svg > * {
    fill: #d5b2e1;
  }
`;
