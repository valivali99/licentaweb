import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from 'src/app/shared/models/filterModel';
import { FilterModel } from '../../models/filter-model';

@Component({
    selector: 'app-filter-view',
    templateUrl: './filter-view.component.html',
    styleUrls: ['./filter-view.component.scss']
})
export class FilterViewComponent {
    @Output() filterEvent = new EventEmitter<FilterModel>();

    currentPrice: number = 0;
    allComplete: boolean = false;

    filter: Filter = {
        name: 'Check All',
        completed: false,
        subtasks: [
            { name: 'Guitar', completed: false },
            { name: 'Piano', completed: false },
            { name: 'Violin', completed: false }
        ]
    };

    constructor() {
    }

    formatLabel(value: number): number | string {
        if (value >= 10000) {
            return Math.round(value / 1000) + 'K';
        }

        return value;
    }

    updatePrice($event: number | null): void {
        if ($event) {
            this.currentPrice = $event;
        } else {
            this.currentPrice = 0;
        }
        this.sendFilters();
    }

    updateAllComplete(): void {
        this.allComplete = this.filter.subtasks != null && this.filter.subtasks.every(t => t.completed);

        this.sendFilters();
    }

    someComplete(): boolean {
        if (this.filter.subtasks == null) {
            return false;
        }
        return this.filter.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }

    setAll(completed: boolean): void {
        this.allComplete = completed;
        if (this.filter.subtasks == null) {
            return;
        }
        this.filter.subtasks.forEach(t => (t.completed = completed));

        this.sendFilters();
    }

    sendFilters(): void {
        let filterModel: FilterModel = {
            types: [],
            startingPrice: this.currentPrice
        };

        this.filter.subtasks?.forEach(el => {
            if (el.completed) {
                filterModel.types.push(el.name)
            }
        });

        this.filterEvent.emit(filterModel);
    }
}
