import {AddItem} from './Helpers'

test('AddItem Returns An Updated List', () => {
  const Expected = [1,2,3]
  const list = [1,2]
  const result = AddItem(list, 3)
  expect(result).toEqual(Expected)
})

test('AddItem Returns An Updated List', () => {
  const Expected = [1,2,3]
  const list = [1,2]
  const result = AddItem(list, 3)
  // Verifying immutable nature of the concatenated array
  expect(result).not.toBe(list)
})
