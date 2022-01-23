import React, { useState } from "react";
import "./App.css";
import Contents from "./components/Contents";
function App() {
  const [state, setState] = useState(1);
  const handleClick = (e) => {
    setState(+e.target.id);
  };
  return (
    <div className="App">
      <header>
        <h1>l6_t6: условный рендеринг, задание 3</h1>
        <menu>
          <button id={1} onClick={handleClick}>
            Главная
          </button>
          <button id={2} onClick={handleClick}>
            Еда
          </button>
          <button id={3} onClick={handleClick}>
            Напитки
          </button>
        </menu>
      </header>

      <main>
        {state === 1 && (
          <>
            <h2>Добро пожаловать!</h2>
            <p>Ресторан "Ошибка Компиляции" всегда рад гостям!</p>
            <p>Работаем с 10 и до последнего пропса</p>
          </>
        )}
        {state > 1 && (
          <Contents
            goodsType={
              state === 2 ? "food" : state === 3 ? "drinks" : "default"
            }
          />
        )}
      </main>
    </div>
  );
}

export default App;
