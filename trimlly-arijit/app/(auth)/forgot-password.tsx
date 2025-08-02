import { useSignIn } from "@clerk/clerk-expo";
import { useState, useCallback } from "react";
import { Alert, View, Text } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { router } from "expo-router";

const ForgotPassword = () => {
  const { signIn, isLoaded, setActive } = useSignIn();

  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const sendResetCode = useCallback(async () => {
    if (!isLoaded) return;

    try {
      await signIn!.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setCodeSent(true);
      Alert.alert("Success", "Reset code sent to your email.");
    } catch (err: any) {
      console.log(err);
      Alert.alert("Error", err.errors?.[0]?.longMessage || "Something went wrong.");
    }
  }, [email, isLoaded]);

  const resetPassword = useCallback(async () => {
    try {
      const attempt = await signIn!.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password: newPassword,
      });

      if (attempt.status === "complete") {
        if (attempt.createdSessionId) {
          await setActive({ session: attempt.createdSessionId });
          Alert.alert("Success", "Password reset successful.");
          router.replace("/(root)/(tabs)/home");
        } else {
          Alert.alert("Error", "No session created. Try signing in manually.");
        }
      } else {
        Alert.alert("Error", "Password reset was not completed. Try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors?.[0]?.longMessage || "Reset failed.");
    }
  }, [code, newPassword]);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f4eb" }}>
      <Text style={{ fontSize: 24, fontFamily: "Jakarta-Bold", marginBottom: 20 }}>
        Forgot Password
      </Text>

      {!codeSent ? (
        <>
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            textContentType="emailAddress"
          />
          <CustomButton title="Send Reset Code" onPress={sendResetCode} className="mt-6" />
        </>
      ) : (
        <>
          <InputField
            label="Reset Code"
            placeholder="Enter the code from email"
            value={code}
            onChangeText={setCode}
          />
          <InputField
            label="New Password"
            placeholder="Enter new password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <CustomButton title="Reset Password" onPress={resetPassword} className="mt-6" />
        </>
      )}
    </View>
  );
};

export default ForgotPassword;
