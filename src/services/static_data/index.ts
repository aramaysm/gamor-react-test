import { CategoryModel, EnumTypePlatform, GameModel } from "../models";
import CatPhoto from "../../assets/images/cute-cat-studio.png";
import NinjaPhoto from "../../assets/images/superheroe-ready-act.png";

export const categories: CategoryModel[] = [
    {
        id: 1,
            title: "Action Games",
            description: "" 
    },
    {
        id: 2,
        title: "Sports Games",
        description: ""
    },
    {
        id: 3,
        title: "Adventures Games",
        description: ""
    },
    {
        id: 4,
        title: "Fantasy Games",
        description: ""
    },
    {
        id: 5,
        title: "Strategy Games",
        description: ""
    },
   
]


export const games: GameModel[] = [
    {
        id: 1,
        title: 'Fornite',
        category: categories[0],
        description: "This is a game named Fornite",
        platform: EnumTypePlatform.PARTY,
        timeAlive: new Date(),
        photo: CatPhoto
    },
    {
        id: 2,
        title: 'Sims IV',
        category: categories[4],
        description: "This is a game named Sims",
        platform: EnumTypePlatform.STREAMS,
        timeAlive: new Date(),
        photo: NinjaPhoto
    },
    {
        id: 3,
        title: 'Call Of Dutty',
        category: categories[4],
        description: "This is a game named Call of Dutty",
        platform: EnumTypePlatform.STREAMS,
        timeAlive: new Date(),
        photo: CatPhoto
    },
    {
        id: 4,
        title: 'Cash Mania',
        category: categories[2],
        description: "This is a game named Cash Mania",
        platform: EnumTypePlatform.PARTY,
        timeAlive: new Date(),
        photo: NinjaPhoto
    },
    {
        id: 5,
        title: 'Farm Mania',
        category: categories[2],
        description: "This is a game named Farm Mania",
        platform: EnumTypePlatform.MATCHS,
        timeAlive: new Date(),
        photo: NinjaPhoto
    }
]

export const users: string[] = [
    "Mr. Beast", "Sofie Ber", "Stefan Salv", "Harrison Ford", "Gael Bertran", "Lola Roa"
]

//Para los usuarios se asume que asi ya los devuelve el backend pero lo ideal seria 
// que devolviera un objeto con toda la info del usuario incluyendo los juegos a los que esta subscrito
// y a partir de alli hacer un filtro cuando se selecciona un juego paar que solo aparezcan los usuarios subscritos a el