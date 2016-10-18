import {AddItem, ToggleTodo, UpdateTodo, FindById} from './Helpers'

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

test('toggleTodo marks an incomplete item complete', () => {
    const input = {id:1, name:'Sample todo', isComplete:false}
    const expected = {id:1, name:'Sample todo', isComplete:true}
    const result = ToggleTodo(input)
    expect(result).toEqual(expected)
})

test('toggleTodo marks a complete item incomplete', () => {
    const input = {id:1, name:'Sample todo', isComplete:true}
    const expected = {id:1, name:'Sample todo', isComplete:false}
    const result = ToggleTodo(input)
    expect(result).toEqual(expected)
})

test('FindById returns the todo with a matching id', () => {
    const todos = [
        {id:1, name:'Sample one', isComplete:false},
        {id:2, name:'Sample two', isComplete:false},
        {id:3, name:'Sample three', isComplete:false}
    ]

    const expected = {id:2, name:'Sample two', isComplete:false}
    const result = FindById(todos, 2)
    expect(result).toEqual(expected)
})

test('UpdateTodo returns a new list with the specified todo replaced by id', () => {
    const todos = [
        {id:1, name:'Sample one', isComplete:false},
        {id:2, name:'Sample two', isComplete:false},
        {id:3, name:'Sample three', isComplete:false}
    ]
    const updated = {id:2, name:'Sample two', isComplete:true}

    const expected = [
        {id:1, name:'Sample one', isComplete:false},
        {id:2, name:'Sample two', isComplete:true},
        {id:3, name:'Sample three', isComplete:false}
    ]

    const result = UpdateTodo(todos, updated)

    expect(result).toEqual(expected)


})
