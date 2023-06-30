import './App.css';
import Menu from './Menu/Menu';
import CardList from './CardList/CardList';
import TravelTypeList from './TravelTypeList/TravelTypeList';
import DateRange from './Date/DateRange';
import GuestCardList from './GuestCardList/GuestCardList';
import FoodCardList from './FoodCardList/FoodCardList';
import Requirements from './Requirements/Requirements';
import Accordion from './Accordion/Accordion';
import Newsletter from './Newsletter/Newsletter';
import Divider from './Divider/Divider';
function App() {
  return (
    <div className="App">
      <Menu />
      <div className="itenary">
        <text>Itinerary</text>
        <br />
        <text className="destination">Select your destination</text>
      </div>
      <CardList />
      <div className="traveltype">
        <text>Type of Travel</text>
      </div>
      <TravelTypeList />
      <div className="date">
        <text>Select Dates</text>
      </div>
      <DateRange />
      <div className="guests">
        <text>Select Number of Guests</text>
      </div>
      <GuestCardList />
      <div className="food">
        <text>Food Preference</text>
      </div>
      <FoodCardList />
      <Requirements />
      <div className="faq">
        <text>FAQs</text>
      </div>
      <Accordion />
      <Newsletter />
      <Divider />
    </div>
  );
}

export default App;
