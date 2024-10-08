const productos = [
  { title: 'Naranja', isFruit: true, id: 1 },
  { title: 'Manzana', isFruit: true, id: 2},
  { title: 'Zanahoria', isFruit: false, id: 3},
  { title: 'Papa', isFruit: false, id: 4 },
  { title: 'Pera', isFruit: true, id: 5},
  { title: 'Sandía', isFruit: true, id: 6},
];



export default function ShopingList() {
  const listItems = productos.map(productos => 
    <li 
      key ={productos.id}
      style={{
        color: productos.isFruit ? 'red' : 'green'
      }}>
        {productos.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}