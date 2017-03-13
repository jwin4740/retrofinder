// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    friendName: "James",
    friendEmail: "james@example.com",
    friendUserName: "jwin474089",
    phoneNumber: "630-715-7982"
  }, {
    friendName: "Steve",
    friendEmail: "steve@example.com",
    friendUserName: "scubasteve",
    phoneNumber: "630-968-0689"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
