var users = getUsers();
var handledUsers = handleUsers(users);
sendNotificationsToUsers(users);
// ->
sendNotificationsToUsers(handleUsers(getUsers()));