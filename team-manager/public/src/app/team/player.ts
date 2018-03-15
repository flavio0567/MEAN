export class Player {
    name: String;
    position: String;
    action: {
        playing: Boolean,
        notplaying: Boolean,
        undefined: Boolean
    };
    game: {
        1: Boolean,
        2: Boolean,
        3: Boolean
    } 
}