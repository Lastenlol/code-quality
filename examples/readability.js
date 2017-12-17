function getHelloMessageFor(user) {
    if (user != null) {
        const fullName = '{user.name} {user.surname}';
        return 'Hello {fullName}!'
    }
    return 'Hello guest!'
}
// ->
function getHelloMessageFor(user) {
    if (user == null) return 'Hello guest!';

    const fullName = '{user.name} {user.surname}';
    return 'Hello {fullName}!'
}
