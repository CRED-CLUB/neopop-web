export interface Prop extends UseBottomSheetMechanicsArgs {
    children: React.ReactNode;
    node?: HTMLElement;
    maxHeight?: string;
    sheetStyle?: React.CSSProperties;
    sheetPlunkColor?: string;
    overlayColor?: string;
    shouldShowNotch?: boolean;
    shouldShowOverlay?: boolean;
}

export interface UseBottomSheetMechanicsArgs {
    open: boolean;
    handleClose: () => void;
    onBeforeClose?: () => void;
    onCloseEnd: () => void;
    onOpenEnd?: () => void;
    blocking?: boolean;
}
