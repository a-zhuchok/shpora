function Context () {
    return (
      <div class="info">
        <h2 class="info__title">Context (useContext)</h2>
        <p>Context предоставляет способ передачи данных через дерево компонентов без явной передачи пропсов от родительских компонентов к дочерним. Это особенно полезно, когда необходимо передать данные глубоко в иерархии компонентов, избегая "просачивания" пропсов через несколько промежуточных компонентов.</p>
        <p>В React пропс-дриллинг (props drilling) - это паттерн, который возникает, когда компоненту нужно передать данные через несколько уровней других компонентов. Он возникает, когда компоненты передают свойства (props) другим компонентам, чтобы они могли использовать эти данные.</p>
        <p>Примером пропс-дриллинга может быть следующая ситуация:</p>
        <pre>
          <div class="code">
{`const GrandParentComponent = ({ value }) => {
  return (
    <ParentComponent value={value} />
  );
}
const ParentComponent = ({ value }) => {
  return (
    <ChildComponent value={value} />
  );
}
const ChildComponent = ({ value }) => {
  return (
    <div>{value}</div>
  );
}`}
          </div>
        </pre>
        <p>Для работы с Context в React необходимо выполнить следующие шаги:</p>
        <ul>
          <li>Шаг 1: Создание контекста</li>
          <pre>
            <div class="code">
{`// MyContext.js
import React from 'react';
const MyContext = React.createContext();
export default MyContext;`}
            </div>
          </pre>
          <li>Шаг 2: Предоставление значения контекста</li>
          <pre>
            <div class="code">{`// App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';
const App = () => {
  const value = 'Hello, Context!';
  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}
export default App;`}
            </div>
          </pre>
          <li>Шаг 3: Использование хука useContext</li>
          <pre>
            <div class="code">
{`// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';
function ComponentA() {
  const value = useContext(MyContext);
  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}
export default ComponentA;`}
            </div>
          </pre>
          <li> Шаг 4: Подписка на контекст</li>
          <pre>
            <div class="code"> 
{`// ComponentA.js
import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';
function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}
export default ComponentA;`}
            </div>
          </pre>
        </ul>
      </div>
    );
  }
  export default Context;