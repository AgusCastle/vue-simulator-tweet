import { v4 as uuidv4} from "uuid";
import {TWEETS} from "../utils/constants";
import {size, remove} from "lodash"


export function saveTweetApi(tweetr, username){
    const tweets = getTweetsApi();

    if (size(tweets) === 0){
        const tweet = [
                {
                id: uuidv4(),
                tweetr,
                username,
                createdAt: new Date(),
            },
        ];
        localStorage.setItem(TWEETS,JSON.stringify(tweet));
    }else{
        tweets.push({
            id: uuidv4(),
            tweetr,
            username,
            createdAt: new Date(),
        })

        localStorage.setItem(TWEETS, JSON.stringify(tweets))
    }

    
}

export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEETS);

    if (tweets){
        return JSON.parse(tweets);
    }
    return [];
}

export function deleteTweetApi(id){
    const tweets = getTweetsApi();
    remove(tweets, function(tweet){
        return tweet.id === id;
    })
    localStorage.setItem(TWEETS, JSON.stringify(tweets))
}