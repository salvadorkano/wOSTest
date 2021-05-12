import {WINDOW_WIDTH} from './mixins';

const width = WINDOW_WIDTH;

export default {
  FONT_SIZE_SMALLEST: width < 500 ? 10 : width < 900 ? 13 : 16, //Error
  FONT_SIZE_SMALL: width < 500 ? 12 : width < 900 ? 15 : 18,  //Notice of privacy
  FONT_SIZE_MEDIUM: width < 500 ? 14 : width < 900 ? 17 : 20, //Title tabs, switch
  FONT_SIZE_NORMAL: width < 500 ? 16 : width < 900 ? 19 : 22, //Title steps 
  FONT_SIZE_LARGE: width < 500 ? 18 : width < 900 ? 21 : 24, 
  FONT_SIZE_XLARGE: width < 500 ? 20 : width < 900 ? 23 : 26, 
  FONT_SIZE_XXLARGE: width < 500 ? 22 : width < 900 ? 25 : 28, 
  FONT_SIZE_XXXLARGE: width < 500 ? 24 : width < 900 ? 27 : 30, 
  FONT_SIZE_LONGEST: width < 500 ? 26 : width < 900 ? 29 : 32, 
};
