import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles';
import batLogo from '../../../assets/batman-logo-png-2038.png';

const Main = () => {

  const GetFormData = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Image source={batLogo} style={styles.logo}/>
      </View>
      <View>
        <TouchableOpacity
          onPress={GetFormData}
          style={styles.button}
        >
          <Text style={styles.buttonText}>activate signal bat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main