import React, {useEffect, useState} from "react";

function Counter(props){

  const[count, setCount] = useState(props.count)

  useEffect(()=>{
    setCount(parseInt(localStorage.getItem("count")));

  },[]);

  useEffect(() => {
    document.title = count
    localStorage.setItem("count", count);
  }, [count]);

  function add(){
    setCount(count + 1);
  }

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={add}>add</button>
    </div>
  )
}

// class Counter extends React.Component{

//   constructor(props){
//     super(props);

//     this.state = {count: this.props.count}
//     this.add = this.add.bind(this)
//   }

//   add(){
//     // this.setState({count: this.state.count + 1}); // jeito errado
//     this.setState((state) => {return {count: state.count + 1}}, () => {
//       console.log(this.state)
      
//     }) 
//   }

//   componentDidUpdate(){
//     document.title = this.state.count
//     localStorage.setItem("state", JSON.stringify(this.state))
//   }

//   componentDidMount(){
//     document.title = this.state.count
//     this.setState(JSON.parse(localStorage.getItem('state')))
//   }

//   render(){
//     return (<div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>add</button>
//             </div>)
//   }
// }

export default Counter;