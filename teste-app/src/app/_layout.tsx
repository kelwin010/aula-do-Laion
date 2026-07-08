import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#017f0e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Artigo de pesca" }} />
      <Stack.Screen name="detalhes" options={{ title: "Sobre a pesca" }} />
      <Stack.Screen name="detalhes2" options={{ title: "Tela de detalhes 2" }} />
    </Stack>
  );
}