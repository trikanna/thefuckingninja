import { h, Component } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
	padding: 56px 20px 20px 20px;
  min-height: 100%;
  width: 100%;
`;

export default class Layout extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}