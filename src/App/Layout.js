import React from 'react';
import Header from '../components/Header';
import { LeftSideBar } from '../components/LeftSideBar';
import style from '../styles/Layout.module.css';
import Main from '../components/Main';
import RightSideBar from '../components/RightSideBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={style['layout']}>
        <div className={style['left-side-bar']}>
          <LeftSideBar />
        </div>
        <div className={style['main-section']}>
          <Main />
        </div>
        <div className={style['right-side-bar']}></div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default Layout;
