import { render, fireEvent } from '@testing-library/react'
import Button from '../../button/Button'
import renderer from 'react-test-renderer'

describe('Main Branch', () => {
    it('react-test', () => {
        render(<Button></Button>)
    })

    it('react-test-button 1', () => {
        const { getByTestId } = render(<Button btn_val='Get'></Button>)
        expect(getByTestId('button')).toHaveTextContent('Get')
    })

    it('react-test-button 2', () => {
        const { getByTestId } = render(<Button btn_val='Save'></Button>)
        expect(getByTestId('button')).toHaveTextContent('Save')
    })

    it('react-snapshot', () => {
        const tree = renderer.create(<Button></Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('click button', () => {
        const { getByTestId } = render(<Button></Button>)
        const btnclick = getByTestId('button')
        const btn = getByTestId('stateid')
        const mat = Number(btn.innerHTML)
        expect(mat).toBe(0)
        fireEvent.click(btnclick)
        const sat = Number(btn.innerHTML)
        expect(sat).toBe(30)
    })

    it('input button', () => {
        const { getByTestId } = render(<Button></Button>)
        const search = getByTestId('input_val')
        fireEvent.change(search, { target: { value: 'First Text' } })
        expect(search.value).toBe('First Text')
    })
})