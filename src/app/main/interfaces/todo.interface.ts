import { Validators } from "@angular/forms";

export interface TodoInterface {
    id: number;
    title: string;
    content: string;
    done: boolean;
}

export interface ResponseTodoInterface {
    todos: TodoInterface[];
}

export class todoValidators {
    id = [null];
    title = [null, [Validators.required]];
    text = [null];
    checked = [null];
}
