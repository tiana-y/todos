import { TodoNote } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const dumbTodoNotes: TodoNote[] = [
    {
        id: uuidv4(),
        title: 'Купить',
        paperColor: 'yellow',
        pinColor: 'blue',
        items: [
            {
                id: uuidv4(),
                text: "хлеб",
                isDone: false
            },
            {
                id: uuidv4(),
                text: "молоко",
                isDone: false
            },
            {
                id: uuidv4(),
                text: "овощи",
                isDone: false,
                children: [
                    {
                        id: uuidv4(),
                        text: "помидоры",
                        isDone: false
                    },
                    {
                        id: uuidv4(),
                        text: "огурцы",
                        isDone: false
                    }
                ]
            },
            {
                id: uuidv4(),
                text: "чай",
                isDone: false
            }
        ]
    }
];
