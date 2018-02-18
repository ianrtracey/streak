import React from 'react';
import '../style.css';
import Header from '../components/header';
import NavBar from '../components/navbar';
import Login from '../components/login';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';
import Page from '../layouts/page';

const Index = () => (
  <Page>
    <p>hello</p>
  </Page>
);

export default withRedux(initStore, null, null)(Index);
