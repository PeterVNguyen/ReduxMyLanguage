export function togleIsAdding(){
    return {type :'TOGLE_ISADDING'};
}

export function addWord(en, vn){
    return {type: 'ADD_WORD', en, vn};
}

export function togleMemorized(id){
    return {type :'TOGLE_MEMORIZED',id};
}


export function togleShowWord(id){
    return {type :'TOGLE_SHOW', id};
}

export function filterShowAll(){
    return {type :'FILTER_SHOWALL'};
}

export function filterMemorized(){
    return {type :'FILTER_MEMORIZED'};
}

export function filterNeedPratice(){
    return {type :'FILTER_NEEDPRATICE'};
}