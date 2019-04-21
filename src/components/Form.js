import React,{Component} from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {togleIsAdding,addWord} from '../redux/actionCreator';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            en:'',
            vn:''
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(){
        const {en, vn} = this.state;
        this.props.addWord(en, vn);
        this.props.togleIsAdding();
    }
    render(){
        return(
            <View style={style.container}> 
                    <TextInput 
                    style={style.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({en: text})}
                    placeholder="English"
                    returnKeyType='next'
                    />
                    <TextInput 
                    style={style.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({vn: text})}
                    placeholder="Vietnamese"
                    returnKeyType='go'
                    />
                    <TouchableOpacity onPress = {this.onAdd}>
                    <Text style={style.button}>Add</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
        alignSelf:'stretch',
        backgroundColor:'#E7E7EB',
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        height: 40,
        width: 300,
        backgroundColor:'#8ED0CC',
        margin:10,
        paddingHorizontal:10,
    },
    button:{
        backgroundColor:'#339933',
        margin:5,
        padding:5,
        borderRadius:3
    }
});


export default  connect(null,{togleIsAdding, addWord})(Form);