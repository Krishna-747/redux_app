import axios from 'axios'

export const addPlus = (data) => {
    return { type: 'ADD', plus: data }
}

export const topup = () => {
    return async(dispatch) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(addPlus(data))    
    }
}

export const ajaxcall = (values) => {
    return { type: 'AJAX', ajaxvals: values }
}

export const addMinus = () => {
    return { type: 'REMOVE', plusten: 10 }
}

export const dash = (b) => {
    return { type: 'Dash', plusten: b }
}