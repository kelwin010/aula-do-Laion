import { Stack } from "expo-router";
import { ScreenStack } from "react-native-screens";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {backgroundColor: "#2563eb"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "700"}
     }}
    >
      <Stack.Screen name="index" options={{title: 'Home'}} />
      <Stack.Screen name="detalhes" options={{title: 'Detalhes'}} />
    </Stack>
  );
}
