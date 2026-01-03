// Theme animation types
export type AnimationVariant =
    | 'circle'
    | 'rectangle'
    | 'gif'
    | 'polygon'
    | 'circle-blur';

export type AnimationStart =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center'
    | 'top-center'
    | 'bottom-center'
    | 'bottom-up'
    | 'top-down'
    | 'left-right'
    | 'right-left';

// Coordinates for dynamic positioning (e.g., from click events)
export interface AnimationCoords {
    x: number;
    y: number;
}
