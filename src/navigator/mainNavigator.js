import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera193393Navigator from '../features/Camera193393/navigator';
import CalendarView193392Navigator from '../features/CalendarView193392/navigator';
import Maps193391Navigator from '../features/Maps193391/navigator';
import Tutorial193390Navigator from '../features/Tutorial193390/navigator';
import Messaging193389Navigator from '../features/Messaging193389/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera193393: { screen: Camera193393Navigator },
CalendarView193392: { screen: CalendarView193392Navigator },
Maps193391: { screen: Maps193391Navigator },
Tutorial193390: { screen: Tutorial193390Navigator },
Messaging193389: { screen: Messaging193389Navigator },

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
