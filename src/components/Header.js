import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {togleIsAdding} from '../redux/actionCreator';
class Header extends Component{
    render(){
        return(
            <View style={style.header}> 
                    <Text></Text>
                    <Text>Hihi Language</Text>
                    <TouchableOpacity
                    onPress={()=> this.props.togleIsAdding()}
                    >
                    <Text style={{color:'yellow'}}>New</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}


export default connect(null, {togleIsAdding})(Header);

const style= StyleSheet.create({
    header:{
        backgroundColor:'#7681F0',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:22
    }
});