import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  display: inline-block;
  color: black;
  padding: 5px;
  margin: 0;

  :hover,
  :focus {
    background-color: teal;
    color: white;
    border-radius: 4px;
  }
`;

export const FilmItem = styled.li`
  list-style: none;
`;
