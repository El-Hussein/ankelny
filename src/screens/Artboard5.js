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
import BG from '../assets/Image/Artboard5/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';

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
                <Header headerTitle=""/>
                
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%'), marginBottom:hp('2%')}}>
                    <Image source={logo} style={{width:wp('50%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                

                <FlatList 
                    data={this.state.oredrs}
                    renderItem={({item}) =>{
                    return(

                        <View style={{backgroundColor:'rgba(255,255,255, 0.8)', height:hp('16%'), width:wp('80%'), marginHorizontal:wp('10%'), borderRadius:wp('4%'), borderColor:'#F89526', borderWidth:wp('0.2%'), justifyContent:'center', alignItems:'space-between', marginBottom:hp('2%')}}>
                            <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item.from}  </Text>
                                <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {localization.from}  </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item.to}  </Text>
                                <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {localization.to}  </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item.date}  </Text>
                                <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {localization.date}  </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item.driverName}  </Text>
                                <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {localization.driverName}  </Text>
                            </View>
                        </View>

                    )
                    }
                }
                keyExtractor={item => toString(item.name)}
                style={{height:hp('80%')}}
                numColumns={1}
                /> 
            </View>
        )
    }
}
    
export default Artboard5
    
const styles = StyleSheet.create({
        
});