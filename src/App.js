import './App.css';
import AccordionComp from './components/accordian/AccordionComp';
import CounterApp from './components/counter/CounterApp';
import DarkTheme from './components/Dark Light Theme/DarkTheme';
import FetchApiData from './components/fetchAndDisplay/FetchApiData';
import ValidateForm from './components/formValidations/ValidateForm';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import SearchFilter from './components/searchFilter/SearchFilter';
import ShoppingCart from './components/shopping cart/ShoppingCart';
import TabNavigation from './components/tabNavigation/TabNavigation';
import Todo from './components/todoApp/Todo';
import ToggleComp from './components/toggle/ToggleComp';
import ContextApp from './components/context api/ContextApp';
import StopWatch from './components/stop watch/StopWatch';
import VotingApp from './components/VotingApp/VotingApp';
import GetCities from './components/codingChalalenge/GetCities';

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
      <ShoppingCart />
      {/* <DarkTheme /> */}
      {/* <ContextApp/> */}
      <StopWatch />
      <VotingApp />
      <GetCities />
    </div>
  );
}

export default App;
