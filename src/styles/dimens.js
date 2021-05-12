import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {WINDOW_WIDTH} from './mixins';
  
  const width = WINDOW_WIDTH;
  
  export default {
    HORIZONTAL_SMALLEST: wp('3%'), //Equivalent 10
    HORIZONTAL_SMALL: wp('3.5%'), //Equivalent 12
    HORIZONTAL_MEDIUM: wp('4%'), //Equivalent 14
    HORIZONTAL_NORMAL: wp('4.5%'), //Equivalent 16
    HORIZONTAL_LARGE: wp('5%'), //Equivalent 18
    HORIZONTAL_XLARGE: wp('5.5%'), //Equivalent 20
    VERTICAL_SMALLEST: hp('3%'), //Equivalent ~ 20
    VERTICAL_SMALL: hp('3.5%'), //Equivalent ~ 24
    VERTICAL_MEDIUM: hp('4%'), //Equivalent ~ 28
    VERTICAL_NORMAL: hp('4.5%'), //Equivalent ~ 32
    VERTICAL_LARGE: hp('5%'), //Equivalent ~ 36
    VERTICAL_XLARGE: hp('5.5%'), //Equivalent ~ 40
    VERTICAL_XXLARGE: hp('6%'), //Equivalent ~ 44
  
    MARGIN_TOP_MENU_HEADER: width < 500 ? 15 : width < 900 ? 20 : 25,
    MARGIN_TOP_MENU_HEADER2: width < 500 ? 30 : width < 900 ? 40 : 50,
    MARGIN_BETWEEN_COMPONENTS: width < 500 ? 15 : width < 900 ? 22 : 30,
    MARGIN_BETWEEN_COMPONENTS_LIST:  width < 500 ? 8 : width < 900 ? 10 : 12,
    MARGIN_BOTTOM_FOR_IOS: width < 500 ? 25 : width < 900 ? 35 :45,
    MARGIN_START_HEADER_LOGIN_BIM_LOGO:
      width < 500 ? '80%' : width < 900 ? '84%' : '88%',
    PADDING_BETWEEN_DETAIL_DATA_CARD: width < 500 ? 10 : width < 900 ? 15 : 20,
  
    //Input
    FIRST_INPUT_CONTAINER: width < 500 ? 90 : width < 900 ? 100 : 110,
    SECOND_INPUT_CONTAINER: width < 500 ? 50 : width < 900 ? 60 : 70,
    FIRST_INPUT_CONTAINER_MULTILINE: width < 500 ? 120 : width < 900 ? 130 : 140,
    SECOND_INPUT_CONTAINER_MULTILINE: width < 500 ? 80 : width < 900 ? 90 : 100,
    //Button
    BUTTON_CONTAINER_VERTICAL: width < 500 ? 50 : width < 900 ? 60 : 70,
  
    //Headers
    HEADER_HOME: width < 500 ? 110 : width < 900 ? 130 : 150,
    HEADER_NAVIGATOR_HOME: width < 500 ? 110 : width < 900 ? 130 : 150,
    HEADER_COMPLEX: width < 500 ? 220 : width < 900 ? 260 : 300,
    HEADER_SIMPLE: width < 500 ? 90 : width < 900 ? 110 : 130,
    HEADER_LOGIN: width < 500 ? 240 : width < 900 ? 270 : 300,
    HEADER_MENU: width < 500 ? 180 : width < 900 ? 220 : 260,
    HEADER_INVESTMENTS: width < 500 ? 60 : width < 900 ? 80 : 100,
  
    //Icons
    HEIGHT_HEADER_LOGIN_BIM_LOGO: width < 500 ? 180 : width < 900 ? 185 : 190,
    HEADER_LOGIN_BIM_LOGO_SIZE: width < 500 ? 20 : width < 900 ? 25 : 30,
    CIRCLE_ICON_SIZE: width < 500 ? 55 : width < 900 ? 65 : 75,
    ICON_SIZE: width < 500 ? 30 : width < 900 ? 35 : 40,
    //Token input
    WIDTH_INPUT_TOKEN: width < 500 ? 45 : width < 900 ? 50 : 60,
    HEIGHT_INPUT_TOKEN: width < 500 ? 60 : width < 900 ? 70 : 85,
  
    //Switch
    HEIGHT_SWITCH: width < 500 ? 40 : width < 900 ? 50 : 60,
    WIDTH_SWITCH: width < 500 ? 70 : width < 900 ? 90 : 110,
    HEIGHT_LARGE_SWITCH: width < 500 ? 43 : width < 900 ? 53 : 63,
    WIDTH_LARGE_SWITCH: wp('90%'),
    SWITCH_WITH_TITLE: width < 500 ? 60 : width < 900 ? 70 : 80,
  
    //Movement account item
    HEIGHT_MOVEMENT_ITEM: width < 500 ? 60 : width < 900 ? 70 : 80,
    MOVEMENTS_ICON_SIZE: width < 500 ? 15 : width < 900 ? 25 : 30,
  
    //Investments
    HEIGHT_CATEGORY_INVESTMENT: width < 500 ? 95 : width < 900 ? 110 : 125,
    HEIGHT_DETAIL_INVESTMENT_CARD: width < 500 ? 60 : width < 900 ? 75 : 90,
  
    //Transfers
    HEIGHT_INFORMATION_CARD: width < 500 ? 75 : width < 900 ? 90 : 105,
    HEIGHT_ACCOUNT_CARD: width < 500 ? 115 : width < 900 ? 130 : 160,
    
    //Others
    ACTIVITY_INDICATOR_SIZE: width < 500 ? 24 : width < 900 ? 32 : 40,
    LOGIN_FOOTER: width < 500 ? 80 : width < 900 ? 90 : 105,
    CHECKBOX_SIZE: width < 500 ? 25 : width < 900 ? 30 : 35,
    HEIGHT_VERIFY_INFORMATION_TITLE: width < 500 ? 80 : width < 900 ? 95 : 110,
  
    //invest
    DATE_INVESTMENT_TEXT_SIZE: width < 500 ? 18 : width < 900 ? 20 : 22,
    DATE_INVESTMENT_DESCRIPTION_TEXT_SIZE: width < 500 ? 14 : width < 900 ? 16 : 18,
    DATE_INVESTMENT_DESCRIPTION_TITLE_SIZE: width < 500 ? 14 : width < 900 ? 16 : 18,
  };
  