const todos = (state = [], action) => {
  let newTodos;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );

        case 'UPDATE_TODO':
          newTodos = [...state]
          let index = -1;
          for (let i = 0; i < newTodos.length; i++) {
            index++;
            if(newTodos[i].id === action.payload.id) {
          break;
            }
              }
              if(index !==-1) {
                newTodos[index] = action.payload;
                return newTodos;
                
              }
              break;

              

    default:
      return state;
  }
}

export default todos;