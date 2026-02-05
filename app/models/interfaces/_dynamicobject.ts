import { FieldComponent } from "src/app/components/field/field.component";

export interface DynamicObject {
    visible: boolean;
    width: string;
    data?: any | null;
    field?: FieldComponent | null,
    component?: any;

    canceling?: boolean;
}