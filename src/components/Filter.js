import React, {Component} from 'react';
import {View, TouchableOpacity,StyleSheet,Text} from 'react-native';
import {connect} from 'react-redux';
import {filterShowAll, filterMemorized, filterNeedPratice} from '../redux/actionCreator';
class Filter extends Component{
    getTextStyle(statusName){
        const {myFilterStatus}=this.props;
        if (statusName===myFilterStatus) return { color: '#F1F434',fontWeight:'bold'};
        return style.buttonText;
    }
    render(){
        return(
            <View style={style.container}>
                <TouchableOpacity onPress={()=>this.props.filterShowAll()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}> Show All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.filterMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}> Memorized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.filterNeedPratice()}>
                    <Text style={this.getTextStyle('NEED_PRATICE')}> Need Pratice</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {myFilterStatus: state.filterStatus};
}
export default connect(mapStateToProps,{filterShowAll, filterMemorized, filterNeedPratice})(Filter);

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#BF5C5C',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    buttonText:{
        color:'white'
    }
});