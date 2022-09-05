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
  const [isEdit, setIsEditMode] =  React.useState(false);

  const handleSetMode = () => {
    setIsEditMode(!isEdit);
  }



  return (
    <div className="App">
      { !isLogin && <LoginPage></LoginPage> }
      { 
        isLogin && <div>
            <MainNav isEdit={isEdit} handleSetMode={handleSetMode}></MainNav>
            <BoardPage isEdit={isEdit} handleSetMode={handleSetMode}></BoardPage>
          </div>
      }
    </div>
  );
}

export default App;
