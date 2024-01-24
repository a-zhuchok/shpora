function Components() {

return (
  <div class="info">
    <h2 class="info__title">Components</h2>
    <p>Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения.
       Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.
       Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране. 
        React компоненты могут быть классовыми или функциональными. 
    </p>
    <ul>
      <li><p>Пример объявления классового компонента в React:</p></li>
      <pre>
        <div class="code">
          <code>
{`class MyComponent extends React.Component {
  render() {
   return <div>Hello, Redev!</div>;
  }}
export default MyComponent;`}
          </code>
        </div>
      </pre>
      <li><p>Пример объявления функционального компонента в React:</p></li>
      <pre>
        <div class="code">
          <code>
{`const MyComponent = () => {
  return <div>Hello, Redev!</div>;
}
export default MyComponent;`}
          </code>
        </div>
      </pre>
    </ul>
    <p> Разница заключается в том, что классовый компонент наследуется от базового класса React.Component и имеет доступ к дополнительным функциям, таким как состояние и методы жизненного цикла.</p>
  </div>
  );
}
  export default Components;