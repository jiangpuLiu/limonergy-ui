import type {Component, ComputedRef, Ref} from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "small" | "default" | "large";

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    disabled?: boolean;
    loading?: boolean;
    icon?: string
    circle?: boolean;
    plain?: boolean;
    round?: boolean;
    tag?: string | Component;
    autofocus?: boolean;
    useThrottle?: boolean;
    loadingIcon?: string;
    throttleDuration?: number;
}

export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}


export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>,
    disabled: ComputedRef<boolean>;
    size: ComputedRef<ButtonSize | ''>;
    type: ComputedRef<ButtonType | "">;
}

export interface ButtonGrounpInstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<string>;
    type: ComputedRef<string>;
}
