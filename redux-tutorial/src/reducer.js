
const isstate={
    name: "Osama",
    wishes: ['eat','code']

}

const reducer = (state =isstate , action) => {
    if(action.type=="CHANGE_NAME"){
        return{
            name:action.payload
        }
    }
    return state;
}

export default reducer  ;