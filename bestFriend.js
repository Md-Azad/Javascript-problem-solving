
const bestFriends = ["Hazrat", "sazzad Kadir", "Mahedi Hasan Sujan", "Bodrul","Hasan","abul kalam Azad Hossain"];

function bestFriend(friendList){
    let longestFriendName = friendList[0];

    for(let i = 0; i<friendList.length ; i++){
        let friendsName = friendList[i];
        if(friendsName.length>longestFriendName.length){
            longestFriendName = friendsName;
        }

    }
    return longestFriendName;

}

let longFriendName = bestFriend(bestFriends);

console.log(longFriendName);