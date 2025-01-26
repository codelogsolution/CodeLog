import {Text, TouchableOpacity, View} from 'react-native';
import {MyDashboardProps} from './MyDashboard.props';
import {EventTxt, TabButtonView, TabButton, TabBtnText} from './MyDashboard.style';

const MyDashboardView = (props: MyDashboardProps) => {
  return (
    <>
      <EventTxt>My Events</EventTxt>

      <TabButtonView>
        {props?.routeData?.map((item: {title: string, key: string, isSelected: boolean}) => {
          return (
            <TabButton onPress={() => props?.handleTabPress(!item?.isSelected, item)}>
              <TabBtnText>{item?.title}</TabBtnText>
            </TabButton>
          );
        })}
      </TabButtonView>
    </>
  );
};

export default MyDashboardView;
