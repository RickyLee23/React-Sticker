import './App.scss';
import React from 'react';
// @ts-ignore
import LoginPage from './LoginPage/LoginPage.tsx';
// @ts-ignore
import MainNav from './MainNav/MainNav.tsx';
// @ts-ignore
import BoardPage from './BoardPage/BoardPage.tsx';

function App() {

  const isLogin = true;

  return (
    <div className="App">
      { !isLogin && <LoginPage></LoginPage> }
      { 
        isLogin && <div>
            <MainNav></MainNav>
            <BoardPage></BoardPage>
          </div>
      }
    </div>
  );
}

export default App;
