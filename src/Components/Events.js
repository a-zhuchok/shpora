function Events() {

    return (
      <div class="info">
        <h2 class="info__title">Events</h2>
        <p>В React события (events) являются важной частью взаимодействия с пользователем. Они позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие. 
           Вот пять наиболее часто используемых событий в React и примеры их применения:</p>
        <ul>
          <li>onClick (Клик):</li>
          <pre>
            <div class="code">
{`const handleClick = () => {
  console.log('Кликнули!');
}
const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  )}`}
            </div>
          </pre>
          <li>onChange (Изменение):</li>
          <pre>
            <div class="code">
{`const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}
const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
  )}`}
            </div>
          </pre>
          <li>onSubmit (Отправка формы):</li>
          <pre>
            <div class="code">
{`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}
const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      /* Ваши поля формы */
      <button type="submit">Отправить</button>
    </form>
    )`}
            </div>
          </pre>
          <li>onMouseOver (Наведение курсора):</li>
          <pre>
            <div class="code">
{`const handleMouseOver = () => {
  console.log('Курсор наведен!');
}
const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  )}`}
            </div>
          </pre>
          <li>onKeyDown (Нажатие клавиши):</li>
          <pre>
            <div class="code">
{`const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}
const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  )}`}
            </div>
          </pre>
        </ul>
      </div>
    );
  }
  export default Events;