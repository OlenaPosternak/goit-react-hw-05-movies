import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: 0px 4px 4px rgba(0, 0, 0, 0.15), #333c4e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const BackButton = styled.button`
  width: 150px;
  padding: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: teal;
  font-size: 16px;
  color: white;
`;
