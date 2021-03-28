
const initialState = {
    valOne: [],
    addedOne: ''
}

const Redone = (state = initialState, actions) => {
    const stateCopy = { ...state }
    
    if(actions.type === 'ADD')
        stateCopy.valOne = actions.plus

    if(actions.type === 'AJAX')
        stateCopy.addedOne = actions.ajaxvals

    return stateCopy
}

export default Redone