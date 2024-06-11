import { useState, useEffect } from "react";

const data = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
];

const InfiniteScrolling = () => {
    const [index, setIndex] = useState(5);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const initialData = data.slice(0, index);
        setVisible(initialData);
    }, [index]);

    const handleLoad = () => {
        if (index < data.length) {
            const newIndex = Math.min(index + 5, data.length);
            const newData = data.slice(index, newIndex);
            setVisible((prevVisible) => [...prevVisible, ...newData]);
            setIndex(newIndex);
        }
    };

    return (
        <>
            <ul>
                {visible.map((info, i) => (
                    <li key={i}>{info}</li>
                ))}
            </ul>
            {index < data.length && (
                <button onClick={handleLoad}>Load more</button>
            )}
        </>
    );
};

export default InfiniteScrolling;
