import styled from '@emotion/styled';

export const Category = styled.div`
  width: 88%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 120px;
  text-align: center;

  & > svg {
    margin-bottom: 10px;
    height: 40px;

    > * {
      fill: #454545;
      transition: 0.2s;
    }
  }

  &.user {
    > div {
      display: block;
    }
    > svg > * {
      fill: #d9d9d9;
    }
  }
  &.like {
    > div {
      display: block;
    }
    > svg > * {
      fill: #6c8ee5;
    }
  }
  &.dislike {
    > div {
      display: block;
    }
    > svg > * {
      fill: #ff9090;
    }
  }
`;

export const BottomLine = styled.div`
  display: none;
  width: 100%;
  height: 6px;
  background-color: #d5b2e1;
  border-radius: 20px;
`;

export const VideoSection = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  gap: 13px 13px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 20px;
`;
