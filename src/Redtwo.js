
const initialState = {
    valTwo: 0
}

const Redtwo = (state = initialState, actions) => {
    const stateCopy = { ...state }

    if(actions.type === 'REMOVE')
        stateCopy.valTwo = stateCopy.valTwo + actions.plusten

    if(actions.type === 'SAGA_RED'){
        stateCopy.valTwo = stateCopy.valTwo + actions.plusten
        console.log(actions)
    }

    return stateCopy
}

export default Redtwo