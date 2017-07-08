import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Layout from './components/Layout';

import Header from './components/header';

import Home from './screens/Home';
import Series from './screens/Series';


export default () => (
	<div id="app">
		<Header />

		<Layout>
			<Router>
				<Home path="/" />
				<Series path="/series" />
			</Router>
		</Layout>

	</div>
);
