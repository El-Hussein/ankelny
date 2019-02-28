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
import car from '../assets/Image/Artboard10/car.png';
import search from '../assets/Image/Artboard10/search.png';
import searchText from '../assets/Image/Artboard10/searchText.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';

class Artboard10 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <View style={{backgroundColor:'white'}}>
                {/* <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/> */}
                {/* HEADER */}
                <Header headerTitle={localization.signin}/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%'), marginBottom:hp('2%')}}>
                    <Image source={car} style={{width:wp('100%'), height:hp('25%'), resizeMode:'contain'}}/>
                </View>
                
                <View style={{marginHorizontal:wp('18%')}}>

                    <View style={styles.inputBorder} >
                        <Image source={search} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.source}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#47196B"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputBorder} >
                        <Image source={search} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.dis}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="password"
                            placeholderTextColor="#47196B"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={{marginHorizontal:wp('10%')}}>
                    <View style={styles.inputBorderArea} >
                        <TextInput
                            style={styles.textArea}
                            placeholder={localization.message}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#47196B"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            value="قل محتوياته شقه مكون من 4 غرف و2 صالة واستقبال ومطبخ"
                        />
                        <Image source={searchText} style={{width:wp('4.5%'), height:wp('4.5%'), resizeMode:'contain'}}/>
                    </View>
                    <View style={[styles.inputBorder, {height:hp('6%'), borderRadius:wp('4%'), paddingHorizontal:wp('2%')}]} >
                        <TextInput
                            style={styles.textInput}
                            placeholder=""
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="password"
                            placeholderTextColor="#47196B"
                            underlineColorAndroid="transparent"
                            value="1250 ريال"
                        />
                        <Text style={{borderBottomRightRadius:wp('4%'), borderTopRightRadius:wp('4%'), height:hp('6%'), paddingHorizontal:wp('1%'), fontSize:wp('4%'), color:'#47196B', textAlignVertical:'center', backgroundColor:'#F89526'}}> {localization.expectedPayment} </Text>
                    </View>
                </View>


                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('1%')}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {localization.send} </Text>
                    </TouchableOpacity>
                </View>
     

            </View>
         )
        }
    }
    
    export default Artboard10
    
    const styles = StyleSheet.create({
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:wp('2%'), 
        marginBottom:hp('1.5%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
    },
    inputBorderArea:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'flex-start', 
        borderRadius:wp('4%'), 
        marginBottom:hp('2.5%'),
        paddingTop:hp('1%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
    },
    textInput:{
        width:wp('55%'), 
        padding:0, 
        height:hp('4%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#47196B',
        textAlign:'right'
    },
    textArea:{
        width:wp('70%'), 
        padding:0, 
        height:hp('22%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#47196B',
        textAlign:'right',
        textAlignVertical:'top'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
});