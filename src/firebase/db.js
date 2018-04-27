import {
    db
} from './firebase';

// User API

export const createUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
    });

export const addGame = (userID, date, time, duration, sport, location, dateCreated, numParticipants) => {
    var game = db.ref("games").push({
        owner: userID,
        date: date,
        time: time,
        duration: duration,
        sport: sport,
        location: location,
        dateCreated: dateCreated,
        numParticipants: numParticipants
    });
    var gameID = game.key;
    db.ref(`games/${gameID}/participants/${userID}`).set(dateCreated);
    db.ref(`users/${userID}/games/${game.key}`).set(gameID);
    console.log("game added!")
}

export const editGameDate = (gameID, date, time) => {
    db.ref(`games/${gameID}`).update({
        date: date,
        time: time
    });
}

export const editGameLocation = (gameID, location) => {
    db.ref(`games/${gameID}`).update({
        location: location
    });
}

export const removeGame = (gameID) => {
    db.ref("games").child(gameID).remove();
    db.ref("users").once('value').then(snap => {
        var users = snap.val();
        for (var user of Object.values(users)) {
            for (var game in user.games) {
                if (game === gameID) {
                    delete user.games[game];
                }
            }
        }
        db.ref("users").set(users);
    });
    console.log("game removed!")
}

export const joinGame = (gameID, userID, dateJoined) => {
    db.ref(`games/${gameID}/participants/${userID}`).set(dateJoined);
    db.ref(`users/${userID}/games/${gameID}`).set(gameID);
    console.log("game joined!")
}

/*export const getGames = (userID) => {
    db.ref("games/${gameID}").on('value').then(snap => {
        var game = snap.val();
        for (var participant in game.participants) {}
        if (game.numParticipants === game.participants.length) {}
    });
}*/

/*export const isGameJoinable = (gameID, userID) => {
    var joinable = true;
    db.ref("games/${gameID}").on('value').then(snap => {
        var game = snap.val();
        for (var participant in game.participants) {
            if (participant === userID) {
                joinable = false;
            }
        }
        if (game.numParticipants === game.participants.length) {
            joinable = false;
        }
    });
    return joinable;
}*/

export const leaveGame = (gameID, userID) => {
    db.ref(`games/${gameID}/participants/${userID}`).remove();
    db.ref(`users/${userID}/games/${gameID}`).remove();
    console.log("game left!")
}

export const activateListeners = () => {
    db.ref(`games`).on("value", function (data) {
        console.log("change occured");
    });
}

export const gamesRef = db.ref(`games`);

export const usersRef = db.ref(`users`);

/*export const getUser = (id) =>
  console.log(db.ref('users').);*/

//export const createGame = (gameId, userID, )

export {
    db
};
