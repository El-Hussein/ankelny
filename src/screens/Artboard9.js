import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    ScrollView,
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

import car from '../assets/Image/Artboard9/car.png';
import car0 from '../assets/Image/Artboard9/car0.png';
import car1 from '../assets/Image/Artboard9/car1.png';
import car2 from '../assets/Image/Artboard9/car2.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';

class Artboard5 extends Component{

    constructor(props) {
        super()
        this.state ={
            oredrs:[
                {src:car0, type:'سطحة'},
                {src:car1, type:'متوسط'},
                {src:car1, type:'ديانا'},
            ]
        }
    }
    render () {
        return (
            <View style={{backgroundColor:'white'}}>
                {/* <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/> */}
                {/* HEADER */}
                <Header headerTitle={localization.home}/>
                
                

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={car} style={{width:wp('100%'), height:hp('45%'), resizeMode:'contain'}}/>
                </View>
                
                <ScrollView style={{height:hp('42%')}}>
                    <FlatList 
                        data={this.state.oredrs}
                        renderItem={({item}) =>{
                            return(
                                
                            <View style={{backgroundColor:'rgba(255,255,255, 0.8)', height:hp('16%'), width:wp('80%'), marginHorizontal:wp('10%'), borderRadius:wp('4%'), borderColor:'#F89526', borderWidth:wp('0.2%'), justifyContent:'center', alignItems:'space-between', marginBottom:hp('2%')}}>
                                <Text style={{color:'white', width:wp('18%'), paddingHorizontal:wp('1%'), position:'absolute', top:hp('6'), left:0, backgroundColor:'#47196B', fontSize:wp('5%')}}> {item.type} </Text>
                                <Image source={item.src} style={{width:wp('40%'), height:hp('15%'), resizeMode:'contain'}}/>
                            </View>

                        )
                        }
                    }
                    keyExtractor={item => toString(item.name)}
                    // style={{height:hp('50%')}}
                    numColumns={1}
                    /> 
                    <View style={{justifyContent:'center', alignItems:'center', marginBottom:hp('5%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}>
                            <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                            <Text style={styles.buttonText}> {localization.next} </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

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
});