import { useState } from 'react';

function ToDoList() {
    const [items, setItems] = useState(['Apprendre React', 'Apprendre NextJs', 'Apprendre VueJs']);
    const [newItem, setNewItem ] = useState('');

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };
    const removeLastItem = () => {
        if (items.length > 0) {
            setItems(items.slice(0, items.length - 1));
        }
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input 
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Ajouter</button>
            <button onClick={removeLastItem}>Enlever</button>
        </div>
    );
}

export default ToDoList