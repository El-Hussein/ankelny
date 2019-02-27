import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import DrawerBG from '../assets/Image/Artboard15/drawer.png';
import ProfileDefault from '../assets/Image/Artboard15/profile.png';
import feeds from '../assets/Image/Artboard15/feeds.png';
import friends from '../assets/Image/Artboard15/friends.png';
import notify from '../assets/Image/Artboard15/notify.png';
import cart from '../assets/Image/Artboard15/cart.png';
import saveMoney from '../assets/Image/Artboard15/saveMoney.png';
import logout from '../assets/Image/Artboard15/logout.png';
import settings from '../assets/Image/Artboard15/settings.png';
import login from '../assets/Image/Artboard15/login.png';

class Artboard3 extends Component{

    constructor(props) {
        super();
        this.state= {
            list:[
                {name:'الصفحة الرئيسية', src:feeds, active:true, link:'Home'},
                {name:'تسجيل الدخول', src:logout, active:false, link:'Profile'},
                {name:'الإشعارات', src:notify, active:false, link:'MyCart'},
                {name:'طلباتي', src:cart, active:false, link:'Call_Us'},
                {name:'شحن الرصيد', src:saveMoney, active:false, link:'Conditions'},
                {name:'إتصل بنا', src:friends, active:false, link:'Signin'},
                {name:'الشروط والاحكام', src:settings, active:false, link:'Exit'},
                {name:'خروج', src:login, active:false, link:'Exit'},
            ],
            userType:'customer',
        }
    }

    render () {
         return (
            <View>
                <Image source={DrawerBG}  style={{width:wp('100%'), height:hp('100%'), position:'absolute', zIndex:-1, right:wp('0%')}}/>
                <View style={{height:hp('25%'), width:wp('85%'), justifyContent:'center', alignItems:'center', marginVertical:hp('5%')}}>
                    <Image source={ProfileDefault} style={{width:wp('18%'), borderWidth:wp('0.8%'), borderColor:'white', height:wp('18%'), borderRadius:wp('6%'), backgroundColor:'red', marginBottom:wp('1%')}}/>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'), color:'black'}}> محمد عبدالله إبراهيم </Text>
                    <Text style={{fontSize:wp('3.5%'), color:'black'}}> شارع الرياض في وسط المدينه </Text>
                </View>
                
                <View style={{marginTop:hp('1.5%')}}>
                    <FlatList 
                    data={this.state.list}
                    renderItem={({item}) =>{
                        if(item.active){
                            activeStyle=StyleSheet.create({
                                AC:{backgroundColor:'#F89526', borderTopWidth:wp('0.3%'), borderTopColor:'rgba(255,255,255,0.5)'},
                                ACT:{color:'#47196B'}
                            });
                        }else{
                            activeStyle=StyleSheet.create({
                                AC:{}
                            });
                        }
                        return (
                        <TouchableOpacity disabled={item.active} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}>
                            <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'right', width:wp('55%')}, activeStyle.ACT]}> {item.name} </Text>
                            <Image source={item.src} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                        </TouchableOpacity>
                        )
                    }
                    }
                    keyExtractor={item => toString(item.name)}
                    />
                </View>

            </View>
         )
    }
}

export default Artboard3
