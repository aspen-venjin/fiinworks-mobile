import { StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';

export default {
    input_style: StyleSheet.create({
        container: {
            flex: 0
        },
        textInputContainer: { // Container
            alignItems: 'center',
            backgroundColor: defaultStyles.colors.white,
            borderRadius: 8,
            elevation: 10,
            flexDirection: "row",
            justifyContent: 'center',
            marginVertical: 10,
            padding: 5,
            paddingLeft: 15,
            shadowColor: defaultStyles.colors.black,
            width: '100%'
        },
        textInput: { // Input Box
            backgroundColor: defaultStyles.colors.white,
            fontWeight: 'bold',
            height: 38,
            ...defaultStyles.text,
        },
    })
}