import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const loggedIn = false;

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={loggedIn}>
          <Stack.Screen name="index" />
        </Stack.Protected>
        <Stack.Screen name="(_auth)" />
      </Stack>
    </>
  );
}
