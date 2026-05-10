import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [focusedfield, setFocusedField] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 28,
            paddingHorizontal: 20,
            gap: 36,
          }}
        >
          {/* Header */}
          <View style={{ alignItems: "center", gap: 16 }}>
            <Image
              source={require("../../assets/images/react-logo.png")}
              width={200}
              height={200}
            />
            <View style={{ alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 32, fontWeight: "bold" }}>Sign In</Text>
              <Text style={{ color: "#939393", fontSize: 16 }}>
                Let&apos;s experience the joy of AI
              </Text>
            </View>
          </View>

          {/* Form */}
          <View style={{ alignItems: "center", gap: 20 }}>
            <View style={{ width: "100%" }}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View>
                {focusedfield === "email" && (
                  <View style={styles.halo} pointerEvents="none" />
                )}
                <View
                  style={[
                    styles.input,
                    focusedfield === "email" && styles.inputFocused,
                  ]}
                >
                  <Ionicons name="mail-outline" size={24} />
                  <TextInput
                    style={{ flex: 1, fontSize: 16, fontWeight: "semibold" }}
                    placeholder="Enter your email address..."
                    placeholderTextColor="#939393"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                  />
                </View>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={styles.inputLabel}>Password</Text>
              <View>
                {focusedfield === "pass" && (
                  <View style={styles.halo} pointerEvents="none" />
                )}
                <View
                  style={[
                    styles.input,
                    focusedfield === "pass" && styles.inputFocused,
                  ]}
                >
                  <Ionicons name="lock-closed-outline" size={24} />
                  <TextInput
                    secureTextEntry={!visible}
                    style={{ flex: 1, fontSize: 16, fontWeight: "semibold" }}
                    placeholder="Enter your password..."
                    placeholderTextColor="#939393"
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setFocusedField("pass")}
                    onBlur={() => setFocusedField("")}
                  />
                  <Pressable
                    hitSlop={8}
                    onPress={() => setVisible(!visible)}
                    accessibilityRole="button"
                    accessibilityLabel={
                      visible ? "Hide password" : "Show password"
                    }
                    accessibilityHint="Toggles password visibility"
                  >
                    {visible ? (
                      <Ionicons
                        name="eye-off-outline"
                        size={20}
                        color="#939393"
                      />
                    ) : (
                      <Ionicons name="eye-outline" size={20} color="#939393" />
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "semibold",
                    color: "#fff",
                  }}
                >
                  Sign In
                </Text>
                <Ionicons
                  name="arrow-forward-outline"
                  size={20}
                  color={"#fff"}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={{ alignItems: "center", gap: 24 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Pressable hitSlop={10} style={styles.social}>
                <Ionicons name="logo-google" size={24} />
              </Pressable>
              <Pressable hitSlop={10} style={styles.social}>
                <Ionicons name="logo-github" size={24} />
              </Pressable>
              <Pressable hitSlop={10} style={styles.social}>
                <Ionicons name="logo-linkedin" size={24} />
              </Pressable>
            </View>
            <View style={{ alignItems: "center", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Text style={{ fontWeight: "semibold" }}>
                  Don&apos;t have an account?
                </Text>
                <Link style={styles.link} href="/(_auth)/signup">
                  Sign Up
                </Link>
              </View>
              <Link style={styles.link} href="/(_auth)/signup">
                Forgot your password?
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  inputLabel: { fontSize: 14, fontWeight: "bold", marginBottom: 8 },
  halo: {
    position: "absolute",
    inset: -4,
    borderRadius: 28,
    backgroundColor: "rgba(98, 219, 251, 0.2)",
  },
  input: {
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "transparent",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 3,
    shadowColor: "#61DBFB80",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputFocused: {
    borderColor: "#61DBFB",
    elevation: 2,
    shadowColor: "#61DBFB80",
  },
  button: {
    backgroundColor: "#61DBFB",
    borderRadius: 24,
    padding: 18,
    width: "100%",
    alignItems: "center",
    marginVertical: 4,
  },
  social: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#b6b6b6",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#61DBFB",
    textDecorationLine: "underline",
  },
});
