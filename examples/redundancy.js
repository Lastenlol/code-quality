var users = getUsers();
var handledUsers = handleUsers(users);
sendNotificationsToUsers(users);
// if it doesn't affect readability ->
sendNotificationsToUsers(handleUsers(getUsers()));

function getResult() {
    var result = 1;
    return result
}
