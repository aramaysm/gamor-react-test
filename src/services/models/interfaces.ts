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