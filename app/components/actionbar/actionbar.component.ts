import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ButtonType } from '../button/button.component';
import { MenuItem } from 'primeng/api';
import { FieldFilter, FieldType } from '../field/field.component';
import { AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { ExecutionTime } from 'src/app/models/_executiontime';
import { Popover } from 'primeng/popover';
import { Panel } from 'primeng/panel';
import { MainService } from '@controller/main.service';
import cloneDeep from 'lodash/cloneDeep';

@Component({
	selector: 'app-actionbar',
	templateUrl: './actionbar.component.html',
	standalone: false,
})

export class ActionbarComponent {

	public rightDrawer: boolean = false;
	public displayFilters?: FieldFilter[] = [];

	@Input() public label?: string;
	@Input() public buttonNewLabel?: string;
	@Input() public buttonNewActions?: MenuItem[];
	@Input() public buttonStatisticsActions?: MenuItem[];
	@Input() public loading: boolean = false;
	@Input() public autoCompleteComponent?: any;
	@Input() public autoCompleteFind?: (value?: any) => void;
	@Input() public executionTime?: ExecutionTime;
	@Input() public filters?: FieldFilter[];

	@Input() public tourService: any;

	@Output() public onAddActions: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onFind: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onNew: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onHelp: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onShowRequestLogs: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onSelectSearch: EventEmitter<AutoCompleteSelectEvent> = new EventEmitter<AutoCompleteSelectEvent>();
	@Output() public onFilter: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild('popover') public popover?: Popover;
	@ViewChild('filterPanel') public filterPanel?: Panel;

	get ButtonType() {
		return ButtonType;
	}

	get FieldType() {
		return FieldType;
	}

	constructor(public mainService: MainService) { }

	public ngOnInit(): void { }

	public ngDestroy(): void {
		this.onAddActions.unsubscribe();
		this.onFind.unsubscribe();
		this.onNew.unsubscribe();
		this.onHelp.unsubscribe();
		this.onShowRequestLogs.unsubscribe();
		this.onSelectSearch.unsubscribe();
		this.onFilter.unsubscribe();
	}

	public hasFilter(): boolean {
		return ((this.displayFilters?.filter((itemFilter: FieldFilter) => this.hasFilterValue(itemFilter))?.length ?? 0) > 0);
	}

	public hasFilterItem(itemFilter: FieldFilter): boolean {
		return this.hasFilterValue(itemFilter);
	}

	private hasFilterValue(itemFilter: FieldFilter): boolean {
		return ((Array.isArray(itemFilter?.model) && itemFilter?.model?.length > 0) ||
			(itemFilter?.model && !Array.isArray(itemFilter?.model))) && (itemFilter?.model !== itemFilter?.resetModel);
	}

	public myAddActions(): void {
		this.onAddActions.emit();
	}

	public myClearFilter(): void {
		this.filters?.map((itemFilter: FieldFilter) => {
			itemFilter.model = itemFilter?.resetModel ?? undefined;
		});

		this.myFilter(this.filters);
	}

	public myFilter(filters?: FieldFilter[]): void {
		if (filters) {
			this.displayFilters = cloneDeep(filters?.filter((itemFilter: FieldFilter) => this.hasFilterValue(itemFilter)));
		}

		this.myShowHideFilterDrawer(false);

		this.onFilter.emit(filters);
	}

	public myFind(event: MouseEvent): void {
		this.onFind.emit(event);
	}

	public myHelp(event: MouseEvent): void {
		this.onHelp.emit(event)
	}

	public myNew(event: MouseEvent): void {
		this.onNew.emit(event)
	}

	public myRemoveFilter(filter: FieldFilter): void {
		this.filters?.find((itemFilter: FieldFilter) => {
			if (filter?.label == itemFilter.label && JSON.stringify(filter?.field) == JSON.stringify(itemFilter.field)) {
				itemFilter.model = itemFilter?.resetModel ?? undefined;
			}
		});

		this.myFilter(this.filters);
	}

	public mySelectSearch(event: AutoCompleteSelectEvent): void {
		this.onSelectSearch.emit(event);
	}

	public myShowHideFilterDrawer(visible: boolean): void {
		this.rightDrawer = visible;
	}

	public myShowRequestLogs(): void {
		this.popover?.hide();
		this.onShowRequestLogs.emit();
	}
}
