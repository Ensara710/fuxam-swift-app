import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { log } from "../logger";
import { RootStackScreenProps } from "../types";
import { OAuthButtons } from "../components/OAuth";
import { styles } from "../components/Styles";
import { useTheme } from 'react-native-paper';
import { useColorScheme } from "react-native";


const colorSchemes = {
  light: {
    background: 'rgba(249, 249, 249, 1)',
  contrast: 'rgba(5, 14, 63, 1)',
  foreground: 'rgba(255, 255, 255, 1)',
  card: 'rgba(255, 255, 255, 1)',
  cardContrast: 'rgba(242, 242, 242, 1)',
  popover: 'rgba(255, 255, 255, 1)',
  popoverContrast: 'rgba(5, 14, 63, 1)',
  primary: 'rgba(43, 93, 230, 1)',
  primaryContrast: 'rgba(225, 242, 250, 1)',
  secondary: 'rgba(229, 241, 250, 1)',
  secondaryContrast: 'rgba(14, 24, 48, 1)',
  muted: 'rgba(199, 204, 215, 1)',
  mutedContrast: 'rgba(74, 97, 119, 1)',
  accent: 'rgba(236, 245, 250, 1)',
  accentContrast: 'rgba(14, 24, 48, 1)',
  destructive: 'rgba(217, 48, 37, 1)',
  destructiveContrast: 'rgba(39, 0, 0, 1)',
  warning: 'rgba(252, 243, 207, 1)',
  warningContrast: 'rgba(64, 42, 26, 1)',
  positive: 'rgba(45, 203, 117, 1)',
  positiveContrast: 'rgba(16, 67, 41, 1)',
  border: 'rgba(228, 236, 240, 1)',
  input: 'rgba(228, 236, 240, 1)',
  ring: 'rgba(37, 87, 226, 1)'
  },
  dark: {
    background:'rgba(18, 2, 23, 1)',
    contrast: 'rgba(225, 241, 250, 1)',
    foreground: 'rgba(15, 26, 53, 1)',
    card: 'rgba(7, 15, 63, 1)',
    cardContrast: 'rgba(225, 241, 250, 1)',
    popover: 'rgba(7, 15, 63, 1)',
    popoverContrast: 'rgba(225, 241, 250, 1)',
    primary: 'rgba(57, 125, 246, 1)',
    primaryContrast: 'rgba(14, 25, 49, 1)',
    secondary: 'rgba(16, 41, 64, 1)',
    secondaryContrast: 'rgba(225, 241, 250, 1)',
    muted: 'rgba(19, 45, 69, 1)',
    mutedContrast: 'rgba(88, 115, 153, 1)',
    accent: 'rgba(16, 41, 64, 1)',
    accentContrast: 'rgba(225, 241, 250, 1)',
    destructive: 'rgba(190, 64, 64, 1)',
    destructiveContrast: 'rgba(242, 227, 241, 1)',
    warning: 'rgba(78, 41, 1, 1)',
    warningContrast: 'rgba(246, 239, 239, 1)',
    positive: 'rgba(7, 160, 72, 1)',
    positiveContrast: 'rgba(179, 202, 197, 1)',
    border: 'rgba(16, 41, 64, 1)',
    input: 'rgba(16, 41, 64, 1)',
    ring: 'rgba(48, 132, 195, 1)'
  },
};

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<"SignIn">) {

  const { signIn, setSession, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const colorScheme = useColorScheme();
const theme = colorSchemes[colorScheme!];


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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../assets/images/logo.png')} style={{ height: 60, width: 60 }} />
      <Text style={{ color: theme.contrast, fontSize: 30, fontWeight: '700', marginBottom: 4 }}> Sign In</Text>
      <Text style={{ color: theme.contrast, fontSize: 14, fontWeight: '500', marginBottom: 46}}> With Fuxam</Text>
      <View style={{ height: 43, width: 330, borderRadius: 10, borderColor: theme.border, borderWidth: 1, marginBottom: 20 }}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}

          style={[styles.textInput, { color: theme.contrast}]}
          underlineColorAndroid="transparent"
          placeholder="Email..."
          placeholderTextColor={theme.contrast}
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={{ height: 43, width: 330, borderRadius: 10, borderColor: theme.border, borderWidth: 1, marginBottom: 20 }}>
        <TextInput
          value={password}
          style={[styles.textInput, { color: theme.contrast}]}
          placeholder="Password..."
          placeholderTextColor={theme.contrast}
          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={[styles.primaryButton, { backgroundColor: theme.contrast, borderRadius: 10 }]} onPress={onSignInPress}>
        <Text style={[styles.primaryButtonText, { color: theme.background }]}>Sign in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.contrast }} />
        <View>
          <Text style={{ width: 50, color: theme.contrast, textAlign: 'center' }}>OR </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.contrast }} />
      </View>

      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={[styles.oauthView, { backgroundColor: theme.background, }]}>
          <OAuthButtons />
        </View>
      </View>
    </View>
  );
}
