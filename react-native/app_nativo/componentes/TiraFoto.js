import React, { useState } from "react"
import { View, Button, Image, Text, StyleSheet } from 'react-native'
import Cores from "../constantes/Cores"
import * as ImagePicker from 'expo-image-picker'

const TiraFoto = props => {
    const [imagemURI, setImagemURI] = useState()

    const tirarFoto = async() => {
        try{
            const foto = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16,9],
                quality: 1
            })
            //console.log(foto.assets[0].uri)
            setImagemURI(foto.assets[0].uri)
            props.onFotoTirada(foto.assets[0].uri)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
            {   !imagemURI?
                    <Text>Nenhuma foto</Text>
                :
                    <Image 
                        style={estilos.imagem} 
                        source={{uri: imagemURI}}/>
            }
            </View>
            <Button
                title="Tirar foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
})

export default TiraFoto