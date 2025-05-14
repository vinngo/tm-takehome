import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Animated.View entering={FadeIn.duration(400)} style={styles.content}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <IconSymbol
              name="arrow.left"
              size={22}
              color={Colors[colorScheme ?? "light"].text}
            />
          </Pressable>
          <Text
            style={[
              styles.title,
              { color: Colors[colorScheme ?? "light"].text },
            ]}
          >
            Profile
          </Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          style={styles.profileContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileHeader}>
            <View style={[
              styles.avatar,
              { backgroundColor: Colors[colorScheme ?? "light"].tint }
            ]}>
              <IconSymbol
                name="person.fill"
                size={40}
                color="#FFFFFF"
              />
            </View>
            <Text
              style={[
                styles.name,
                { color: Colors[colorScheme ?? "light"].text },
              ]}
            >
              John Doe
            </Text>
            <Text
              style={[
                styles.username,
                { color: Colors[colorScheme ?? "light"].textDim },
              ]}
            >
              @johndoe
            </Text>

            <Pressable
              style={[
                styles.editButton,
                {
                  backgroundColor:
                    Colors[colorScheme ?? "light"].cardBackground,
                },
              ]}
              onPress={() => {
                // Edit profile action
              }}
            >
              <Text
                style={[
                  styles.editButtonText,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Edit Profile
              </Text>
            </Pressable>
          </View>

          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statItem,
                {
                  backgroundColor:
                    Colors[colorScheme ?? "light"].cardBackground,
                },
              ]}
            >
              <Text
                style={[
                  styles.statValue,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                124
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Following
              </Text>
            </View>

            <View
              style={[
                styles.statItem,
                {
                  backgroundColor:
                    Colors[colorScheme ?? "light"].cardBackground,
                },
              ]}
            >
              <Text
                style={[
                  styles.statValue,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                845
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Followers
              </Text>
            </View>

            <View
              style={[
                styles.statItem,
                {
                  backgroundColor:
                    Colors[colorScheme ?? "light"].cardBackground,
                },
              ]}
            >
              <Text
                style={[
                  styles.statValue,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                52
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: Colors[colorScheme ?? "light"].textDim },
                ]}
              >
                Posts
              </Text>
            </View>
          </View>

          <View style={styles.settingsSection}>
            <Text
              style={[
                styles.sectionTitle,
                { color: Colors[colorScheme ?? "light"].textDim },
              ]}
            >
              Settings
            </Text>

            {[
              {
                icon: "person" as const,
                title: "Account",
                description: "Personal information",
              },
              {
                icon: "bell" as const,
                title: "Notifications",
                description: "Customize alerts",
              },
              {
                icon: "lock" as const,
                title: "Privacy",
                description: "Manage data settings",
              },
              {
                icon: "questionmark.circle" as const,
                title: "Help Center",
                description: "Get support",
              },
              {
                icon: "info.circle" as const,
                title: "About",
                description: "App information",
              },
            ].map((item, index) => (
              <Pressable
                key={index}
                style={[
                  styles.settingsItem,
                  {
                    backgroundColor:
                      Colors[colorScheme ?? "light"].cardBackground,
                  },
                ]}
                onPress={() => {
                  // Navigate to specific setting
                }}
              >
                <View style={styles.settingsItemContent}>
                  <IconSymbol
                    name={item.icon}
                    size={24}
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                  <View style={styles.settingsTextContainer}>
                    <Text
                      style={[
                        styles.settingsTitle,
                        { color: Colors[colorScheme ?? "light"].text },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.settingsSubtitle,
                        { color: Colors[colorScheme ?? "light"].textDim },
                      ]}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
                <IconSymbol
                  name="chevron.right"
                  size={20}
                  color={Colors[colorScheme ?? "light"].textDim}
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
  },
  profileContent: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    marginBottom: 20,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 32,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  settingsSection: {
    paddingHorizontal: 24,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 16,
  },
  settingsItemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  settingsTextContainer: {
    gap: 2,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  settingsSubtitle: {
    fontSize: 14,
  },
});
