function RefsFragmentKeyReactMemoUseMemo() {

  return (
    <div class="info">
      <h2 class="info__title">Refs, Fragment, key, React.memo, useMemo</h2>
      <h4 class="info__title">Refs</h4>
      <p>Refs предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().
        Есть несколько хороших примеров использования ссылок:<br/>
        1. Управление фокусом, выделение текста.<br/>
        2. Выполнение анимаций.<br/>
        3. Интеграция со сторонними библиотеками, взаимодействующие с DOM.<br/>
        Управление фокусом - лучший из них:</p>
      <pre>
        <div class="code">
{`import React, { useEffect, useState, Fragment, useRef } from 'react'
const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}
export default Test`}
        </div>
      </pre>
      <h4 class="info__title">Fragment</h4>
      <p>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.
          Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
      <pre>
        <div class="code">
{`import React, { Fragment } from 'react';
//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}
        </div>
      </pre>
      <h4 class="info__title">key</h4>
      <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
      <pre>
        <div class="code">
{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);`}
        </div>
      </pre>
      <h4 class="info__title">React.memo</h4>
      <p>React.memo — это функция высшего порядка (Higher Order Component) в библиотеке React, которая оптимизирует производительность функциональных компонентов. Она предназначена для предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.
        По умолчанию, при каждом изменении состояния или пропсов компонент перерисовывается, даже если результирующий визуальный вывод не изменился. Это может быть неэффективно для компонентов, которые не зависят от изменений внешних данных и всегда отображают одинаковый результат.
        React.memo использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга компонента и сравнивать его с текущими пропсами. Если пропсы не изменились, React.memo предотвращает повторный рендеринг компонента, возвращая сохраненный результат.
        Пример использования React.memo:</p>
      <pre>
        <div class="code">
{`import React from 'react';
const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов
  return (
    <div>
      {props.text}
    </div>
  );
});`}
        </div>
      </pre>
      <h4 class="info__title">useMemo</h4>
      <p>React хук useMemo предназначен для мемоизации вычислений в функциональных компонентах. Он позволяет сохранять результат вычислений и повторно использовать его, если входные значения (зависимости) не изменились. Это может существенно повысить производительность, особенно в случаях, когда сложные вычисления выполняются при каждом рендеринге компонента. Вот несколько примеров использования useMem:</p>
      <ul>
        <li>Вычисление производительной функции:</li>
        <pre>
          <div class="code">
{`import React, { useMemo } from 'react';
const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    // Например, фильтрация или сортировка массива данных
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"
  return (
    <div>
      {processedData}
    </div>
  );
};`}
          </div>
        </pre>
        <li>Кэширование компонента:</li>
        <pre>
          <div class="code">
{`import React, { useMemo } from 'react';
const ExpensiveComponent = ({ propA, propB }) => {
  // Сложный компонент, требующий много ресурсов
  return (
    // ...
  );
};
const MyComponent = ({ data }) => {
  const cachedComponent = useMemo(() => {
    // Компонент будет кэширован при каждом изменении propA или propB
    return <ExpensiveComponent propA={propA} propB={propB} />;
  }, [propA, propB]);
  return (
    <div>
      {cachedComponent}
    </div>
  );
};`}
            </div>
          </pre>
        </ul>
      </div>
    );
  }
  export default RefsFragmentKeyReactMemoUseMemo;