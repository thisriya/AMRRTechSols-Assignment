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
      name: 'Blue T-Shirt',
      type: 'Shirt',
      description: 'Comfortable cotton t-shirt in blue color',
      coverImage: 'https://via.placeholder.com/300x400?text=Blue+T-Shirt',
      additionalImages: [
        'https://via.placeholder.com/300x400?text=Front+View',
        'https://via.placeholder.com/300x400?text=Back+View'
      ]
    },
    {
      id: 2,
      name: 'Black Jeans',
      type: 'Pant',
      description: 'Slim fit black jeans',
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


// function App() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: 'Blue T-Shirt',
//       type: 'Shirt',
//       description: 'Comfortable cotton t-shirt in blue color',
//       coverImage: 'https://via.placeholder.com/300x400?text=Blue+T-Shirt',
//       additionalImages: [
//         'https://via.placeholder.com/300x400?text=Front+View',
//         'https://via.placeholder.com/300x400?text=Back+View'
//       ]
//     },
//     {
//       id: 2,
//       name: 'Black Jeans',
//       type: 'Pant',
//       description: 'Slim fit black jeans',
//       coverImage: 'https://via.placeholder.com/300x400?text=Black+Jeans',
//       additionalImages: [
//         'https://via.placeholder.com/300x400?text=Front+View',
//         'https://via.placeholder.com/300x400?text=Side+View'
//       ]
//     }
//   ]);

//   const addNewItem = (newItem) => {
//     setItems([...items, { ...newItem, id: items.length + 1 }]);
//   };

//   return (
//     <Router>
//       <div className="container mx-auto px-4 py-8">
//         <nav className="flex mb-8 border-b">
//           <Link
//             to="/"
//             className="py-2 px-4"
//           >
//             View Items
//           </Link>
//           <Link
//             to="/add"
//             className="py-2 px-4"
//           >
//             Add Item
//           </Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<ViewItems items={items} />} />
//           <Route path="/add" element={<AddItem onAddItem={addNewItem} />} />
//           <Route path="/item/:id" element={<ItemDetail items={items} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;