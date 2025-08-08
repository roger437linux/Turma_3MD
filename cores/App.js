import { View, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.ladoalado}>
        <View style={styles.area1}>
          <Image source={require('./src/assets/bird1.png')} resizeMode='center' style={{ flex: .5 }} />
        </View>
        <View style={styles.area2}>
          <Image source={require('./src/assets/bird2.png')} resizeMode='center' style={{ flex: .5 }} />
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area3}>
          <Image source={require('./src/assets/bird3.png')} resizeMode='center' style={{ flex: .5 }} />
        </View>
        <View style={styles.area4}>
          <Image source={require('./src/assets/bird4.png')} resizeMode='center' style={{ flex: .6 }} />
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area5}>
          <Image source={require('./src/assets/bird7.png')} resizeMode='center' style={{ flex: .5 }} />
        </View>
        <View style={styles.area6}>
          <Image source={require('./src/assets/bird6.png')} resizeMode='center' style={{ flex: .5 }} />
        </View>
      </View>

    </View>
  );
}
