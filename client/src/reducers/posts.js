// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      // update & change current posts array
      return posts.map((post) => post._id === action.payload._id ? action.payload : post)


    case 'FETCH_ALL':
      // action.payload -> posts/posts (redux store)
      // goes into useSelector
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
}