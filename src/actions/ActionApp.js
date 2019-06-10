const appReducer=(state=[],action)=>{
    if(action.type==='APP_READY'){
        return state;
    }
}

export {appReducer};