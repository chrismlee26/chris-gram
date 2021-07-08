export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      // action.payload -> posts/posts (redux store)
      // goes into useSelector
      return action.payload;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}