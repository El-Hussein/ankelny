import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    I18nManager
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../localization/localization';
import Header from '../components/Header';

import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';

class Artboard1 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <View style={{backgroundColor:'whi'}}>
                <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                {/* HEADER */}
                <Header headerTitle={localization.headerSignin}/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('10%')}}>
                    <Image source={logo} style={{width:wp('45%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                
                <View style={{marginHorizontal:wp('18%')}}>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.userName}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={person} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder=".........."
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="password"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={lock} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:wp('1%'), alignItems:'center'}}>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Text style={{color:'#47196B', fontSize:wp('4%')}}> {localization.forgetPassword}</Text>
                            <Image source={lockBlue} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('10%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> {localization.signin} </Text>
                        </TouchableOpacity>
                    </View>
     
                </View>

            </View>
         )
        }
    }
    
    export default Artboard1
    
    const styles = StyleSheet.create({
        inputBorder:{
            backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:wp('4%'), 
        marginBottom:hp('1.5%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
    },
    textInput:{
        width:wp('55%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3',
        textAlign:'right'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
});