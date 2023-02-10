import { Platform } from "react-native";

import colors from "./colors";
import type_colors from "./type_colors";

export default {
    colors,
    type_colors,
    text: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
}