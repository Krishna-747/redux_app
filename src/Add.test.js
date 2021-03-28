import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Add from './Add'


function renderWithRedux(
    component,
    { initialState, store = createStore(reducer, initialState) } = {  }
){
    return {
        ...render(<Provider store={store}></Provider>)
    }
}

describe('!st Test', () => {
    it('Test', () => {
        const { getByTestId } = render(<Add />)
    })
})
