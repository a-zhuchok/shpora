import {Link} from 'react-router-dom';


function Content() {
  return (
    <div class='content'>
      <div class='content__text'>
        <p><Link to="/ProjectStructure">Структура проекта</Link></p>
        <p><Link to="/VirtualDOM">Введение в VirtualDOM</Link></p>
        <p><Link to="/Components">Components</Link></p>
        <p><Link to="/Props">Props</Link></p>
        <p><Link to="/State">State (useState)</Link></p>
        <p><Link to="/LifeCycle">LifeCycle (useEffect)</Link></p>
        <p><Link to="/Events">Events</Link></p>
        <p><Link to="/ReactHookFormVSformik">React-hook-form VS formik</Link></p>
        <p><Link to="/ReactRouterV6">React Router V6</Link></p>
        <p><Link to="/Context">Context (useContext)</Link></p>
        <p><Link to="/RefsFragmentKeyReactMemoUseMemo">Refs, Fragment, Key, React.memo, useMemo</Link></p>
        <p><Link to="/Storages">STORAGEs</Link></p>
        <p><Link to="/Hoc">HOC</Link></p>
      </div>
      <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6661104d-9510-4a9e-8688-ef35a5d42a1d%2F1df00183-9942-419e-871e-f736656e12e8%2FUntitled.jpeg?table=block&id=cf58c818-3063-4c77-90ce-15f97cc5f3f4&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=2000&userId=f392cd7e-beda-43b5-a97e-6466e3a75b2e&cache=v2" alt='react' width='600px'/>
   </div>
   
   );
}
export default Content;