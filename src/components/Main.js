import React,{Component} from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';
class Main extends Component{
    getWordList(){
        const {myFilter, myWords} = this.props;
        if (myFilter==='MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter==='NEED_PRATICE') return myWords.filter(e => !e.memorized);
        return myWords;
        
    }
    render(){
        return(
            <View style={style.container}>
                <Header/>
                {this.props.myIsAdding ? <Form/> : null}
                <View style={{flex:10}}>
                    <FlatList
                    data={this.getWordList()}
                    renderItem={({item})=><Word myWord={item}/>}
                    keyExtractor={item=> item.id}
                    />
                </View>
                <Filter/>
                
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#E8E8E8',
        flex:1
    },
    
});

function mapStateToProps(state){
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,
    };
}

export default connect(mapStateToProps)(Main);