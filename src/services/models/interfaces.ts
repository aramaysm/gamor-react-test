import { EnumTypePlatform } from "./enums";

export interface ButtonProps {
    label: string,
    onClick: ()=> void,
    disabled?: boolean,
    color: string,
    icon?: string;
}

export interface ColumnPropertiesTable {
    field: string,
    header: string,
    maxWidth?: string,
}

export interface OptionsSelect {
    id: string,
    label: string
}

export interface CategoryModel {
    id:number;
    title: string;
    description: string;
}

export interface GameModel {
    id: number;
    title: string;
    description: string;
    timeAlive?: Date;
    photo?: any;
    category: CategoryModel;
    platform: EnumTypePlatform
}