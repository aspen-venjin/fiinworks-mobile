import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Camera, CameraType } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import AppCamera from "./components/AppCamera";
import defaultStyles from "./config/styles";
import Screen from "./components/Screen";

function Capture() {
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isCapturing, setIsCapturing] = useState(false);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const requestImagePermission = async () => {
    requestPermission();
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted && !permission.granted)
      alert("You must enable permission to access the camera and library.");
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImageUri(data.uri);
      console.log(data.uri);
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestImagePermission();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => console.log("flash")}>
          <Ionicons name="flash" size={26} color={defaultStyles.colors.white} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => console.log("close")}>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={defaultStyles.colors.white}
          />
        </TouchableWithoutFeedback>
      </View>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ flex: 1 }} />
      ) : (
        <AppCamera type={type} setCamera={setCamera} />
      )}
      <View style={styles.footer}>
        <TouchableWithoutFeedback onPress={selectImage}>
          <MaterialCommunityIcons
            name="image-size-select-actual"
            size={40}
            color={defaultStyles.colors.white}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={takePicture}>
          <View style={styles.circle} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={toggleCameraType}>
          <MaterialCommunityIcons
            name="camera-flip"
            size={40}
            color={defaultStyles.colors.white}
          />
        </TouchableWithoutFeedback>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    padding: 5,
  },
  circle: {
    borderColor: defaultStyles.colors.white,
    borderRadius: 30,
    borderWidth: 4,
    height: 60,
    width: 60,
  },
  footer: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  header: {
    backgroundColor: defaultStyles.colors.black,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 5,
    width: "100%",
  },
});

export default Capture;
