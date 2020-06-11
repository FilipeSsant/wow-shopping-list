export default function lists(state = [], action) {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, action.list];
    case "DELETE_LIST":
      return state.filter((list, listIndex) => {
        return listIndex !== action.listIndex;
      });
    case "ADD_ITEM":
      state.map((item, listIndex) => {
        if (listIndex === action.listIndex) {
          return (item.items = [...item.items, action.item]);
        }
        return item;
      });
    case "DELETE_ITEM":
      state.map((list, listIndex) => {
        if (listIndex === action.listIndex) {
          list.items = list.items.filter((item, itemIndex) => {
            return itemIndex !== action.itemIndex;
          });
        }
        return list;
      });
    default:
      return state;
  }
}
