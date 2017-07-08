import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
  z-index: 50;

	h1 {
		float: left;
		margin: 0;
		padding: 0 15px;
		font-size: 24px;
		line-height: 56px;
		font-weight: 400;
		color: #111;
	}
`;

const Nav = styled.nav`
	float: right;
  font-size: 100%;
  font-size: 17px;

	a {
		display: inline-block;
		height: 56px;
		line-height: 56px;
		padding: 0 15px;
		min-width: 50px;
		text-align: center;
		text-decoration: none;
		color: #111;
		font-weight: 700;

		&:hover,
		&:active,
		&.active {
			color: black;
		}
	}
`;


export default class Header extends Component {
	render() {
		return (
			<Wrapper>
				<Link activeClassName="active" href="/">
					<h1>TFN</h1>
				</Link>
				<Nav>
					<Link activeClassName="active" href="/series">Series</Link>
				</Nav>
			</Wrapper>
		);
	}
}
