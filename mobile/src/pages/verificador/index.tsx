import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Feather as Icon} from '@expo/vector-icons'
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'



const Verificador = () =>{
    const navigation = useNavigation()
    function handleViewCamera(){
        navigation.navigate('Camera')
    }

    return(
        <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50,
                }}
                onPress={handleViewCamera}
            >
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
      },
    
      main: {
        flex: 1,
        justifyContent: 'center',
      },
    
      title: {
        color: '#322153',
        fontSize: 32,
        maxWidth: 260,
        marginTop: 64,
      },
    
      description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        maxWidth: 260,
        lineHeight: 24,
      },
})

export default Verificador