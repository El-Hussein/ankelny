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
import BG from '../assets/Image/Artboard14/bg.png';
import payment from '../assets/Image/Artboard14/payment.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';

class Artboard14 extends Component{

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
                <Header headerTitle={localization.rechargeTheBalance}/>
                <Image source={BG}  style={{width:wp('100'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={logo} style={{width:wp('40%'), height:hp('20%'), resizeMode:'contain'}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('10')}}>  
                    <Text style={{color:'black', fontSize:wp("6%"), fontWeight:'bold'}}> {localization.Balance} </Text>
                    <Text style={{color:'black', fontSize:wp("6%"), fontWeight:'bold'}}> 1255 ريال </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginVertical:hp('1%')}}>
                    <Image source={payment} style={{width:wp('100%'), height:hp('20%'), resizeMode:'contain'}}/>
                </View>
                <View style={{marginHorizontal:wp('10%')}}>

                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.CodeNumber}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {localization.shipping} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
    
export default Artboard14
    
const styles = StyleSheet.create({
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:wp('4%'), 
        marginBottom:hp('1.5%'), 
        borderWidth:wp('0.1%'),
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
        textAlign:'center'
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