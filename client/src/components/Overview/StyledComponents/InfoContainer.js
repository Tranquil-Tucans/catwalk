import styled from 'styled-components';

const InfoContainer = styled.div`
  display: ${(props) => (props.windowWidth > 981 ? 'initial' : 'none')};
  max-width: 430px;
  flex-grow: 1;
  flex-basis: 360px;
  align-self: start;
  position: sticky;
  top: 0px;
  padding-left: 30px;
`;

export default InfoContainer;
