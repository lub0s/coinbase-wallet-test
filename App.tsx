

import 'react-native-url-polyfill/auto';
import 'localstorage-polyfill';

// import {getRandomValues} from 'react-native-get-random-values';

// the SDK requires crypto object, which is not existent :shrug: I don't know how to make this work :( 
// global.crypto = require('expo-crypto') 
// global.crypto.getRandomValues = getRandomValues;

import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const APP_NAME = 'My Awesome App'
const APP_LOGO_URL = 'https://example.com/logo.png'
const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>'
const DEFAULT_CHAIN_ID = 1

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: false
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
