function Storages() {

  return (
    <div class="info">
      <h2 class="info__title">Про STORAGEs (Local Storage, Session Storage, Local Forage…)</h2>
      <h4 class="info__title">Local Storage</h4>
      <p>Local Storage - это механизм, который позволяет веб-приложениям сохранять данные локально в браузере. Это означает, что данные будут сохранены после закрытия браузера и перезагрузки страницы. LocalStorage может быть использован для хранения различных типов данных, таких как строки, числа, булевы значения и объекты. Он может быть полезен для хранения пользовательских настроек (например темная тема на сайте), предпочтений пользователя и других данных, которые могут быть использованы для персонализации пользовательского опыта.</p>
      <ul>
        <li>Для записи данных в LocalStorage можно использовать localStorage объекта window в JavaScript. Например, чтобы записать строку "Hello, Redev!" в LocalStorage, можно использовать:</li>
        <pre>
          <div class="code">
{`localStorage.setItem('myData', 'Hello, Redev!');`}
          </div>
        </pre>
        <li>Чтобы получить данные из LocalStorage, можно использовать метод getItem() объекта localStorage. Например, чтобы получить значение, которое мы только что записали, можно использовать следующий код:</li>
        <pre>
          <div class="code">
{`const myData = localStorage.getItem('myData');`}
          </div>
        </pre>
      </ul>
      <h4 class="info__title">Использование Cookies в React приложениях: Хранилище состояния и работа с ним</h4>
      <p>Cookies - это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на компьютере пользователя через его веб-браузер. Они представляют собой удобный механизм для хранения небольших данных, связанных с пользователем и веб-сайтом. В контексте React приложений, cookies могут быть использованы для сохранения состояния приложения и обеспечения персонализации.</p>
      <ul>
        <li>Установка Cookie:</li>
        <pre>
          <div class="code">
{`document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";`}
          </div>
        </pre>
        <li>Получение Cookie:</li>
        <pre>
          <div class="code">
{`// Получение всех cookie в виде строки
const allCookies = document.cookie;
// Разбивка строки на отдельные cookie
const cookiesArray = allCookies.split("; ");
const cookies = {};
cookiesArray.forEach(cookie => {
  const [name, value] = cookie.split("=");
  cookies[name] = value;
});`}
          </div>
        </pre>
        <li>Удаление Cookie:</li>
        <pre>
          <div class="code">
{`document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
          </div>
        </pre>
      </ul>
      <h4 class="info__title">Session Storage</h4>
      <p>Session Storage - это еще один механизм хранения данных в браузере, который работает так же, как и LocalStorage. Однако Session Storage имеет ряд отличий от LocalStorage. Session Storage сохраняет данные только на время сеанса браузера. Это означает, что данные будут удалены после закрытия браузера или вкладки. Это может быть полезно для хранения временных данных, таких как формы, которые не нужно сохранять после закрытия браузера. Кроме того, Session Storage имеет более ограниченный объем хранения данных, чем LocalStorage. Это означает, что он может быть полезен для хранения небольших объемов данных, которые нужно сохранить только на время сеанса браузера.</p>
      <pre>
        <div class="code">
{`sessionStorage.setItem('myData', 'Hello, Redev!');`}
        </div>
      </pre>
    </div>
    );
  }
  export default Storages;