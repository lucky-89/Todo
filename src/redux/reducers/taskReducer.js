const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        { id: Date.now(), name: action.payload.name, priority: action.payload.priority },
      ];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
