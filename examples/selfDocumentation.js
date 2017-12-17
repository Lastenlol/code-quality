function handleUsers(users) {
    sendNotificationsToUsers(users);
    // handle users somehow

    // some work with database
    // ...
    return db.executeQuery('select * from service') // function supposes to handle users but it return services. what?
}
// ->
function handleUsers(users) {
    sendNotificationsToUsers(users);
    // handle users somehow
}

function getServices() {
    return db.executeQuery('select * from service') // function supposes to handle users but it return services. what?
}

function doSmthWithDB() {
    // some work with database
}