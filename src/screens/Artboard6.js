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
import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../localization/localization';

import Header from '../components/Header';

import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard6/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import searchText from '../assets/Image/Artboard6/searchText.png';
import login from '../assets/Image/Artboard6/login.png';
import signout from '../assets/Image/Artboard6/signout.png';
import location from '../assets/Image/Artboard6/location.png';
import calender from '../assets/Image/Artboard6/calender.png';
import buttonR from '../assets/Image/Artboard6/buttonR.png';
import buttonG from '../assets/Image/Artboard6/buttonG.png';
import weight from '../assets/Image/Artboard6/weight.png';

class Artboard5 extends Component{

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
                <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                {/* HEADER */}
                <Header headerTitle={localization.newOrdersDriver}/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('7%'), marginBottom:hp('2%')}}>
                    <Image source={logo} style={{width:wp('50%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:hp('1.5%'), marginHorizontal:wp('10%'), height:hp('6%'), justifyContent:'flex-end', alignItems:'center', backgroundColor:'rgba(255, 255, 255, 0.8)', borderRadius:wp('2%'), borderColor:'#F89526', borderWidth:wp('0.2%')}}>
                    <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {localization.source} </Text>
                    <Image source={person} style={{width:wp('4%'), marginHorizontal:wp('2%'), height:wp('4%'), position:'relative', right:wp('0%')}}/>   
                </View>
                
                <View style={{flexDirection:'row', marginBottom:hp('1.5%'), marginHorizontal:wp('10%'), height:hp('14'), justifyContent:'flex-end', alignItems:'flex-start', paddingTop:hp('1.5%'), backgroundColor:'rgba(255, 255, 255, 0.8)', borderRadius:wp('2%'), borderColor:'#F89526', borderWidth:wp('0.2%')}}>
                    <Text style={{color:'black', paddingLeft:wp('2%'), fontSize:wp('4%'), width:'auto', textAlign:'right'}}> قل محتوياتة شقة مكون من 4 غرف و2 صالة واستقبال ومطبخ </Text>
                    <Image source={searchText} style={{width:wp('4%'), marginHorizontal:wp('2%'), height:wp('4%'), position:'relative', right:wp('0%')}}/>   
                </View>
                
                <View style={{height:hp('30%'), width:wp('80%'), marginHorizontal:wp('10%'), justifyContent:'center', alignItems:'center', marginBottom:hp('2%'), paddingTop:wp('2%')}}>
                    <View style={{height:hp('6%'), flexDirection:'row', width:wp('75%'), justifyContent:'space-between', alignItems:'center', paddingTop:wp('2%')}}>
                        <View style={styles.inputBorder} >
                            <Image source={location} style={{width:wp('4%'), marginHorizontal:wp('2%'), height:wp('4%')}}/>
                            <Text style={{color:'black', textAlign:'right', fontSize:wp('4%'), fontWeight:'bold', textAlign:'right'}}> الرياض </Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {localization.source} </Text>
                            <Image source={signout} style={{width:wp('6%'), marginHorizontal:wp('2%'), height:wp('6%')}}/>
                        </View>
                    </View>

                    <View style={{height:hp('6%'), flexDirection:'row', width:wp('75%'), justifyContent:'space-between', alignItems:'center', marginBottom:hp('2%'), paddingTop:wp('2%')}}>
                        <View style={styles.inputBorder} >
                            <Image source={location} style={{width:wp('4%'), marginHorizontal:wp('2%'), height:wp('4%')}}/>
                            <Text style={{color:'black', width:wp('30%'), textAlign:'right', fontSize:wp('4%'), fontWeight:'bold', textAlign:'right'}}> جدة </Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {localization.dis} </Text>
                            <Image source={login} style={{width:wp('6%'), marginHorizontal:wp('2%'), height:wp('6%')}}/>
                        </View>
                    </View>
                    
                    
                    <View style={{height:hp('6%'), flexDirection:'row', width:wp('75%'), justifyContent:'space-between', alignItems:'center', marginBottom:hp('2%'), paddingTop:wp('2%')}}>
                        <Text style={{color:'black', width:wp('30%'), textAlign:'right', fontSize:wp('4%'), fontWeight:'bold', textAlign:'right'}}> 25 مارس 2019 </Text>
                        
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {localization.date} </Text>
                            <Image source={calender} style={{width:wp('6%'), marginHorizontal:wp('2%'), height:wp('6%')}}/>
                        </View>
                    </View>
                    
                    <View style={{height:hp('6%'), flexDirection:'row', width:wp('75%'), justifyContent:'space-between', alignItems:'center', marginBottom:hp('2%'), paddingTop:wp('2%')}}>
                        <Text style={{color:'black', width:wp('30%'), textAlign:'right', fontSize:wp('4%'), fontWeight:'bold', textAlign:'right'}}> 2532 ريال </Text>
                        
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {localization.expectedPayment} </Text>
                            <Image source={weight} style={{width:wp('6%'), marginHorizontal:wp('2%'), height:wp('6%'), resizeMode:'contain'}}/>
                        </View>
                    </View>
                </View>

                

                <View style={{flexDirection:'row', marginHorizontal:wp('10%'), marginTop:hp('2%')}}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> {localization.accept} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonR}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> {localization.refuse} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
    
export default Artboard5
    
const styles = StyleSheet.create({
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        borderRadius:wp('1%'), 
        marginBottom:hp('1.5%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
        width:'62%',
        height:hp('5%')
    },
});