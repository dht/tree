/** @format */

import { AppRegistry, I18nManager } from "react-native";
import App from "./components/App";
import { name as appName } from "./app.json";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

AppRegistry.registerComponent(appName, () => App);

console.disableYellowBox = true;
