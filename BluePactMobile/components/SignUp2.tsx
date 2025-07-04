import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type SignUpStep1Props = {
  setForm: (number: number) => void;
};

export function SignUpStep2({ setForm }: SignUpStep1Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [aadhar, setAadhar] = useState("");

  const sgignup = () => {
    if (!name || name.trim() === "") {
      alert("Name is required!");
      return;
    }

    const hasNumber = /\d/.test(name);

    if (hasNumber) {
      alert("Name should not contain numbers!");
      return;
    }
    setForm(2);
    return;
  };

  return (
    <View style={styles.viewParent}>
      <Image
        source={require("../assets/images/login_image.png")}
        style={styles.login}
      />

      <View style={styles.viewChild}>
        <Text style={styles.loginText}>Email Verification</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          keyboardType="ascii-capable"
          autoCapitalize="characters"
          autoCorrect={false}
          style={styles.signupInput}
        />
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter your name"
          keyboardType="numeric"
          autoCapitalize="characters"
          autoCorrect={false}
          style={styles.signupInput}
        />
        <TextInput
          value={aadhar}
          onChangeText={setAadhar}
          placeholder="Enter Aadhar Number"
          keyboardType="numeric"
          autoCorrect={false}
          style={styles.signupInput}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => sgignup()}>
          <Text style={styles.loginButtonText}>Next(2)</Text>
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
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    minWidth:250
  },
  login: {
    width: "33%",
    height: "15%",
    resizeMode: "contain",
  },
  loginText: {
    fontWeight: "900",
    fontSize: 28,
    marginBottom: 20,
  },
  signupInput: {
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
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
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
    width: "20%",
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
