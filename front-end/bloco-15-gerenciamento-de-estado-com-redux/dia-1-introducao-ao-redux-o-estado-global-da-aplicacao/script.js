const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length ? 0 : state.index + 1
      }
      case 'PREVIOUS_COLOR':
        return {
          ...state,
        index: state.index === state.colors.length ? 0 : state.index - 1
      }
      default:
        state;
      }
    }

const store = Redux.createStore(reducer);

const nextButton = document.querySelector('#next');
const nextAction = { type: 'NEXT_COLOR' }
const previousButton = document.querySelector('#previous');
const previousAction = { type: 'PREVIOUS_COLOR' }

nextButton.addEventListener('click', () => {
  store.dispatch(nextAction)
})

previousButton.addEventListener('click', () => {
  store.dispatch(previousAction)
})