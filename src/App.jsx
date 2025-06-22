import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home';



function App() {
 const [items, setItems] = useState(() => {
  const savedItems = localStorage.getItem('inventoryItems');
  return savedItems ? JSON.parse(savedItems) : [
    {
      id: 1,
      name: 'Gray Jeans',
      type: 'Pant',
      description: 'Slim fit Gray jeans',
      coverImage: 'https://www.bfgcdn.com/1500_1500_90/007-2147/arcteryx-gamma-ar-brushed-pant-winter-trousers-detail-2.jpg',
      additionalImages: [
        'https://via.placeholder.com/300x400?text=Front+View',
        'https://via.placeholder.com/300x400?text=Side+View'
      ]
    }
  ];
});

  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

 const addNewItem = (newItem) => {
  setItems(prevItems => {
    const newId = prevItems.length > 0 
      ? Math.max(...prevItems.map(item => item.id)) + 1 
      : 1;
    return [...prevItems, { ...newItem, id: newId }];
  });
};


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem onAddItem={addNewItem} />} />
        <Route path="/view" element={<ViewItems items={items} />} />
        <Route path="/item/:id" element={<ItemDetail items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;
