import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

import { fetchAPI } from "@/lib/fetch";

export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export const googleOAuth = async (startOAuthFlow: any) => {
  try {
    const { createdSessionId, setActive, signUp, signIn } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/(tabs)/home"),
    });

    // If either new session is created or setActive is provided, proceed
    if (createdSessionId || setActive) {
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      }

      // If this is a new user (signUp), call your API to save user info
      if (signUp?.createdUserId) {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: `${signUp.firstName} ${signUp.lastName}`,
            email: signUp.emailAddress,
            clerkId: signUp.createdUserId,
          }),
        });
      }

      return {
        success: true,
        code: "success",
        message: "You have successfully signed in with Google",
      };
    }

    return {
      success: false,
      code: "no_session",
      message: "No session was created",
    };
  } catch (err: any) {
    console.error("OAuth Error: ", err);

    if (err.code === "session_exists") {
      return {
        success: true,
        code: "session_exists",
        message: "You are already signed in",
      };
    }

    return {
      success: false,
      code: err.code,
      message: err?.errors?.[0]?.longMessage || "Google sign-in failed",
    };
  }
};
