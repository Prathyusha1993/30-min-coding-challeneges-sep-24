import './App.css';
import CounterApp from './components/counter/CounterApp';
import FetchApiData from './components/fetchAndDisplay/FetchApiData';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import SearchFilter from './components/searchFilter/SearchFilter';
import Todo from './components/todoApp/Todo';
import ToggleComp from './components/toggle/ToggleComp';

function App() {
  return (
    <div className="App">
      <ImageCarousel />
      <Todo />
      <CounterApp />
      <SearchFilter />
      <FetchApiData />
      <ToggleComp />
    </div>
  );
}

export default App;
