import { Dimensions } from 'react-native';

const uiWidthPx = 375;
const uiHeightPx = 667;
const deviceWidthDp = Dimensions.get('screen').width;
const deviceHeightDp = Dimensions.get('screen').height;

export const pTx = (uiElePx) => (deviceWidthDp / uiWidthPx) * uiElePx;

export const pTd = (uiElePx) => (deviceHeightDp / uiHeightPx) * uiElePx;
