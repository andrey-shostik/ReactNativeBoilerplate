import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constans';

export const responsiveHeight = (h: number) => SCREEN_HEIGHT * (h / 100);

export const responsiveWidth = (w: number) => SCREEN_WIDTH * (w / 100);

export const responsiveFontSize = (percent: number) => {
    const iphoneScreenHeight = ifIphoneX(SCREEN_HEIGHT * 0.9, SCREEN_HEIGHT - getStatusBarHeight());
    const screenHeight = Platform.select({ ios: iphoneScreenHeight, android: SCREEN_HEIGHT });
    const heightPercent = (percent * screenHeight) / 100;

    return Math.round(heightPercent);
};
