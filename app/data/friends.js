// ===============================================================================
// friends
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    friendName: "James",
    gender: "male",
    friendEmail: "james@example.com",
    friendUserName: "jwin474089",
    phoneNumber: "630-715-7982",
    shortBio: "",
    surveyResults: [{
        raw: [1, 4, 6],
        average: 0,
        type: "leisure"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "morals"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "interests"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "random"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "superficiality"
    }],
    profile: "asdfasdfasdfasdfadsf",
    imageUrl: "http://bestfloridatalents.com/wp-content/uploads/2010/07/RJtieheadshot.jpg"

}, {
    friendName: "Steve",
    gender: "male",
    friendEmail: "steve@example.com",
    friendUserName: "scubasteve",
    phoneNumber: "630-968-0689",
    shortBio: "",
    surveyResults: [{
        raw: [1, 4, 6],
        average: 0,
        type: "leisure"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "morals"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "interests"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "random"
    }, {
        raw: [3, 4, 2],
        average: 0,
        type: "superficiality"
    }],
    profile: "asfasfafsfadff",
    imageUrl: "https://i0.wp.com/www.whatgivesphilanthropy.com/wp-content/uploads/2016/05/ZH_Headshot.jpg?resize=200%2C200&ssl=1"

}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
getAverages();

function getAverages() {
    var categorySumArray = [];
    var n = friends.length;
    var m = 3; // raw friends length

    var categorySumArray = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < 5; j++) {
            var categorySum = 0;
            for (var k = 0; k < 1; k++) {
                categorySum += friends[i].surveyResults[j].raw[k];
            }
            categorySumArray.push(categorySum);
        }
        console.log(categorySumArray)
    }
}
