import { FETCH_LIST_OF_MOBILES_REQUEST, FETCH_LIST_OF_MOBILES_SUCCESS, FETCH_LIST_OF_MOBILES_FAILURE, SEARCH_MOBILE } from "./action-type/mobile-list-actions";

export const fetchMobilesListRequest = () => {
  return {
    type: FETCH_LIST_OF_MOBILES_REQUEST,
  };
};
export const fetchMobilesListSuccess = (users) => {
  return {
    type: FETCH_LIST_OF_MOBILES_SUCCESS,
    payload: users,
  };
};
export const fetchMobilesListFailure = (errors) => {
  return {
    type: FETCH_LIST_OF_MOBILES_FAILURE,
    payload: errors,
  };
};
export const fetchSearchMobiles = (mobiles) => {
  return {
    type: SEARCH_MOBILE,
    payload: mobiles,
  };
};

export const fetchMobileStore = () => {
  return (dispatch) => {
    dispatch(fetchMobilesListRequest);
    let url = "http://localhost:5000/mobiles";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let dataIs=data.data
        dispatch(fetchMobilesListSuccess(dataIs));
      })
      .catch((error) => {
        dispatch(fetchMobilesListFailure(error.message));
      });
  };
};
export const searchMobile=(searchBy,searchItem)=>{
  return((dispatch)=> {
    let url=`http://localhost:3000/mobiles?${searchBy}=`+searchItem
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
         dispatch(fetchSearchMobiles(data))
    })
  })
}