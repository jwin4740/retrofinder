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
    phoneNumber: "630-715-7982",
    imageUrl: "http://bestfloridatalents.com/wp-content/uploads/2010/07/RJtieheadshot.jpg"                             
  }, {
    friendName: "Steve",
    friendEmail: "steve@example.com",
    friendUserName: "scubasteve",
    phoneNumber: "630-968-0689",
    imageUrl: "https://i0.wp.com/www.whatgivesphilanthropy.com/wp-content/uploads/2016/05/ZH_Headshot.jpg?resize=200%2C200&ssl=1"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
