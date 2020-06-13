import React, { useState, useEffect } from 'react'
import { View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Camera } from 'expo-camera';

const camera = () =>{
    const [hasPermission, setHasPermission] = useState<Boolean>(false);
    const [cameraRef, setCameraRef] = useState<Camera>()//????

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    // function hundleGravaVideo(){
    //     Camera.recordAsync()
    // }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Sem acesso a camera</Text>;
    }

    return (
    <View style={{ flex: 1,justifyContent:'center' }}>
      <Camera style={{ flex: 1,  }} type={Camera.Constants.Type.front} ref={ref =>{
          setCameraRef(ref)
      }}> 
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}

            onPress={hundleGravaVideo}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    );
}

export default camera