import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div class="menu">
      <Link to="/"><img width="32" height="32" src="https://img.icons8.com/windows/32/home.png" alt="home"/></Link>
      <h2>React</h2>
    </div>
  );
}
export default Menu;