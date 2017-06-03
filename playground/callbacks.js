var getUser = (id, callBack) => {
  var user = {
    id: id,
    name: 'Justin'
  };

  setTimeout(() => {
    callBack(user);
  }, 3000);
};

getUser(21, (userObject) => {
  console.log(userObject);
});
