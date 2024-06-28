import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Cores from '../constantes/Cores'

const LugarItem = props => {
    <TouchableOpacity
        onPress={props.onSelect}
        style = {estilo.LugarItem}
    >
        <Image
            style = {estilo.imagem}
            source = {{uri: props.imagem}}
        />
        <View style = {estilo.infoContainer}>
            <Text style = {estilo.nomeLugar}>{props.nomeLugar}</Text>
            <Text style = {estilo.endereco}>{props.endereco}</Text>
        </View>
    </TouchableOpacity>
}
const estilo = StyleSheet.create({
    lugarItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    endereco: {
        color: '#666',
        fontSize: 16
    }
})

export default LugarItem