import { StyleSheet, Text,TextInput, View,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React,{ useState } from 'react'
import { useNavigation } from '@react-navigation/core'


const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation()


// *Region for OnPress Login
const handleLogin = () => {
    navigation.navigate('Home')
  }
// *End Region


  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputContainer}>
          
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text=>setEmail(text)}
        style={styles.input}>
        </TextInput>

       
        <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text=>setPassword(text)}
        style={styles.input}
        secureTextEntry>
        </TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,

    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16,
    },
})