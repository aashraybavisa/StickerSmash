import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
  const screenOptions = {
    tabBarActiveTintColor: "#ffd33d",
    headerStyle: { backgroundColor: "#25292e" },
    headerShadowVisible: false,
    headerTintColor: "#fff",
    tabBarStyle: { backgroundColor: "#25292e" },
  };
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            const iconName = focused ? "home-sharp" : "home-outline";
            return <Ionicons name={iconName} color={color} size={24} />;
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => {
            const iconName = focused
              ? "information-circle"
              : "information-circle-outline";
            return <Ionicons name={iconName} color={color} size={24} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
