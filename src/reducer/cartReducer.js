export const initialCartState = {
  cart: []
};

function cartReducer(state, action) {

  switch (action.type) {

    case "ADD":

      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE":

      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        )
      };

    case "CLEAR":

      return {
        ...state,
        cart: []
      };

    default:

      return state;
  }
}

export default cartReducer;