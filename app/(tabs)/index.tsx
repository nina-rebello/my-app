import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.flex1}></View>
        <View style={styles.flex2}></View>
        <View style={styles.flex3}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.flex1}></View>
        <View style={styles.flex2}></View>
        <View style={styles.flex3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  container3: {
    flex: 1,
    flexDirection: 'column'
  },
  flex1: {
    flex: 1,
    backgroundColor: 'red'
  },
  flex2: {
    flex: 2,
    backgroundColor: 'green'
  },
  flex3: {
    flex: 3,
    backgroundColor: 'blue'
  },
  myStyle: {
    width: 150,
    height: 100,
    backgroundColor: 'red',
    margin: 10

  }
});
