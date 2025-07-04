import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const login = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Your login logic here
  };

  return (
    <View style={styles.viewParent}>
      <Image
        source={require("../assets/images/login_image.png")}
        style={styles.login}
      />
      <View style={styles.viewChild}>
        <Text style={styles.loginText}>Login</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.emailInput}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              style={styles.passwordIcon}
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => login(email, password)}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupLabel}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewParent: {
    backgroundColor: "#007FFF",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  viewChild: {
    marginTop: 20,
    maxWidth: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  login: {
    width: "33%",
    height: "15%",
    resizeMode: "contain",
  },
  loginText: {
    fontWeight: "900",
    fontSize: 30,
    marginBottom: 20,
  },
  emailInput: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    width: "100%",
    minWidth: "100%",
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordIcon: {
    paddingRight: 8,
  },
  loginButton: {
    width: "45%",
    height: 45,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 13,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  signupLabel: {
    color: "black",
    fontWeight: "900",
    marginBottom: 8,
  },
  signupButton: {
    marginLeft: 10,
    width: "30%",
    height: 45,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  signupButtonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 13,
  },
});
