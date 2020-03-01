import { v4 } from 'uuid';

export const data = {
    items: [
        {
            id: v4(),
            name: 'Todo 1',
            completed: true,
            date: Date.now()
        },
        {
            id: v4(),
            name: 'Todo 2',
            completed: false,
            date: Date.now()
        },
        {
            id: v4(),
            name: 'Todo 3',
            completed: false,
            date: Date.now()
        },
        {
            id: v4(),
            name: 'Todo 4',
            completed: false,
            date: Date.now()
        }
    ]
}