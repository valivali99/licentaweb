export interface Filter {
    name: string;
    completed: boolean;
    subtasks?: Filter[];
}
