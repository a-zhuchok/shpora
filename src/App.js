import Menu from './Components/Menu.js';
import Content from './Components/Content.js';
import Footer from './Components/Footer.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProjectStructure from './Components/ProjectStructure.js';
import VirtualDOM from './Components/VirtualDOM.js';
import Components from './Components/Components.js';
import Props from './Components/Props.js';
import State from './Components/State.js';
import LifeCycle from './Components/LifeCycle.js';
import Events from './Components/Events.js';
import ReactHookFormVSformik from './Components/ReactHookFormVSformik.js';
import Hoc from './Components/Hoc.js';
import ReactRouterV6 from './Components/ReactRouterV6.js';
import Storages from './Components/Storages.js';
import RefsFragmentKeyReactMemoUseMemo from './Components/RefsFragmentKeyReactMemoUseMemo.js';
import Context from './Components/Context';

function App() {
  return (
    <div class="container">
    <Menu/>
    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/ProjectStructure" element={<ProjectStructure/>} />
      <Route path="/VirtualDOM" element={<VirtualDOM/>} />
      <Route path="/Components" element={<Components/>} />
      <Route path="/Props" element={<Props />}/>
      <Route path="/State" element={<State />}/>
      <Route path="/LifeCycle" element={<LifeCycle />}/>
      <Route path="/Events" element={<Events/>} />
      <Route path="/ReactHookFormVSformik" element={<ReactHookFormVSformik/>} />
      <Route path="/Hoc" element={<Hoc/>} />
      <Route path="/ReactRouterV6" element={<ReactRouterV6/>} />
      <Route path="/Storages" element={<Storages />} />
      <Route path="/RefsFragmentKeyReactMemoUseMemo" element={<RefsFragmentKeyReactMemoUseMemo/>} />
      <Route path="/Context" element={<Context/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;