import type {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
  } from 'react-native';
  import type { SharedValue } from 'react-native-reanimated';
  
  
export interface ThemeProperties {
    /** Border color of the calendar */
    cellBorderColor?: string;
    /** Background color of the calendar */
    backgroundColor?: string;
    /** Background color of the create box when dragging to create */
    dragCreateItemBackgroundColor?: string;
    /** The color of the loading bar */
    loadingBarColor?: string;
    /** Background color of unavailable hours */
    unavailableBackgroundColor?: string;
    /** Color of the change height handle */
    editIndicatorColor?: string;
    /** Color of the now indicator */
    nowIndicatorColor?: string;
  
    // Hour Column
    hourText?: TextStyle;
    dragHourContainer?: ViewStyle;
    dragHourText?: TextStyle;
  
    //Header style
    dayName?: TextStyle;
    dayNumber?: TextStyle;
    dayNumberContainer?: ViewStyle;
    todayName?: TextStyle;
    todayNumber?: TextStyle;
    todayNumberContainer?: ViewStyle;
    saturdayName?: TextStyle;
    saturdayNumber?: TextStyle;
    saturdayNumberContainer?: ViewStyle;
    sundayName?: TextStyle;
    sundayNumber?: TextStyle;
    sundayNumberContainer?: ViewStyle;
  
    //Event
    eventTitle?: TextStyle;
    minimumEventHeight?: number;
  
    allowFontScaling?: boolean;
  }