import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {togleMemorized, togleShowWord} from '../redux/actionCreator';
class Word extends Component{
    render(){
        const {en, vn, memorized,isShow,id} = this.props.myWord;
        const textDecorationLine= memorized ? 'line-through' : 'none';
        const memorizedButtonText= memorized ? 'Forget' : 'Memorized';
        const meaning = isShow ? vn : '-----------';
        return(
            <View style={style.container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={style.buttonView}>
                    <TouchableOpacity 
                    style={style.button}
                    onPress= {()=>this.props.togleMemorized(id)}
                    >
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}
                    onPress= {()=>this.props.togleShowWord(id)}
                    >
                        <Text>Show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#73BFC9',
        padding: 10,
        margin: 7,
        borderRadius:5
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button:{
        backgroundColor:'#339933',
        margin:5,
        padding:5,
        borderRadius:3
    }
});
export default connect (null, {togleMemorized, togleShowWord})(Word);