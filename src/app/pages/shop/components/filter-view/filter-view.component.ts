import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/shared/models/filterModel';

@Component({
    selector: 'app-filter-view',
    templateUrl: './filter-view.component.html',
    styleUrls: ['./filter-view.component.scss']
})
export class FilterViewComponent implements OnInit {
    constructor() { }

    currentPrice = 0;

    filter: Filter = {
        name: 'Check All',
        completed: false,
        subtasks: [
            { name: 'Guitar', completed: false },
            { name: 'Piano', completed: false },
            { name: 'Violin', completed: false }
        ]
    };

    ngOnInit(): void { }

    formatLabel(value: number) {
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
    }

    allComplete: boolean = false;

    updateAllComplete() {
        this.allComplete = this.filter.subtasks != null && this.filter.subtasks.every(t => t.completed);
    }

    someComplete(): boolean {
        if (this.filter.subtasks == null) {
            return false;
        }
        return this.filter.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }

    setAll(completed: boolean) {
        this.allComplete = completed;
        if (this.filter.subtasks == null) {
            return;
        }
        this.filter.subtasks.forEach(t => (t.completed = completed));
    }
}
