import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActionItem, ButtonType } from '../button/button.component';
import { Table, TableHeaderCheckboxToggleEvent, TablePageEvent } from 'primeng/table';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { MainService } from '@controller/main.service';
import { FieldFilter, FieldType } from '../field/field.component';

export enum ColumnType {
    'Normal' = 'normal',
    'Tag' = 'tag',
    'Json' = 'json',
    'Image' = 'image',
}

export enum TableLayout {
    'List' = 'list',
    'Grid' = 'grid',
}

export enum ExportType {
    'CSV' = 0,
    'XLSX' = 1,
    'PDF' = 2,
}

export interface ColumnTable {
    label: string;
    sortField?: string;
    type: ColumnType;
    minWidth: string;
    maxWidth?: string;
    frozenColumn?: boolean;
    rowStyle?: Function;
    columnStyle?: Function;
    styleTag?: Function;
    field: Function;
    template?: any;
}

export interface TableLayoutOptions {
    label?: string;
    value?: any;
    icon?: string;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    standalone: false,
})

export class TableComponent implements OnInit {

    public bottomPanel: boolean = false;
    public fakeRows: any = [...Array(50).keys()];
    public fakeColumns: any;
    public tableLayoutOptions?: TableLayoutOptions[];
    public tableLayout?: TableLayout;
    public backupItems: { [s: string]: any } = {};
    public newGenericObject?: Function;
    public exportActions: any[] = [];
    public internalActions: ActionItem[] = [];

    @Input() public columns: ColumnTable[] = [];
    @Input() public items?: any;
    @Input() public discountScrollHeight?: number;
    @Input() public editable: boolean = false;
    @Input() public orderable: boolean = false;
    @Input() public actions: ActionItem[] = [];
    @Input() public totalRecords: number = 100;
    @Input() public maxRows: number = 20;
    @Input() public editLayout: boolean = true;
    @Input() public tableStyle: any = { 'min-width': '75rem' };
    @Input() public paginator: boolean = true;
    @Input() public filterFields: string[] = [];
    @Input() public styleClass: string = '';
    @Input() public objectClass?: string;
    @Input() public valid: boolean = true;

    @Output() public onFind = new EventEmitter<any>();
    @Output() public onAddNewItem = new EventEmitter<any>();
    @Output() public onDeleteItem = new EventEmitter<number>();
    @Output() public onExportCSV = new EventEmitter<any>();
    @Output() public onExportXLSX = new EventEmitter<any>();
    @Output() public onExportPDF = new EventEmitter<any>();

    @ViewChild('table') public table!: Table;

    get ExportType() {
        return ExportType;
    }

    get FieldType() {
        return FieldType;
    }

    get TableLayout() {
        return TableLayout;
    }

    get ButtonType() {
        return ButtonType
    }

    get ColumnType() {
        return ColumnType;
    }

    private _selection: any;
    @Output() private selectionChange = new EventEmitter<any>();

    @Input()
    get selection(): any {
        return this._selection;
    }

    set selection(value: any) {
        this._selection = value;

        if (this._selection?.length <= 0) {
            this.bottomPanel = false;
        }

        this.selectionChange.emit(this._selection);
    }

    private _loading: any;
    @Output() private loadingChange = new EventEmitter<any>();

    @Input()
    get loading(): any {
        return this._loading;
    }

    set loading(value: any) {
        this._loading = value;

        this.loadingChange.emit(this._loading);
    }

    constructor(protected mainService: MainService,
        protected confirmationService: ConfirmationService) {
        this.mainService?.tableLayout?.subscribe((layoutTable: any) => {
            if (layoutTable) {
                if (layoutTable?.value == TableLayout.List) {
                    this.tableLayout = TableLayout.List;
                } else {
                    this.tableLayout = TableLayout.Grid;
                }
            }
        });
    }

    public ngOnInit(): void {
        this.fakeColumns = this.columns;

        this.addInternalActions();

        this.tableLayoutOptions = [
            { value: 'list', icon: 'fas fa-list' },
            { value: 'grid', icon: 'fas fa-table' },
        ];
    }

    public ngDestroy(): void {
        this.onFind.unsubscribe();
        this.onAddNewItem.unsubscribe();
        this.onDeleteItem.unsubscribe();
        this.onExportCSV.unsubscribe();
        this.onExportXLSX.unsubscribe();
        this.onExportPDF.unsubscribe();
    }

    private addInternalActions(): void {
        this.internalActions = [
            {
                label: 'Editar todos',
                icon: 'fas fa-pencil',
                disabled: true,
                command: () => {
                    this.myEditAllRows();
                },
            },
            { separator: true },
            {
                label: 'Salvar todos',
                icon: 'fas fa-check',
                disabled: true,
                command: () => {
                    this.myEditAllRowsSave();
                },
            },
            {
                label: 'Cancelar todos',
                icon: 'fas fa-times',
                disabled: true,
                command: () => {
                    this.myEditAllRowsCancel();
                },
            },
            { separator: true },
            {
                label: 'Excluir todos',
                icon: 'fas fa-trash-can',
                disabled: true,
                command: () => {
                    this.myEditAllRowsDelete(true);
                },
            },
            {
                label: 'Reverter todos',
                icon: 'fas fa-arrow-rotate-left',
                disabled: true,
                command: () => {
                    this.myEditAllRowsDelete(false);
                },
            },
        ];
    }

    public getActionDisabled(action: ActionItem | MenuItem): boolean {
        return (this.selection?.length > 1 && action?.disabledManySelection) ?? false;
    }

    public getColumnValue(row: any, column: ColumnTable): any {
        return column?.field(row);
    }

    public getDisabledButton(): boolean {
        return ((this.selection?.length ?? 0) > 1);
    }

    public getSelection(rowData: any): boolean {
        return this.selection?.find((selection: any) => {
            if (selection?.uuid == rowData?.uuid) {
                return true;
            }
        });
    }

    public myAddNewItem(): void {
        this.onAddNewItem.emit();

        setTimeout(() => {
            this.table.editingRowKeys = {
                ...this.table.editingRowKeys,
                [this.items[this.items.length - 1].uuid]: true
            };

            const tableWrapper: Element | null = this.table.el.nativeElement.querySelector('.p-datatable-table-container');

            if (tableWrapper) {
                tableWrapper.scrollTo({ top: tableWrapper.scrollHeight, behavior: 'smooth' });
            }
        }, 200);
    }

    public myCancelSelection(): void {
        this.selection = [];
        this.bottomPanel = false;
    }

    public myChangeGridCheckBox(event: CheckboxChangeEvent): void {
        if (event?.checked) {
            this.myRowSelect();
        } else {
            this.myRowUnSelect();
        }
    }

    public myChangeGridCheckBoxAll(event: CheckboxChangeEvent): void {
        if (event?.checked) {
            for (const item of this.items) {
                this.selection?.push(item);
            }

            this.myRowSelect();
        } else {
            this.myCancelSelection();
            this.myRowUnSelect();
        }

        this.selection = [...this.selection];
    }

    public myChangeLayout(): void {
        switch (this.tableLayout) {
            case TableLayout.List: {
                this.tableLayout = TableLayout.Grid;
                break;
            }
            case TableLayout.Grid: {
                this.tableLayout = TableLayout.List;
                break;
            }
        }
    }

    public myCopyToClipboard(text: string): void {
        navigator?.clipboard?.writeText(JSON.stringify(text, null, 2))
            .then(() => {
                alert('JSON copiado com sucesso!');
            }).catch(err => {
                console.error('Erro ao copiar:', err);
            });
    }

    public myDeleteItem(index: number): void {
        this.onDeleteItem.emit(index);
    }

    private myEditAllRows(): void {
        for (const item of this.items) {
            this.myRowEditInit(item);
            this.table.initRowEdit(item);
        }
    }

    private myEditAllRowsCancel(): void {
        this.confirmationService?.confirm({
            header: 'Confirme',
            message: 'Deseja cancelar a edição de todos os registros abaixo ?',
            key: 'app-confirmation',
            icon: 'fa-regular fa-circle-question',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            acceptButtonStyleClass: 'p-button-rounded p-button-primary',
            rejectButtonStyleClass: 'p-button-rounded p-button-danger reject-button',
            acceptIcon: 'fas fa-check',
            rejectIcon: 'fas fa-times',
            acceptVisible: true,
            rejectVisible: true,
            accept: () => {
                for (const item of this.items) {
                    this.myRowEditCancel(item, this.items?.indexOf(item));
                    this.table.cancelRowEdit(item);
                }
            },
        });
    }

    private myEditAllRowsDelete(action: boolean): void {
        this.confirmationService?.confirm({
            header: 'Confirme',
            message: 'Deseja deletar todos os registros abaixo ?',
            key: 'app-confirmation',
            icon: 'fa-regular fa-circle-question',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            acceptButtonStyleClass: 'p-button-rounded p-button-primary',
            rejectButtonStyleClass: 'p-button-rounded p-button-danger reject-button',
            acceptIcon: 'fas fa-check',
            rejectIcon: 'fas fa-times',
            acceptVisible: true,
            rejectVisible: true,
            accept: () => {
                for (const item of this.items) {
                    item.delete = action;
                }
            },
        });
    }

    private myEditAllRowsSave(): void {
        this.confirmationService?.confirm({
            header: 'Confirme',
            message: 'Deseja salvar as alterações em todos os registros abaixo ?',
            key: 'app-confirmation',
            icon: 'fa-regular fa-circle-question',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            acceptButtonStyleClass: 'p-button-rounded p-button-primary',
            rejectButtonStyleClass: 'p-button-rounded p-button-danger reject-button',
            acceptIcon: 'fas fa-check',
            rejectIcon: 'fas fa-times',
            acceptVisible: true,
            rejectVisible: true,
            accept: () => {
                for (const item of this.items) {
                    this.myRowEditSave(item);
                }
            },
        });
    }

    public myExportCSV(): void {
        this.onExportCSV.emit();
    }

    public myExportPDF(): void {
        this.onExportPDF.emit();
    }

    public myExportXLSX(): void {
        this.onExportXLSX.emit();
    }

    private myFind(filters?: FieldFilter[]): void {
        this.onFind.emit(filters);
    }

    public myFilter(event: Event): void {
        const inputField: HTMLInputElement | null = event?.target as HTMLInputElement;
        const query: string = inputField?.value;

        this.table?.filterGlobal(query, 'contains');
    }

    public myHeaderCheckboxToggle(event: TableHeaderCheckboxToggleEvent): void {
        this.bottomPanel = event?.checked;
    }

    public async myPage(event: TablePageEvent): Promise<void> {
        if (event?.first >= (this.items?.length - 40)) {
            this.loading = true;
            this.myFind();
        }
    }

    public myReorder(): void {
        for (const item of this.items) {
            item.ordenation = this.items?.indexOf(item);
        }
    }

    public myRowEditFinish(): void {
        for (const item of this.items ?? []) {
            if (this.table.editingRowKeys[item?.uuid]) {
                this.myRowEditSave(item);
            }
        }
    }

    public myRowEditCancel(item: any, index: number): void {
        if (this.newGenericObject) {
            this.items[index] = this.newGenericObject(structuredClone(this.backupItems[item.uuid as string]));

            delete this.backupItems[item.uuid as string];
        }
    }

    public myRowEditInit(item: any): void {
        this.backupItems[item.uuid as string] = structuredClone(item);
    }

    public myRowEditSave(item: any): void {
        delete this.backupItems[item.uuid as string];
        delete this.table.editingRowKeys[item?.uuid];
    }

    public myRowSelect(): void {
        if (this.selection?.length > 0 && this.actions?.length > 0) {
            this.bottomPanel = true;
        }
    }

    public myRowUnSelect(): void {
        if (this.selection?.length <= 0) {
            this.bottomPanel = false;
        }
    }

    public updateInternalActions(): void {
        const editedRows: { [s: string]: boolean } = this.table?.editingRowKeys ?? {};
        const deletedRows: any[] = this.items?.filter((item: any) => item?.delete);

        // Edit
        this.internalActions[0].disabled = Object?.keys(editedRows)?.length == this.items?.length;
        // Save
        this.internalActions[2].disabled = Object?.keys(editedRows)?.length <= 0;
        // Cancel
        this.internalActions[3].disabled = Object?.keys(editedRows)?.length <= 0;
        // Delete
        this.internalActions[5].disabled = deletedRows?.length > 0 || Object?.keys(editedRows)?.length > 0;
        // Revert
        this.internalActions[6].disabled = deletedRows?.length <= 0 || Object?.keys(editedRows)?.length > 0;
    }
}
