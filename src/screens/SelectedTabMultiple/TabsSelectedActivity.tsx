import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TabComponent = () => {
  const [selectedTabs, setSelectedTabs] = useState(['1']);

  const tabsListing = [
    {id: '1', title: 'Live'},
    {id: '2', title: 'Upcoming'},
    {id: '3', title: 'Past'},
  ];

  const activityList = [
    {
      id: '1',
      event_name: 'Mindful Minutes items',
      date: '26 Jan 2025',
      type: 'live',
    },
    {
      id: '2',
      event_name: 'Restful Minutes items',
      date: '20 Dec 2024',
      type: 'past',
    },
    {
      id: '3',
      event_name: 'Sonlang salon items',
      date: '02 Jan 2025',
      type: 'live',
    },
    {
      id: '4',
      event_name: 'Go Live items',
      date: '22 Oct 2024',
      type: 'future',
    },
    {
      id: '5',
      event_name: 'Dev Events items',
      date: '18 Aug 2024',
      type: 'past',
    },
    {
      id: '6',
      event_name: 'Popines Left items',
      date: '10 Jan 2025',
      type: 'live',
    },
    {
      id: '7',
      event_name: 'Julia Finder items',
      date: '31 Dec 2024',
      type: 'future',
    },
    {
      id: '8',
      event_name: 'Slish Left items',
      date: '10 Jan 2025',
      type: 'past',
    },
    {
      id: '9',
      event_name: 'Jenifier stock items',
      date: '31 Dec 2024',
      type: 'future',
    },
  ];

  const liveItemList = [
    {
      event_name: 'Mindful Minutes items',
      date: '26 Jan 2025',
      type: 'raised',
    },
    {
      event_name: 'Mindful Minutes items',
      date: '20 Dec 2024',
      type: 'raised',
    },
    {
      event_name: 'Sonlang salon items',
      date: '02 Jan 2025',
      type: 'raised',
    },
  ];

  const futureItemList = [
    {
      event_name: 'Go Live items',
      date: '22 Oct 2024',
      type: 'raised',
    },
    {
      event_name: 'Dev Events items',
      date: '18 Aug 2024',
      type: 'raised',
    },
    {
      event_name: 'Popines Left items',
      date: '10 Jan 2025',
      type: 'raised',
    },
  ];

  const pastItemList = [
    {
      event_name: 'Julia Finder items',
      date: '31 Dec 2024',
      type: 'raised',
    },
    {
      event_name: 'Slish Left items',
      date: '10 Jan 2025',
      type: 'raised',
    },
    {
      event_name: 'Jenifier stock items',
      date: '31 Dec 2024',
      type: 'raised',
    },
  ];

  const toggleTab = (tabId: string) => {
    setSelectedTabs(prevSelected => {
      if (prevSelected.includes(tabId)) {
        return prevSelected.filter(id => id !== tabId);
      } else {
        return [...prevSelected, tabId];
      }
    });
  };

  const renderTab = (tabSelection: {id: string; title: string}) => {
    const isSelected = selectedTabs.includes(tabSelection.id);
    return (
      <TouchableOpacity
        key={tabSelection.id}
        style={[styles.tab, isSelected && styles.selectedTab]}
        onPress={() => toggleTab(tabSelection.id)}>
        <Text style={styles.tabText}>{tabSelection.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>{tabsListing.map(renderTab)}</View>
      {/* <View style={styles.listsContainer}> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}>
        {selectedTabs?.map(tabId => {
          const tabButtonData: any = tabsListing.find(t => t.id === tabId);
          console.log('tabButtonDataddddd', tabButtonData);

          return (
            <>
              {activityList?.map(i => {
                return (
                  <View style={styles.card}>
                    <Text style={{fontSize: 20, marginBottom: 6}}>
                      {i?.event_name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 15}}>{i?.date}</Text>
                    </View>
                  </View>
                );
              })}
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: '#ddd',
    marginRight: 10,
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: '#aaa',
  },
  tabText: {
    fontSize: 16,
  },
  listsContainer: {
    flex: 1,
  },
  listContainer: {
    marginBottom: 20,
    flexGrow: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemTxttttt: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#232323',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    marginBottom: 14,
  },
});

export default TabComponent;
