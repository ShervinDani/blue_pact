import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import auth from '@react-native-firebase/auth';

type SignUpStep1Props = {
  setForm: (number: number) => void;
};

export function SignUpStep1({ setForm }: SignUpStep1Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [phone, setPhone] = useState("0");
  const [showNameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [showAgeError, setAgeError] = useState(false);
  const [ageErrorMsg, setAgeErrorMsg] = useState("");
  const [showPhoneError, setPhoneError] = useState(false);
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpError, setOtpError] = useState(false);
  const [otpErrorMsg, setOtpErrorMsg] = useState("");
  const [timer, setTimer] = useState(30);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  const sendOtp = async () => {
    const confirmation = await auth().signInWithPhoneNumber(
      "+91" + phone.trim()
    );
    setConfirmationResult(confirmation);
  };
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (showOtp && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [showOtp, timer]);

  const handleResendOtp = () => {
    setTimer(30);
    setResendEnabled(false);
    setOtp("");
    // Call API to resend OTP here if needed
  };

  const sgignup = () => {
    // Name validation
    if (!name || name.trim() === "") {
      setNameError(true);
      setNameErrorMsg("Name Cannot Be Empty");
      return;
    }
    const hasNumber = /\d/.test(name);
    if (hasNumber) {
      setNameError(true);
      setName("");
      setNameErrorMsg("Invalid Format");
      return;
    }

    // Age validation
    if (parseInt(age.trim(), 10) <= 17 || age.trim() === "") {
      setAgeError(true);
      setAge("");
      setAgeErrorMsg("Must be Atleast 18");
      return;
    }
    const ageTrimmed = age.trim();
    if (!/^\d+$/.test(ageTrimmed)) {
      setAge("");
      setAgeError(true);
      setAgeErrorMsg("Age must be a number without letters.");
      return;
    }

    // Phone validation
    const phoneTrimmed = phone.trim();
    if (!(phoneTrimmed.length === 10) || !/^\d{10}$/.test(phoneTrimmed)) {
      setPhone("");
      setPhoneError(true);
      setPhoneErrorMsg("Invalid Phone Number");
      return;
    }

    // First time showing OTP
    if (!showOtp) {
      setShowOtp(true);
      setTimer(30); // Start OTP timer
      setResendEnabled(false);
      return;
    }
    if (resendEnabled) {
      setOtp("");
      setOtpError(true);
      setOtpErrorMsg("Otp Expired");
      return;
    }

    setForm(2); // Go to next form step
    return;
  };

  return (
    <View style={styles.viewParent}>
      <Image
        source={require("../assets/images/login_image.png")}
        style={styles.login}
      />
      <View style={styles.viewChild}>
        <Text style={styles.loginText}>Basic Details</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={!showNameError ? "Enter your name" : nameErrorMsg}
          keyboardType="ascii-capable"
          autoCapitalize="characters"
          autoCorrect={false}
          style={[styles.signupInput, showNameError && styles.signupInputError]}
        />

        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder={!showAgeError ? "Enter Age" : ageErrorMsg}
          keyboardType="numeric"
          autoCapitalize="characters"
          autoCorrect={false}
          style={[styles.signupInput, showAgeError && styles.signupInputError]}
        />

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder={!showPhoneError ? "Enter Phone Number" : phoneErrorMsg}
          keyboardType="numeric"
          autoCorrect={false}
          style={[
            styles.signupInput,
            showPhoneError && styles.signupInputError,
          ]}
        />

        {showOtp && (
          <>
            <TextInput
              value={otp}
              onChangeText={setOtp}
              placeholder={!showOtpError ? "OTP" : otpErrorMsg}
              keyboardType="numeric"
              autoCorrect={false}
              style={[
                styles.signupInput,
                showOtpError && styles.signupInputError,
              ]}
            />
            {resendEnabled ? (
              <TouchableOpacity onPress={handleResendOtp}>
                <Text style={{ color: "blue", marginBottom: 10 }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ color: "black", marginBottom: 10 }}>
                Resend OTP in {timer}s
              </Text>
            )}
          </>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={sgignup}>
          <Text style={styles.loginButtonText}>Next</Text>
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
    minWidth: 250,
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
    color: "black",
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
  signupInputError: {
    borderBottomColor: "red",
  },
});
