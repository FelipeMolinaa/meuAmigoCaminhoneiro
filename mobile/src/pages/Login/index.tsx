import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const Login = () =>{
        
        const navigation = useNavigation()

        function handleLogin(){
            navigation.navigate('Verificador')
        }

        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <View>
                        <Text style={styles.title}>Faça o <Text style={{fontSize: 40}}>Login</Text></Text>
                        <Text style={styles.description}>App de ranking para caminhoneiros</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
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
    
      footer: {},
    
      select: {},
    
      input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
      },
    
      button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
      }
})

export default Login