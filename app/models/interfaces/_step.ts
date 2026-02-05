import { IStepOption } from "ngx-ui-tour-primeng";

export interface Step extends IStepOption {
    disablePrev?: boolean;
    disableNext?: boolean;
    visiblePrev?: boolean;
    visibleNext?: boolean;
    selector?: any;
}