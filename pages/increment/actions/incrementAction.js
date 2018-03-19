const prefix="increment/"

let actions = {
    buyIncrement:() => (dispatch,getState) => {
        if(getState().isBuying)
        return;

        dispatch(actions.beginBuyIncrement());

    },
    beginBuyIncrement:() => ({
        type:'increment/BEGIN_BUY_INCREMENT'
    }),
    doneBuyIncrement:() => ({
        type:'increment/DONE_BUY_INCREMENT',
        payload:price
    }),

    failBuyIncrement:errMsg => ({
        type:'incerment/FAIL_BUY_INCREMENT'
    })

}

export default actions
