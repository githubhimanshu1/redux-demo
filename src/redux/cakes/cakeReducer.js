import { BUY_CAKE } from "./cakeType"

const initCakeState={
    count:10
}

const cakeReducer=(state=initCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state
    }

}
export default cakeReducer