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

import Header from '../components/Header';

import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import passwordConfirm from '../assets/Image/Artboard2/passwordConfirm.png';
import email from '../assets/Image/Artboard2/email.png';
import phone from '../assets/Image/Artboard2/phone.png';
import location from '../assets/Image/Artboard2/location.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';

class Artboard2 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <View style={{backgroundColor:'whi'}}>
                <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                {/* HEADER */}
                <Header headerTitle="تسجيل العميل"/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('10%')}}>
                    <Image source={logo} style={{width:wp('45%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                
                <View style={{marginHorizontal:wp('18%')}}>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="اسم المستخدم"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
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
                    
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder=".........."
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="passwordConfirmation"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={passwordConfirm} style={{width:wp('4.5%'), height:wp('4.5%'), resizeMode:'contain'}}/>
                    </View>

                    
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="الايميل"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="email"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={email} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>
                    </View>

                    
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="رقم الجوال"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={phone} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>

                    
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder="العنوان"
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="address"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={location} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>
                    </View>

                    

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> تسجيل </Text>
                        </TouchableOpacity>
                    </View>
     
                </View>

            </View>
         )
        }
    }
    
    export default Artboard2
    
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