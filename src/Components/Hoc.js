function Hoc() {

    return (
      <div class="info">
        <h2 class="info__title">HOС (Higher-Order Components)</h2>
        <p>Higher Order Components (HOC) являются паттерном в библиотеке React, позволяющим повысить переиспользуемость компонентов и управление состоянием.</p>
        <ul>
          <li>Как создать HOC?</li>
          <pre>
            <div class="code">
{`const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};`}
            </div>
          </pre>
          <li>Как прокинуть props?</li>
          <pre>
            <div class="code">
 {`const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { additionalProp: "I'm extra!" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};`}
            </div>
          </pre>
          <li>Аутентификация</li>
          <pre>
            <div class="code">
{`const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuthStatus(); 
    // Предположим, здесь происходит проверка аутентификации.
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please log in to access this content.</p>;
    }
  };
};
const AuthenticatedComponent = withAuth(ProfileComponent);`}
            </div>
          </pre>
          <li>Локализация</li>
          <pre>
            <div class="code">
{`const withLocalization = (WrappedComponent) => {
  return (props) => {
    const locale = getCurrentLocale(); // Получение текущей локали.
    const localizedContent = getLocalizedContent(locale);
    return <WrappedComponent {...props} 
    localizedContent={localizedContent} />;
  };
};
const LocalizedProfile = withLocalization(ProfileComponent);`}
            </div>
          </pre>
          <li>Управление состоянием</li>
          <pre>
            <div class="code">
{`// HOC
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};
// Компонент, который будет обернут HOC
const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
// Применение HOC к компоненту
const CounterWithHOC = withCounter(Counter);
// Компонент, использующий обернутый компонент с HOC
const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterWithHOC />
    </div>
  );
};`}
            </div>
          </pre>
        </ul> 
      </div>
    );
  }
  export default Hoc;