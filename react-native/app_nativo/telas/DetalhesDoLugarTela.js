import React from "react"
import {View, StyleSheet, Text} from 'react-native'

const DetalhesDoLugarTela=(props)=>{
    return(
        <View>
            <Text>Detalhes do Lugar</Text>
        </View>
    )
}

const estilos = StyleSheet.create({

})

DetalhesDoLugarTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam('tituloLugar')
    }
}

export default DetalhesDoLugarTela