import {Container, Title, Content} from './Section.styled'

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title> 
      <Content>{children}</Content>
    </Container>
  );
};
