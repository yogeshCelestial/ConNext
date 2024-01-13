'use client';
import Main from '@/components/Main';

const mockData = [
  {
    id: 1,
    title: "And the Ship Sails On (E la nave va)",
    description: "Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm Acute embolism and thrombosis of deep vein of unsp low extrm",
    image: 'https://picsum.photos/400/400/'
  },
  {
    id: 2,
    title: "Chantilly the Ship Sails On (E la nave va Lace",
    description: "Nondisp artic fx Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm head of r femr, 7thN",
    image: 'https://picsum.photos/400/400/'
  },
  {
    id: 3,
    title: "Mystery Team is on the way to heaven",
    description: "Fracture of manubrium, Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm initial encounter for closed fracture",
    image: 'https://picsum.photos/400/400/'
  },
  {
    id: 4,
    title: "Airplane II: The Sequel of the Endgame",
    description: "Matern care for known or Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm susp placntl insuff, 1st tri, fts5",
    image: 'https://picsum.photos/400/400/'
  },
  {
    id: 5,
    title: "Sleepwalkers are next dinasours",
    description: "Laceration of Acute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrmAcute embolism and thrombosis of deep vein of unsp low extrm axillary or brachial vein, left side, sequela",
    image: 'https://picsum.photos/400/400/'
  }
]


export default function Home() {
  return (
    <Main mockData={mockData} category='Trending' />
  )
}
