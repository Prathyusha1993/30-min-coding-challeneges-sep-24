import './App.css';
import AccordionComp from './components/accordian/AccordionComp';
import CounterApp from './components/counter/CounterApp';
import FetchApiData from './components/fetchAndDisplay/FetchApiData';
import ValidateForm from './components/formValidations/ValidateForm';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import SearchFilter from './components/searchFilter/SearchFilter';
import TabNavigation from './components/tabNavigation/TabNavigation';
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
      <ValidateForm />
      <AccordionComp />
      <TabNavigation />
    </div>
  );
}

export default App;
