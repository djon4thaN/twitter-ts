import { Reaction } from "./reaction";
import { Tweet } from "./tweet";
import { User } from "./user";

export class Dislike extends Reaction {
    constructor(from: User, tweet: Tweet) {
        super(from, tweet);
    }

    public showReaction(): void {
        console.log(
            `${this.from.username} não gostou do tweet de ${this.tweet.user.username}.`
        );
    }
}
