function ReactRouterV6() {

  return (
    <div class="info">
      <h2 class="info__title">Роутинг в React с помощью React Router V6</h2>
      <h4>ОСНОВНЫЕ КОМПОНЕНТЫ, которые присутствуют в react-router-dom v6:</h4>
      <ul>
        <li>BrowserRouter: Это компонент, который оборачивает ваше приложение и предоставляет контекст для маршрутизации. Он используется для настройки основного маршрутизатора в приложении.</li>
        <li>Routes: Это компонент, который содержит определения маршрутов и соответствующих им компонентов. Вы определяете маршруты внутри компонента Routes, используя элемент Route.</li>
        <li>Route: Компонент Route используется для определения отдельных маршрутов и связанных с ними компонентов. Вы можете определить маршруты с помощью элемента Route, указывая путь URL и связанный с ним компонент, который будет отображаться при совпадении маршрута.</li>
        <li>Link и NavLink: Компоненты Link и NavLink используются для создания ссылок для навигации между маршрутами. Они работают аналогично версии 5, позволяя пользователю переходить к соответствующим маршрутам без перезагрузки страницы. NavLink также предоставляет возможности для стилизации активных ссылок и текущего маршрута.</li>
        <li>liOutlet: Компонент Outlet является контейнером, в котором будут отображаться компоненты, связанные с соответствующими маршрутами. Он заменяет Switch из версии 5 и автоматически выбирает и рендерит компонент, соответствующий текущему маршруту.</li>
        <li>useNavigate: Хук useNavigate используется для программной навигации между маршрутами. Он позволяет вам переходить к другим маршрутам из компонентов или обработчиков событий.</li>
        <li>useParams: Хук useParams используется для получения параметров маршрута, переданных через URL. Он позволяет вам извлекать и использовать динамические данные из пути маршрута.</li>
        <li>useLocation: Хук useLocation используется для получения информации о текущем URL. Он предоставляет доступ к объекту location, который содержит информацию о текущем пути, параметрах и других деталях URL.</li>
      </ul>
      <h4>Установка и настройка React Router Dom v6:</h4>
      <pre>
        <div class="code">{`npm install react-router-dom@next`}
        </div>
      </pre>
      <h4>Импорт и использование BrowserRouter</h4>
      <ul>
        <li>В файле, где вы хотите использовать React Router Dom, добавьте следующий импорт:</li>
        <pre> 
          <div class="code">{`import { BrowserRouter } from 'react-router-dom';`}
          </div>
        </pre>
        <li>Затем оберни приложение в компонент BrowserRouter. Это можно сделать в корневом файле проекта, например, в файле index.js, который используется для рендеринга  приложения:</li>
          <pre>
            <div class="code">
{`import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)`}
            </div>
          </pre>
        </ul>
        <h4 class="info__title">Основные компоненты React Router Dom v6</h4>
        <ul>
          <li>Routes - это компонент-контейнер, в котором определяют все маршруты в приложении. </li>
          <li>Route - это компонент, который определяет отдельный маршрут внутри Routes</li>
          <pre>
            <div class="code">
{`import { Routes, Route } from 'react-router-dom';
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}
            </div>
          </pre>
          <li>Link используется для создания ссылок для навигации между маршрутами в приложении.</li>
          <pre>
            <div class="code">
{`import { Link } from 'react-router-dom';
<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>`}
            </div>
          </pre>
          <li>NavLink позволяет создавать активные ссылки, добавляя класс "active" к текущему активному маршруту.</li>
          <pre>
            <div class="code">
{`import { NavLink } from 'react-router-dom';
<NavLink to="/" activeClassName="active">Главная</NavLink>
<NavLink to="/about" activeClassName="active">О нас</NavLink>
<NavLink to="/contact" activeClassName="active">Контакты</NavLink></div>`}
            </div>
          </pre>
          <li>useNavigate - это хук, который позволяет перенаправлять пользователя на другие маршруты в React Router Dom v6.</li>
          <pre>
            <div class="code">
{`import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};`}
            </div>
          </pre>
          <li>useParams - это хук, который позволяет получать параметры из маршрута в React Router Dom v6.</li>
          <pre>
            <div class="code">
{`import { useParams } from 'react-router-dom';
const UserProfile = () => {
  const params = useParams();
  return (
    <div>
      <h1>Профиль пользователя: {params.username}</h1>
    </div>
  );
};`}
            </div>
          </pre>
          <li>useLocation - это хук, который позволяет получать информацию о текущем URL и его параметрах в React Router Dom v6.</li>
          <pre>
            <div class="code">
{`import { useLocation } from 'react-router-dom';
const Page = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Текущий URL: {location.pathname}</h1>
    </div>
  );
};`}
            </div>
          </pre>
          <li>Outlet - играет ключевую роль в отображении компонентов, соответствующих текущему маршруту.</li>
          <pre>
            <div class="code">
{`import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <nav>
        {/* Навигационные ссылки */}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};`}
            </div>
          </pre>
        </ul>
      </div>
    );
  }
  export default ReactRouterV6;