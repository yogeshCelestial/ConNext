import React from 'react';
import Main from '@/components/Main';
import { notFound } from 'next/navigation';

const mockData = [
    {
        id: 1,
        title: "And the Ship Sails On (E la nave va)",
        description: "Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm",
        image: 'https://picsum.photos/500/500/'
    },
    {
        id: 2,
        title: "Chantilly the Ship Sails On (E la nave va Lace",
        description: "Nondisp artic fx Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm head of r femr, 7thN",
        image: 'https://picsum.photos/500/500/'
    },
    {
        id: 3,
        title: "Mystery Team is on the way to heaven",
        description: "Fracture of manubrium, Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm initial encounter for closed fracture",
        image: 'https://picsum.photos/500/500/'
    }
]

const SpecificCategory = ({ params }) => {
    const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];
    if (!categories.includes(params?.categoryId)) {
        notFound();
    }

    return (
        <div>
            <Main mockData={mockData} category={(params?.categoryId).toUpperCase()} />
        </div>
    )
}

export default SpecificCategory;