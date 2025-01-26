import {useState} from 'react';
import MyDashboardView from './MyDashboard.view';

const MyDashboardContainer = () => {
  const [activeList, setActiveList] = useState([]);

  const ROUTES = [
    {
      key: 'Live',
      title: 'Live',
      isSelected: false,
    },
    {
      key: 'Upcoming',
      title: 'Upcoming',
      isSelected: false,
    },
    {
      key: 'Past',
      title: 'Past',
      isSelected: false,
    },
  ];

  const [routeData, setRouteData] = useState(ROUTES);

  const handleTabPress = (newValue: any, item: any) => {
     console.log('selecteeeeeddddd', newValue, item);
  }

  return MyDashboardView({
    activeList,
    handleTabPress,
    routeData
  });
};

export default MyDashboardContainer;
