import { FETCH_LIST_OF_MOBILES_REQUEST, FETCH_LIST_OF_MOBILES_SUCCESS, FETCH_LIST_OF_MOBILES_FAILURE, SEARCH_MOBILE } from "../actions/action-type/mobile-list-actions"
const initialState={
    loading:false,
    mobiles:[],
    errors:''
}


const mobileListReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LIST_OF_MOBILES_REQUEST:return{
           ...state,
          loading:true
        }
        case FETCH_LIST_OF_MOBILES_SUCCESS:return{
           loading:false,
           mobiles: action.payload,
           errors:''
        }
        case FETCH_LIST_OF_MOBILES_FAILURE:return{
         loading:false,
         mobiles:[],
         errors: action.payload
        }
        case SEARCH_MOBILE:return{
            loading:false,
            mobiles:action.payload,
            errors:''
        }
        default:return state
    }

}
 
export default mobileListReducer
