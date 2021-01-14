import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial192740Navigator from '../features/Tutorial192740/navigator';
import NotificationList192712Navigator from '../features/NotificationList192712/navigator';
import Settings192711Navigator from '../features/Settings192711/navigator';
import Settings192703Navigator from '../features/Settings192703/navigator';
import UserProfile192701Navigator from '../features/UserProfile192701/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial192740: { screen: Tutorial192740Navigator },
NotificationList192712: { screen: NotificationList192712Navigator },
Settings192711: { screen: Settings192711Navigator },
Settings192703: { screen: Settings192703Navigator },
UserProfile192701: { screen: UserProfile192701Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
