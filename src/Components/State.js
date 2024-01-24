function State() {

  return (
    <div class="info">
      <h2 class="info__title">State (useState)</h2>
      <p>При разработке React-приложений состояние (state) играет важную роль. Оно представляет собой данные, которые используются внутри компонента для отслеживания и обновления информации. Состояние позволяет компонентам React быть динамичными и реагировать на изменения данных или взаимодействие пользователя. Простыми словами, это то, что ИЗМЕНЯЕТСЯ в компоненте, нежели props-ы которые неизменны.
        В React 16.8 появилась возможность использовать state в функциональных компонентах, путем использования нового хука useState.
        Хук useState позволяет функциональным компонентам в React добавлять локальное состояние. Он возвращает возвращает массив с парой значений: текущее значение состояния и функцию для его обновления. При вызове функции обновления, React перерисует компонент с новым значением состояния.
      </p>
      <pre>
        <div class="code">
{`import React, { useState } from 'react';
const [state, setState] = useState(initialState);`}<br/>
        </div>
      </pre>
      <ul>
        <li>state: текущее значение состояния.</li>
        <li>setState: функция для обновления значения состояния.</li>
      </ul>
      <h4>Создание state</h4>
      <p>Для создания состояния в функциональных компонентах используется хук useState. Он позволяет объявить переменную состояния и ее инициализацию. Например, можно создать состояние для отслеживания текущего счетчика:</p>
      <pre>
        <div class="code">
{`import React, { useState } from 'react';
const Counter = () => {
const [count, setCount] = useState(0);`}<br/>
  // Остальной код компонента
        </div>
      </pre>
      <h4>Обновление состояния</h4>
      <p>Для обновления состояния в функциональных компонентах используется функция setCount, которая является вторым элементом массива, возвращаемого useState. При вызове setCount передается новое значение состояния. React автоматически обновит компонент и перерисует его с новым значением состояния:</p>
      <pre>
        <div class="code">
{`const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1); }
  // Остальной код компонента`}
        </div>
      </pre>
      <h4>Применение состояния в компонентах</h4>
      <p>Состояние позволяет компонентам отображать и обновлять данные. Например, состояние может использоваться для отслеживания введенных пользователем значений в форме или для хранения информации, полученной из сервера. Состояние также позволяет реагировать на события и обновлять компонент в соответствии с новыми данными.
         Пример использования состояния для отслеживания текущего счетчика и его отображения:</p>
      <pre>
        <div class="code">
{`const Counter = () => {
  const [count, setCount] = useState(0);
    const increment = () => {
    setCount(count + 1); }
  return (
    <div>
      <p>Счетчик: {count}</p>
        <button onClick={increment}>Увеличить</button>
    </div>
  )}`}
        </div>
      </pre>
      <h4>Примеры использования state в компонентах</h4>
      <p>Управление отображением элементов</p>
      <pre>
        <div class="code">
{`import React, { useState } from 'react';
const Example = () => {
const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  }
  return (
    <div>
      <button onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p>Этот текст может быть скрыт или показан</p>}
    </div>
  )}`}<br/>
        </div>
      </pre>
      <p>Управление input-ом</p>
      <pre>
        <div class="code">
{`import React, { useState } from 'react';
const Example = () => {
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);}
  return (
    <div>
      <label>
        Введи свое имя:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Привет, {name}!</p>
    </div>
  )}`}<br/>
        </div>
      </pre>
      <p>Управление стилями</p>
      <pre>
        <div class="code">
{`import React, { useState } from 'react';
const Example = () => {
  const [color, setColor] = useState('red');
  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red'); }
  const style = {
    color: color };
  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Этот текст может быть красным или синим</p>
    </div>
  )}`}<br/>
        </div>
      </pre>
    </div>
    );
  }
  export default State;