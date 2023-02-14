import {View, Text, StyleSheet, Image} from "react-native"
import logo from '../../assets/icon.png'

export default function Loader() {
    return (
        <View style={loaderStyle.main}>
            <Image source={logo} style={{width: 100, height: 100}} />
        </View>
    )
}

const loaderStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})