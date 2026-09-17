import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { useEffect } from "react";
import { LayoutChangeEvent, Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { colors } from "@/constants/theme";

type IconName = keyof typeof Ionicons.glyphMap;

type TabConfig = {
  name: string;
  label: string;
  icon: IconName;
  activeIcon: IconName;
};

const TAB_CONFIG: TabConfig[] = [
  { name: "home", label: "Home", icon: "home-outline", activeIcon: "home" },
  { name: "learn", label: "Learn", icon: "book-outline", activeIcon: "book" },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    icon: "hardware-chip-outline",
    activeIcon: "hardware-chip",
  },
  {
    name: "chat",
    label: "Chat",
    icon: "chatbubble-ellipses-outline",
    activeIcon: "chatbubble-ellipses",
  },
  { name: "profile", label: "Profile", icon: "person-outline", activeIcon: "person" },
];

const CIRCLE_SIZE = 48;

export default function CustomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  const tabBarWidth = useSharedValue(0);
  const activeIndex = useSharedValue(state.index);

  useEffect(() => {
    activeIndex.value = state.index;
  }, [state.index, activeIndex]);

  const handleLayout = (event: LayoutChangeEvent) => {
    tabBarWidth.value = event.nativeEvent.layout.width;
  };

  const indicatorStyle = useAnimatedStyle(() => {
    const tabWidth = tabBarWidth.value / state.routes.length;
    return {
      width: tabWidth,
      transform: [
        {
          translateX: withTiming(activeIndex.value * tabWidth, {
            duration: 220,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="border-t border-border bg-background"
    >
      <View className="h-16 flex-row" onLayout={handleLayout}>
        <Animated.View
          pointerEvents="none"
          style={[
            { position: "absolute", top: 0, left: 0, bottom: 0, alignItems: "center", justifyContent: "center" },
            indicatorStyle,
          ]}
        >
          <View
            style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, borderRadius: CIRCLE_SIZE / 2 }}
            className="items-center justify-center bg-brand-purple"
          />
        </Animated.View>

        {state.routes.map((route, index) => {
          const config = TAB_CONFIG.find((tab) => tab.name === route.name);
          if (!config) return null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className="flex-1 items-center justify-center gap-1"
            >
              <Ionicons
                name={isFocused ? config.activeIcon : config.icon}
                size={22}
                color={isFocused ? "#FFFFFF" : colors.neutral.textSecondary}
              />
              {!isFocused ? (
                <Text className="font-poppins-medium text-caption text-text-secondary">
                  {config.label}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
