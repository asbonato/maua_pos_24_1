import React from "react"
import {View, StyleSheet, Text, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import LugarItem from "../componentes/LugarItem"

const ListaDeLugaresTela=(props)=>{
    const lugares = useSelector(estado => estado.lugares.lugares)
    return(
        <FlatList
            data={lugares}
            keyExtractor={lugar => lugar.id}
            renderItem={
                lugar=>
                    <LugarItem
                        nomeLugar={lugar.item.titulo}
                        onSelect={()=>
                            props.navigation.navigate("DetalheDoLugar", 
                                {
                                    tituloLugar: lugar.item.titulo,
                                    idLugar: lugar.id
                                }
                            )
                        }
                        imagem={lugar.item.imagemURI}
                        endereco={null}
                    />
            }
        />
    )
}

const estilos = StyleSheet.create({

})

export default ListaDeLugaresTela