import PropTypes from 'prop-types';

function List(props){
    const category = props.category;
    const itemList = props.items;
        //fruits.sort((a,b)  => a.name.localeCompare(b.name));
        //fruits.sort((a,b)  => b.name.localeCompare(a.name));
        //fruits.sort((a,b)  => (a.calories - b.calories));
        //fruits.sort((a,b)  => (b.calories - a.calories));
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);    
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);    

    // const listItems =  highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //                                         {highCalFruit.name}: &nbsp;
    //                                         <b>{highCalFruit.calories}</b></li>);
     const listItems =  itemList.map(fruit => <li key={fruit.id}>
                                             {fruit.name}: &nbsp;
                                             <b>{fruit.calories}</b></li>);    
    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>    
            </>)
}
List.PropTypes = { 
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number,
                                             })),
}
List.defaultProps = {
    category: "category",
    items: [],
}
export default List