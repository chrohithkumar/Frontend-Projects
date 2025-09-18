import { ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ScrollViewdisplay() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.scrollViewText}>These is ScrollView </Text>

          <Image
            source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
            style={{ width: 200, height: 200 }}
          />
          {Array.from({ length: 50 }, (_, i) => (
            <Text style={styles.listStyle}>Item{i + 1}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  scrollViewText: {
    fontSize: 30,
  },
  listStyle: {
    fontSize: 20,
    margin: 5,
  },
});
