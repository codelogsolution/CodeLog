import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  NativeModules,
} from 'react-native';

const TabComponent = () => {
  const [selectedTabs, setSelectedTabs] = useState(['live']);

  const activityList = [
    {
      event_name: 'Mindful Minutes items',
      date: '26 Jan 2025',
      type: 'pts.',
    },
    {
      event_name: 'Mindful Minutes items',
      date: '20 Dec 2024',
      type: 'raised',
    },
    {
      event_name: 'Sonlang salon items',
      date: '02 Jan 2025',
      type: 'pts.',
    },
    {
      event_name: 'Go Live items',
      date: '22 Oct 2024',
      type: 'pts.',
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
    {
      event_name: 'Julia Finder items',
      date: '31 Dec 2024',
      type: 'pts.',
    },
    {
      event_name: 'Slish Left items',
      date: '10 Jan 2025',
      type: 'raised',
    },
    {
      event_name: 'Jenifier stock items',
      date: '31 Dec 2024',
      type: 'pts.',
    },
  ];

  const [liveItemList, setLiveItemList] = useState([
    {
      event_name: 'Mindful Minutes items',
      date: '26 Jan 2025',
      type: 'raised',
    },
    {
      event_name: 'Sonlang salon items',
      date: '02 Jan 2025',
      type: 'pts.',
    },
  ]);

  const [futureItemList, setFutureItemList] = useState([
    {
      event_name: 'Popines Left items',
      date: '10 Jan 2025',
      type: 'raised',
    },
  ]);

  const [pastItemList, setPastItemList] = useState([
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
  ]);

  const tabsListing = [
    {
      id: '1',
      key: 'live',
      title: 'Live',
      items: liveItemList,
    },
    {
      id: '2',
      key: 'upcoming',
      title: 'Upcoming',
      items: futureItemList,
    },
    {
      id: '3',
      key: 'past',
      title: 'Past',
      items: pastItemList,
    },
  ];

  const toggleTab = (tabKey: string) => {
    setSelectedTabs(prevSelected => {
      if (prevSelected.includes(tabKey)) {
        return prevSelected.filter(id => id !== tabKey);
      } else {
        return [...prevSelected, tabKey];
      }
    });
  };

  const renderTab = (tabSelection: {key: string; title: string}) => {
    const isSelected = selectedTabs?.includes(tabSelection?.key);
    console.log('selectedTabs', isSelected, selectedTabs);

    return (
      <TouchableOpacity
        style={[styles.tab, isSelected && styles.selectedTab]}
        onPress={() => toggleTab(tabSelection.key)}>
        <Text style={[styles.tabText, isSelected && styles.selectedTabTxt]}>
          {tabSelection.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const eventPress = () =>{
     const languageFind = NativeModules.SettingsManager.settings.AppleLanguages[0];
     console.log('languageFind', languageFind);
  }

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={eventPress} style={styles.card}>
      <Text style={{fontSize: 22, marginBottom: 5}}>{item?.event_name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 15, color: '#b3b3b3'}}>{item?.date}</Text>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 100,
            backgroundColor: '#b3b3b3',
            marginLeft: 15,
            marginRight: 6,
          }}
        />
        <Text style={{fontSize: 15, color: '#b3b3b3'}}>{item?.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>{tabsListing.map(renderTab)}</View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.listsContainer}>
        {selectedTabs?.length <= 0 ? (
          activityList?.map(item => {
            return (
              <View style={styles.card}>
                <Text style={{fontSize: 22, marginBottom: 5}}>
                  {item?.event_name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 15, color: '#b3b3b3'}}>
                    {item?.date}
                  </Text>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 100,
                      backgroundColor: '#b3b3b3',
                      marginLeft: 15,
                      marginRight: 6,
                    }}
                  />
                  <Text style={{fontSize: 15, color: '#b3b3b3'}}>
                    {item?.type}
                  </Text>
                </View>
              </View>
            );
          })
        ) : (
          <>
            {selectedTabs?.map(tabKey => {
              const tabButtonData: any = tabsListing?.find(
                t => t.key === tabKey,
              );
              console.log('tabButtonData===>', tabButtonData, selectedTabs);
              return (
                <View>
                  <FlatList
                    scrollEnabled={false}
                    data={tabButtonData?.items}
                    renderItem={renderItem}
                  />
                </View>
              );
            })}
          </>
        )}
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: '#02abed',
  },
  tabText: {
    fontSize: 18,
  },
  selectedTabTxt: {
    color: 'white',
  },
  listsContainer: {
    flexGrow: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemTxttttt: {
    padding: 10,
    backgroundColor: '#efefef',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default TabComponent;
