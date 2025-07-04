import { Image, StyleSheet, Text, View } from "react-native";

export function InitialLoader(){
    return (
    <View style={styles.view}>
        <Image
          source={require('../assets/images/contract_logo.png')}
          style={styles.image}
        />
        <Text style={styles.logoText}>BluePact</Text>
        <Text>Trusted Place To Make Contract</Text>
    </View>)
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#007FFF',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '15%',
    width: '32%',
  },
  logoText: {
    fontSize: 20,
    marginBottom: 3,
    marginTop: 3,
    fontWeight: '800'
  }
});
