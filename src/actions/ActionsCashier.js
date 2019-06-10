const cashierReducer=(state=[],action)=>{

    switch(action.type){
        case "ADD_ITEM": return {...action};
        case "REMOVE_ITEM": return {id:action.id};
        default: return state;
    }
}

export {cashierReducer};