import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings193414Navigator from '../features/Settings193414/navigator';
import EmailAuth193394Navigator from '../features/EmailAuth193394/navigator';
import Maps193391Navigator from '../features/Maps193391/navigator';
import Tutorial193390Navigator from '../features/Tutorial193390/navigator';
import Messaging193389Navigator from '../features/Messaging193389/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings193414: { screen: Settings193414Navigator },
EmailAuth193394: { screen: EmailAuth193394Navigator },
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
