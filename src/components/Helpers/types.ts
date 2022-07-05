export enum Directions {
    NORTH = 'north',
    SOUTH = 'south',
    EAST = 'east',
    WEST = 'west',
}
export type ChevronProps = {
    color?: string;
    direction?: Directions;
    style?: React.CSSProperties;
};

export type PointerProps = ChevronProps & {
    size?: 'big' | 'medium' | 'small';
};

export interface CrossProps {
    color: string;
    onClick: () => void;
}
