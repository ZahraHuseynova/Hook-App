import Accordion from "./components/Accordion";

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

const App = () =>{
    
    return (
        <div>
            <Accordion items={items}/>
    
        </div>
    )
    
}

export default App;