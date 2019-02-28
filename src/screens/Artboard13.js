import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
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
import Header from '../components/Header'
import localization from '../localization/localization';

import logo from '../assets/Image/Artboard8/logo.png';
import BG from '../assets/Image/Artboard12/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import phone from '../assets/Image/Artboard2/phone.png';
import car from '../assets/Image/Artboard13/car.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import email from '../assets/Image/Artboard13/email.png';

class Artboard13 extends Component{

    constructor(props) {
        super()
        this.state ={
            oredrs:[
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
            ]
        }
    }
    render () {
        return (
            <View style={{backgroundColor:'white'}}>
                <Header headerTitle={localization.callUs}/>
                <Image source={BG}  style={{width:wp('100'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={logo} style={{width:wp('40%'), height:hp('20%'), resizeMode:'contain'}}/>
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
                            placeholder={localization.phoneNumber}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={phone} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>

                     <View style={styles.inputBorderArea} >
                        <TextInput
                            style={styles.textArea}
                            placeholder={localization.message}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            multiline={true}
                        />
                        <Image source={email} style={{width:wp('4.5%'), height:wp('4.5%'), resizeMode:'contain'}}/>
                    </View>
                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {localization.send} </Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('1%')}}>
                    <Image source={car} style={{width:wp('100%'), height:hp('15%'), resizeMode:'contain'}}/>
                </View>
            </View>
        )
    }
}
    
export default Artboard13
    
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
        width:wp('70%'), 
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
    textArea:{
        width:wp('70%'), 
        padding:0, 
        height:hp('25%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3',
        textAlign:'right',
        textAlignVertical:'top'
    },
});