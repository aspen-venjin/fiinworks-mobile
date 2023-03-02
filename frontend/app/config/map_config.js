import { StyleSheet } from 'react-native';

import defaultStyles from './styles';

export default {
    autocomplete: StyleSheet.create({
        container: {
            flex: 1
        },
        textInputContainer: { // Container
            alignItems: 'center',
            backgroundColor: defaultStyles.colors.white,
            borderRadius: 8,
            elevation: 10,
            flexDirection: "row",
            justifyContent: 'center',
            marginVertical: 10,
            paddingBottom: null,
            paddingLeft: 15,
            shadowColor: defaultStyles.colors.black
        },
        textInput: { // Input Box
            ...defaultStyles.text,
            backgroundColor: defaultStyles.colors.white,
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: null
        }
    })
}