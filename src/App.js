import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import SearchList from "./components/SearchList";
import { useState } from "react";

const items =[
    {
        title:"What's React?",
        content:"React is front end Javascript library ",
    },
    {
        title:"Why we use React?",
        content:"React is favorite JS library among developers ",
    },
    {
        title:"how do you use React?",
        content:"You use React by creating components ",
    },
]

const options = [
    {
        label: 'The Red color',
        value:'red'
    },
    {
        label: 'The Green color',
        value:'green'
    },
    {
        label: 'The Blue color',
        value:'blue'
    },
]

const App = () =>{
    
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown]=useState(true);
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <SearchList/> */}
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle dropdown</button>
            {showDropdown? (<Dropdown 
                options={options} 
                selected={selected} 
                onSelectChange={setSelected} 
                label="color"/>):null}
    
        </div>
    )
    
}

export default App;