import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { log } from "../logger";
import { RootStackScreenProps } from "../types";
import { OAuthButtons } from "../components/OAuth";
import { styles } from "../components/Styles";
import { useTheme } from 'react-native-paper';

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<"SignIn">) {
  const theme = useTheme();
  const { signIn, setSession, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };


  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={require('../assets/images/logo.png')} style={{ height: 70, width: 70 }} />
      <Text style={{ color: theme.colors.onBackground, fontSize: 37, fontWeight: '500', marginBottom: 1 }}> Sign In</Text>
      <Text style={{ color: theme.colors.onBackground, fontSize: 15, fontWeight: '300', marginBottom: 40 }}> With Fuxam</Text>
      <View style={{ height: 45, width: "90%", borderRadius: 10, borderColor: theme.colors.onBackground, borderWidth: 1, marginBottom: 20 }}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}

          style={[styles.textInput, { color: theme.colors.onBackground }]}
          underlineColorAndroid="transparent"
          placeholder="Email..."
          placeholderTextColor={theme.colors.onBackground}
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={{ height: 45, width: "90%", borderRadius: 10, borderColor: theme.colors.onBackground, borderWidth: 1, marginBottom: 20 }}>
        <TextInput
          value={password}
          style={[styles.textInput, { color: theme.colors.onBackground }]}
          placeholder="Password..."
          placeholderTextColor={theme.colors.onBackground}
          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={[styles.primaryButton, { backgroundColor: theme.colors.onBackground, borderRadius: 10 }]} onPress={onSignInPress}>
        <Text style={[styles.primaryButtonText, { color: theme.colors.background }]}>Sign in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.onBackground }} />
        <View>
          <Text style={{ width: 50, color: theme.colors.onBackground, textAlign: 'center' }}>OR </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.onBackground }} />
      </View>

      <View style={[styles.container, { backgroundColor: theme.colors.background, }]}>
        <View style={[styles.oauthView, { backgroundColor: theme.colors.background, }]}>
          <OAuthButtons />
        </View>
      </View>
    </View>
  );
}
