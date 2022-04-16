import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    height: Platform.OS === 'ios' ? 200 : 100
  });

export default {
    FONT_SIZE_TINY: 12,
    FONT_SIZE_SMALL: 16,
    FONT_SIZE_MEDIUM: 20,
    FONT_SIZE_LARGE: 28,
    FONT_SIZE_TITLE: 30,
    PRIMARY_COLOR: '#fc3259',
    SECONDARY_COLOR: '#7d7d7d',
    FONT_WEIGHT_LIGHT: '200',
    FONT_WEIGHT_MEDIUM: '600',
    FONT_WEIGHT_HEAVY: '700',
    BACKGROUND_COLOR: '#030303',
    CARD_COLOR: '#1c1c1e',
    TAB_BAR_BACKGROUND_COLOR: '#121212',
    HEADER_BACKGROUND_COLOR: '#121212'

}

export const WidgetStyle = {
    DETAILS_SIZE: 35,
    DETAILS_WEIGHT: '400',
    TITLE_SIZE: 16,
    TITLE_WEIGHT: '400',
    TITLE_COLOR: 'black',

    WIDGET_CONTAINER: {
        height: 150,
        width: '49%',
        borderRadius: 15,
        marginVertical: 5,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(22, 22, 75, 0.95)'

    },
    WIDGET_CARD: {
        padding: 15,
        height:'100%'
    }

}



