function LifeCycle() {

    return (
      <div class="info">
        <h2 class="info__title">LifeCycle</h2>
        <h4>Методы жизненного цикла в React можно разделить на следующие группы:</h4>
        <ul>
          <li>Методы монтирования (Mounting Methods):</li>
          <ul>
            <li>constructor()</li>
            <li>render()()</li>
            <li>componentDidMount()</li>
          </ul>
          <li>Методы обновления (Updating Methods):</li>
          <ul>
            <li>shouldComponentUpdate()</li>
            <li>render()</li>
            <li>componentDidUpdate()</li>
          </ul>
          <li>Методы размонтирования (Unmounting Methods):</li>
          <ul>
            <li>componentWillUnmount()</li>
          </ul>
          <li>Методы обработки ошибок (Error Handling Methods):</li>
          <ul>
            <li>componentDidCatch()</li>
          </ul>
        </ul>
        <h4>Жизненный цикл классовых компонентов:</h4>
        <ul>
          <li>Mounting (Монтирование):</li>
          <ul>
            <li>constructor(): Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.</li>
            <li>render(): Отрисовывает компонент и возвращает React элементы.</li>
            <li>componentDidMount(): Вызывается после рендеринга компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.</li>
          </ul>
          <p>ПРИМЕР</p>
          <pre>
            <div class="code">
{`class MyComponent extends React.Component {
  constructor (props) {
     super(props)
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }
  increment () {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount () {
    // Здесь можно выполнять запросы к серверу.
    console.log('Компонент был смонтирован!')}
  render () {
    return (
       <div>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.increment}>+++</button>
      </div>
    )}}`}
            </div>
          </pre>
        </ul>
        <ul>
          <li>Updating (Обновление):</li>
          <ul>
            <li>shouldComponentUpdate(nextProps, nextState): Вызывается перед обновлением компонента. Используется для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.</li>
            <li>render(): Отрисовывает компонент и возвращает React элементы.</li>
            <li>componentDidUpdate(prevProps, prevState): Вызывается после обновления компонента и его рендеринга. Используется для выполнения дополнительных действий после обновления компонента, например, для выполнения запросов к серверу на основе новых пропсов.</li>
          </ul>
          <p>ПРИМЕР</p>
          <pre>
            <div class="code">
{`class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // В этом примере компонент будет обновляться только при изменении свойства name.
    return nextProps.name !== this.props.name
  }
  componentDidUpdate (prevProps, prevState) {
    // Здесь можно выполнять действия после обновления компонента.
    console.log('Компонент был обновлен!')
  }
  render () {
    return <div>Hello, {this.props.name}!</div>
  }}`}
            </div>
          </pre>
        </ul>
        <ul>
          <li>Unmounting (Размонтирование):</li>
          <ul>
            <li>componentWillUnmount(): Вызывается перед удалением компонента из DOM. Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.</li>
          </ul>
          <p>ПРИМЕР</p>
          <pre>
            <div class="code">
{`class WillUnmountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
   }}
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)}
  componentWillUnmount () {
    clearInterval(this.timerID)
    alert('Компонент удален из DOM')
  }
  render () {
    return (
      <div>
       <p>Время: {this.state.time} секунд</p>
      </div>
    )}}`}
            </div>
          </pre>
        </ul>
        <ul>
          <li>Error Handling (Обработка ошибок):</li>
          <ul>
            <li>componentDidCatch(error, info): Вызывается при возникновении ошибки в дочерних компонентах. Используется для отлавливания и обработки ошибок.</li>
          </ul>
          <p>ПРИМЕР</p>
          <pre>
            <div class="code">
{`class ErrorBoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }}
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })}
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Дополнительная информация: {this.state.errorInfo &&
             this.state.errorInfo.componentStack}</p>
        </div>
      )}
    return this.props.children;
  }}
class App extends Component {
  render() {
    return (
      <div>
        <h1>Пример использования ErrorBoundary</h1>
       <ErrorBoundaryExample>
          /* Твой компонент с возможной ошибкой */
          <ComponentWithError />
        </ErrorBoundaryExample>
      </div>
    )}}
const ComponentWithError = () => {
  const [throwError, setThrowError] = useState(false)
  const handleClick = () => setThrowError(presState => !presState.throwError)
  if (throwError) {
    // Имитация ошибки
    throw new Error('Это ошибка в компоненте ComponentWithError')
  }
  return (
    <div>
      <h3>Компонент с возможной ошибкой</h3>
      <button onClick={() => handleClick()}>Генерировать ошибку</button>
    </div>
  )}`}
            </div>
          </pre>
        </ul>
        <h4>Жизненный цикл функциональных компонентов:</h4>
        <p>useEffect - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах. 
           По сути вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла. 
           Первый параметр: Функция, которая должна выполниться при монтировании компонента и при каждом обновлении.
           Второй параметр: Массив зависимостей определяет, на что конкретно должен реагировать useEffect. Если массив пуст, useEffect выполняется только при монтировании и размонтировании. Если в массиве указаны определенные значения, то useEffect будет выполняться только тогда, когда эти значения изменяются.
        </p>
        <ul>
          <li>Mounting (Монтирование):</li>
          <ul>
            <li>{`useEffect(() => {}, [])`}: Заменяет componentDidMount(). Выполняет побочные эффекты только один раз после монтирования. 
                    Передавая пустой массив зависимостей [], можно сделать хук useEffect аналогомcomponentDidMount.</li>
          </ul>
          <li>Updating (Обновление):</li>
          <ul>
            <li>{`useEffect(() => {}, [dependency])`}: Заменяет componentDidUpdate(). Позволяет указать зависимость для выполнения функции только при изменении определенных props или state.  </li>
            <li>{`useEffect(() => {})`}: Выполняет функцию после каждого рендеринга компонента. Отрабатывает как  componentDidMount() и componentDidUpdate()</li>
          </ul>
          <li>Unmounting (Размонтирование):</li>
          <ul>
            <li>{`useEffect(() => () => {})`}: Заменяет componentWillUnmount(). Выполняет очистку и отписку от побочных эффектов при размонтировании (удалении из DOM) компонента.</li>
          </ul>
        </ul>
      </div>
    );
  }
  export default LifeCycle;