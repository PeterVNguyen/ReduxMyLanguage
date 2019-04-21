import {createStore, combineReducers} from 'redux';

const defaultState={
    arrWords:[
        { id: 1, en:'action', vn: 'Hành động', memorized: true, isShow: false},
        { id: 2, en:'cute', vn: 'Dễ thương', memorized: false, isShow: true},
        { id: 3, en:'Confident', vn: 'Tự tin', memorized: false, isShow: true},
        { id: 4, en:'Persistence', vn: 'Kiên trì', memorized: true, isShow: true},
        { id: 5, en:'Hard work', vn: 'Chăm chỉ', memorized: false, isShow: false},
    ],
    filterStatus: 'SHOW_ALL',
    isAdding: false
};
//reducer
const reducer= ( state= defaultState, action) => {
    switch(action.type){
        case 'FILTER_SHOWALL':
            return {...state,filterStatus: 'SHOW_ALL'};
        case 'FILTER_MEMORIZED':
            return {...state,filterStatus: 'MEMORIZED'};
        case 'FILTER_NEEDPRATICE':
            return {...state,filterStatus: 'NEED_PRATICE'};
        case 'TOGLE_MEMORIZED':
            return {
                ...state,
                arrWords: state.arrWords.map(e =>{
                    if( e.id !== action.id) return e;
                    return {...e, memorized: !e.memorized};
                })
            };
        case 'TOGLE_SHOW':
            return {
                ...state,
                arrWords: state.arrWords.map(e =>{
                    if( e.id !== action.id) return e;
                    return {...e, isShow: !e.isShow};
                })
            };
        case 'TOGLE_ISADDING':
            return {
                ...state,
                isAdding: !state.isAdding
            };
        case 'ADD_WORD':
            return {
                ...state,
                arrWords:[{
                    id:state.arrWords.length+1,
                    en:action.en,
                    vn:action.vn,
                    memorized: false,
                    isShow: false
                }].concat(state.arrWords)
            };
        default:
            break;
    }
    return state;
};
// const isAddingReducer = (state= false, action) =>{
//     if (action.type === 'TOGLE_ISADDING')
//     return !state;
//     return state;
// };

// const filterStatusReducer = (state= 'SHOW_ALL', action) =>{
//     if (action.type === 'FILTER_SHOWALL') return 'SHOW_ALL';
//     if (action.type === 'FILTER_MEMORIZED') return 'MEMORIZED';
//     if (action.type === 'FILTER_NEEDPRATICE') return 'NEED_PRATICE';
//     return state;
// };
//  const arrWordsReducer = (state=[], action)=>{
//     if (action.type === 'TOGLE_MEMORIZED') {
//         return state.map(e =>{
//             if (e.id !== action.id) return e;
//             return {...e, memorized: !e.memorized};
//         })
//     }

//     if (action.type === 'TOGLE_SHOW') {
//         return state.map(e =>{
//             if (e.id !== action.id) return e;
//             return {...e, isShow: !e.isShow};
//         })
//     }

//     if (action.type === 'ADD_WORD'){
//         return [{
//             id : state.length + 1,
//             en : action.en,
//             vn : action.vn,
//             memorized : false,
//             isShow : false
//         }].concat(state);
//     }
//  };

//  // tao combine reducer

//  const reducer = combineReducers({
//     arrWords: arrWordsReducer ,
//     filterStatus: filterStatusReducer,
//     isAdding:isAddingReducer
//  });
//tao ra store
const store= createStore(reducer);

export default store;