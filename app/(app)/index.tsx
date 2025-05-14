import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { IconSymbol } from "@/components/ui/IconSymbol";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text
          style={[styles.title, { color: Colors[colorScheme ?? "light"].text }]}
        >
          Home
        </Text>

        <Pressable
          style={styles.profileButton}
          onPress={() => {
            router.push("/profile");
          }}
        >
          <View style={[
            styles.avatar, 
            { backgroundColor: Colors[colorScheme ?? "light"].tint }
          ]}>
            <IconSymbol
              name="person.fill"
              size={22}
              color="#FFFFFF"
            />
          </View>
        </Pressable>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AnimatedPressable
          entering={FadeInDown.duration(400).delay(100)}
          style={[
            styles.card,
            { backgroundColor: Colors[colorScheme ?? "light"].cardBackground },
          ]}
          onPress={() => {
            // Navigate to specific screen
          }}
        >
          <View style={styles.cardContent}>
            <IconSymbol
              name="chart.bar.fill"
              size={32}
              color={Colors[colorScheme ?? "light"].tint}
            />
            <View style={styles.cardTextContainer}>
              <Text
                style={[
                  styles.cardTitle,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Dashboard
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                View your activity and progress
              </Text>
            </View>
          </View>
          <IconSymbol
            name="chevron.right"
            size={20}
            color={Colors[colorScheme ?? "light"].textDim}
          />
        </AnimatedPressable>

        <AnimatedPressable
          entering={FadeInDown.duration(400).delay(200)}
          style={[
            styles.card,
            { backgroundColor: Colors[colorScheme ?? "light"].cardBackground },
          ]}
          onPress={() => {
            // Navigate to specific screen
          }}
        >
          <View style={styles.cardContent}>
            <IconSymbol
              name="person.2.fill"
              size={32}
              color={Colors[colorScheme ?? "light"].tint}
            />
            <View style={styles.cardTextContainer}>
              <Text
                style={[
                  styles.cardTitle,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Friends
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Connect with others
              </Text>
            </View>
          </View>
          <IconSymbol
            name="chevron.right"
            size={20}
            color={Colors[colorScheme ?? "light"].textDim}
          />
        </AnimatedPressable>

        <AnimatedPressable
          entering={FadeInDown.duration(400).delay(300)}
          style={[
            styles.card,
            { backgroundColor: Colors[colorScheme ?? "light"].cardBackground },
          ]}
          onPress={() => {
            // Navigate to specific screen
          }}
        >
          <View style={styles.cardContent}>
            <IconSymbol
              name="bell.fill"
              size={32}
              color={Colors[colorScheme ?? "light"].tint}
            />
            <View style={styles.cardTextContainer}>
              <Text
                style={[
                  styles.cardTitle,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Notifications
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Stay updated with latest news
              </Text>
            </View>
          </View>
          <IconSymbol
            name="chevron.right"
            size={20}
            color={Colors[colorScheme ?? "light"].textDim}
          />
        </AnimatedPressable>

        <AnimatedPressable
          entering={FadeInDown.duration(400).delay(400)}
          style={[
            styles.card,
            { backgroundColor: Colors[colorScheme ?? "light"].cardBackground },
          ]}
          onPress={() => {
            router.replace("/");
          }}
        >
          <View style={styles.cardContent}>
            <IconSymbol
              name="rectangle.portrait.and.arrow.right"
              size={32}
              color="#FF3B30"
            />
            <View style={styles.cardTextContainer}>
              <Text
                style={[
                  styles.cardTitle,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Sign Out
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Log out of your account
              </Text>
            </View>
          </View>
          <IconSymbol
            name="chevron.right"
            size={20}
            color={Colors[colorScheme ?? "light"].textDim}
          />
        </AnimatedPressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 16,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  cardTextContainer: {
    gap: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubtitle: {
    fontSize: 14,
  },
});
