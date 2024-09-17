function Button(){
//     const handleClick = () => console.log("Ouch!");
//     let count = 0;
//     const handleClick2 = (name) => {
//     if(count < 3){
//         count++;
//         console.log(`${name} stop clicking me ${count}`);
//     }else{    
//         console.log(`${name} stop clicking me`);
//     }
// }
    // return(<button onClick={() => handleClick2("Rigved")}>Click me</button>)
    const handleClick = (e) => e.target.textContent = "Ouch";
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)

}

export default Button