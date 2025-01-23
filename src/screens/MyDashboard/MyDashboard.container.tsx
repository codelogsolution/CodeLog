import {useState} from 'react';
import MyDashboardView from './MyDashboard.view';

const MyDashboardContainer = () => {
  const [activeList, setActiveList] = useState([]);

  return MyDashboardView({
    activeList,
  });
};

export default MyDashboardContainer;
