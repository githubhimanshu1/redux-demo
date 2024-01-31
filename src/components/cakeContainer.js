import react from 'react'
import { buyCake } from '../redux/cakes'
import {connect} from 'react-redux'
function CakeContainer(props){
    return(
        <>
        <h2>Cake Container {props.count}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}

const mapStateToProps=state=>{
    return{
        count:state.count
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps
,mapDispatchToProps)(CakeContainer)