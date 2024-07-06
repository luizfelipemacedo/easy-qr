import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import * as clipboard from "expo-clipboard";
import * as haptics from "expo-haptics";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  console.log("scanned", scanned);

  async function requestCameraPermissions() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) return null;

  const handleBarCodeScanned = async ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    console.log({ type, data });
    setScannedData(data);

    await haptics.notificationAsync(haptics.NotificationFeedbackType.Success);
    setScanned(false);
  };

  return (
    <View className="flex-1 flex-col bg-white">
      <Header />
      <View className="flex-1 flex-col items-center p-10">
        <View className="flex-row justify-center">
          <View className="flex-row justify-center items-center w-64 h-64 border-4 rounded-md relative">
            {!Boolean(hasPermission) || Boolean(scannedData) ? (
              <AntDesign name="camera" size={48} color="black" />
            ) : (
              <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr"],
                }}
                style={{
                  width: 250,
                  height: 250,
                }}
              />
            )}
          </View>
        </View>

        <Text className="font-poppins text-gray-500 mt-4">
          Align a QR code within the frame to scan
        </Text>
      </View>

      <TouchableOpacity
        onPress={async () => {
          setScanned(false);
          setScannedData(null);
          if (!hasPermission) await requestCameraPermissions();
          haptics.notificationAsync(haptics.NotificationFeedbackType.Success);
        }}
        className="bg-gray-800 p-4 rounded-lg shadow-lg m-2"
      >
        <Text className="font-poppins text-white text-center">
          {scanned ? "Scan Again" : "Tap to Scan"}
        </Text>
      </TouchableOpacity>

      <ResultCard data={scannedData} setScannedData={setScannedData} />
    </View>
  );
}

function Header() {
  return (
    <View className="flex-row p-6 top-0 bg-gray-800 items-center shadow-lg gap-3 mt-0">
      <AntDesign name="qrcode" size={30} color="white" />
      <Text className="font-poppins text-white text-3xl font-semibold mt-3">
        QR Code Scanner
      </Text>
    </View>
  );
}

function ResultCard({
  data,
}: {
  data: string | null;
  setScannedData?: Function;
}) {
  const fallbackMesssage =
    "The content of the scanned QR code will be displayed here.";
  const scannedData = data ?? fallbackMesssage;

  return (
    <View className="bg-slate-800 p-4 rounded-lg shadow-lg m-2 mb-5">
      <View className="flex-col justify-between">
        <Text className="font-poppins text-gray-500 mt-2">{scannedData}</Text>
        <IconsSection scannedData={data} />
      </View>
    </View>
  );
}

function IconsSection({ scannedData }: { scannedData: string | null }) {
  return (
    <View className="flex-row ml-auto justify-between">
      <TouchableOpacity
        disabled={scannedData === null}
        onPress={async () => {
          await clipboard.setStringAsync(scannedData);
          haptics.notificationAsync(haptics.NotificationFeedbackType.Success);
        }}
      >
        <FontAwesome5
          name="copy"
          size={24}
          color={scannedData ? "white" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
}
