import List from './List'
function App() {
  const fruits =[
    {id: 0, name: "apple", calories: 95}, 
    {id: 1, name: "orange", calories: 45}, 
    {id: 2, name: "banana", calories: 105}, 
    {id: 3, name: "coconut", calories: 159}, 
    {id: 4, name: "pineapple",  calories: 37}];

    const Veg =[
      {id: 0, name: "potatoes", calories: 123}, 
      {id: 1, name: "carrots", calories: 321}, 
      {id: 2, name: "corn", calories: 213}, 
      {id: 3, name: "broccolli", calories: 151239}, 
      {id: 4, name: "celery",  calories: 123}];
  return(
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"></List> }
    <List items={Veg} category="Vegatbles"></List>
    <List></List>
    </>
  )
}

export default App
