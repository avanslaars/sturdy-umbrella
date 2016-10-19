export const AddItem = (list, item) => list.concat(item)

export const GenerateId = () => Math.floor(Math.random()*100000)

export const ToggleTodo = (todo) => Object.assign({}, todo, {isComplete: !todo.isComplete})

export const UpdateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1)
    ]
}

export const FindById = (list, id) => list.find(item => item.id === id)

export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)
