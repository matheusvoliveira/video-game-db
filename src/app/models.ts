export interface Game {
    backgroundImage: string;
    name: string;
    released: string;
    metacriticUrl: string;
    website: string;
    metacritic: number;
    genres:Array<Genre>;
    parentPlataform: Array<ParentPlataform>;
    publishers: Array<Publishers>;
    screenshoots: Array<Screenshots>;
    trailers: Array<Trailer>;

}
export interface APIResponse<T> {
    results: Array<T>;
}
interface Genre {
    name: string;
}
interface ParentPlataform {
    plataform: {
        name: string;
    };
}
interface Publishers {
    name: string;
}
interface Rating {
    id: number 
    count: number 
    title: string
}
interface Screenshots {
    image: string;
}
interface Trailer {
    data: {
        max: string;
    };
}