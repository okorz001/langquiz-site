import {fuzzySearch} from '../utils'

it.each([
    ['car', 'car'],
    ['car', 'cart'],
])('%s accepts %s', (term, candidate) => {
	expect(fuzzySearch(term, candidate)).toBe(true)
})

it.each([
    ['foo', 'bar'],
])('%s rejects %s', (term, candidate) => {
	expect(fuzzySearch(term, candidate)).toBe(false)
})
