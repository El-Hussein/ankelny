import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    I18nManager,
    Picker,
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
import BG from '../assets/Image/Artboard4/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import passwordConfirm from '../assets/Image/Artboard2/passwordConfirm.png';
import phone from '../assets/Image/Artboard2/phone.png';
import location from '../assets/Image/Artboard2/location.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import button from '../assets/Image/Artboard4/button.png';
import dropdown from '../assets/Image/Artboard4/dropdown.png';

class Artboard2 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <View style={{backgroundColor:'whi'}}>
                <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                {/* HEADER */}
                <Header headerTitle={localization.headerSigninDriver}/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%'), marginBottom:hp('2%')}}>
                    <Image source={logo} style={{width:wp('45%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                
                <View style={{marginHorizontal:wp('10%')}}>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.userName}
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

                    
                    {/* drop down */}
                    <View style={{backgroundColor:'#F89526', marginVertical:hp('2%'), justifyContent:'center', alignItems:'center', height:hp('5.5%'), borderRadius:wp('3%')}}>
                        <Image source={dropdown} style={{position:'absolute', width:wp('3%'), height:wp('3%'), resizeMode:'contain', left:wp('3%')}}/>
                        <Picker
                        // selectedValue={this.state.language}
                        style={{color:'#47196B', width:wp('60%'), marginRight:wp('10%')}}
                        >
                            <Picker.Item label={localization.selectCategory} value="choose_city" />
                            <Picker.Item label="طوخ" value="toukh" />
                        </Picker>
                    </View>
                    

                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:hp('1.5%')}}>
                        <ImageBackground source={button} style={{width:wp('25%'), height:hp('6%'), resizeMode:'contain', justifyContent:'center', alignItems:'flex-start', paddingLeft:wp('3%')}}>
                            <Text style={{justifyContent:'center', alignItems:'center', fontSize:wp('3.5%'), color:'black', width:wp('15%'), textAlign:'center', fontWeight:'bold', textAlign:'justify'}}> {localization.License} </Text>
                        </ImageBackground>
                        <ImageBackground source={button} style={{width:wp('25%'), height:hp('6%'), resizeMode:'contain', justifyContent:'center', alignItems:'flex-start', paddingLeft:wp('3%')}}>
                            <Text style={{justifyContent:'center', alignItems:'center', fontSize:wp('3.5%'), color:'black', width:wp('15%'), textAlign:'center', fontWeight:'bold', textAlign:'justify'}}> {localization.imageFormat} </Text>
                        </ImageBackground>
                        <ImageBackground source={button} style={{width:wp('25%'), height:hp('6%'), resizeMode:'contain', justifyContent:'center', alignItems:'flex-start', paddingLeft:wp('3%')}}>
                            <Text style={{justifyContent:'center', alignItems:'center', fontSize:wp('3.5%'), color:'black', width:wp('15%'), textAlign:'center', fontWeight:'bold', textAlign:'justify'}}> {localization.imageID} </Text>
                        </ImageBackground>
                    </View>

                    
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.phoneNumber}
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
                            placeholder={localization.address}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="address"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={location} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>
                    </View>

                    

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> {localization.signup} </Text>
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