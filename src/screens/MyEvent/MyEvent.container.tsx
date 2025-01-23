import {useState} from 'react';
import MyEventView from './MyEvent.view';

const MyEventContainer = () => {
  const [activeList, setActiveList] = useState([]);

   return MyEventView({
    activeList
   })
}

export default MyEventContainer;