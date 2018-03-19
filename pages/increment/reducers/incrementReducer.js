import { fromJS } from 'immutable'

const initialState = {
    isChoosen:false,
    newIcrementId:3,
    increments:[
        {
            id:0,
            price:8000,
            name:'财务报表',
            isChoosen:false
        },
        {
            id:1,
            price:6000,
            name:'场站监控',
            isChoosen:true
        },
        {
            id:2,
            price:8000,
            name:'分时电量',
            isChoosen:false
        },
    ]
};

export default (state=initialState,action) => {
    let newState;

    switch (action.type) {
        case 'increment/BEGIN_BUY_INCREMENT':
            return fromJS(state).set('isChoosen',true).toJS();

        case 'increment/DONE_BUY_INCREMENT':
            let newIncrement ={
                id:state.newIcrementId,
                price:action.payload,
                isChoosen:false
            };
            return fromJS(state).update('increments',list => list.push(newIncrement))
                                .set('newIcrementId',state.newIcrementId+1)
                                .set('isChoosen',false)
                                .toJS();

        case 'increment/FAIL_BUY_INCREMENT':
            return fromJS(state).set('isChoosen',false).toJS()
        default:
            return state
    }
}
