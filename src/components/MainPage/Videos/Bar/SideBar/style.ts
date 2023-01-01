import styled from '@emotion/styled';

export const VideoSideBar = styled.section`
  position: absolute;
  top: 2.8%;
  right: 0;
  width: 17%;
  justify-content: space-between;
  height: 58vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Sound = styled.div`
  cursor: pointer;
  margin-left: 7px;
`;

export const Interaction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const SvgBox = styled.div`
  & > svg {
    width: 75%;
    height: 75%;
  }

  & > svg > * {
    cursor: pointer;
    fill: white;
  }
`;

export const Value = styled.p`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const CmmentWrap = styled.div`
  cursor: pointer;
`;
