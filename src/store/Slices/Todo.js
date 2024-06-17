export default {
    state: {
        todo: [],
    },
    getters: {
        todoItems: (state) => {
            return state.todo
        },
        todoLenght: (state) => {
            return state.todo.length
        }
    },
    mutations: {
        addTodo(state, todo) {
            const lastTodo = state.todo[state.todo.length - 1];
            let id = lastTodo ? lastTodo.id + 1 : 1;
            state.todo.push({ title: todo, id: id });
        },
        removeTodo(state, todo) {
            state.todo = state.todo.filter(i => i.id !== todo.id);
        },
        updateTodo(state, todo) {
            state.todo = state.todo.map(i => i.id === todo.id ? todo : i);
        },
        
    },
    actions: {},
    modules: {}
};