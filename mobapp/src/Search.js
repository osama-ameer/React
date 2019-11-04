import React from 'react';

export  class Search extends React.Component{
constructor(props){
    super(props);
    this.state={
        cars:["corolla","prius","hilux"," nokia 6"," q-mobile","blackberry","amazon","infinix","vivo","huwei"],
        
   
   
    }



}

search =(e)=>{
const {cars} = this.state;
const text = e.target.value;
// console.log(text)
 const result =cars.filter((mob)=>{

const lowerText = text.toLowerCase();
const lowerMob = mob.toLowerCase();


return  lowerMob.substring(0,lowerText.length).indexOf(lowerText) !== -1;


 })


 this.setState({
     text,
     result
 })


}

renderHeader =()=>{

    return(<input type="text" placeholder="search for mobile ?"  onChange={this.search} />)
}

renderBody =()=>{

    let {cars,text,result} = this.state;
   const item = text ? result:cars; 
   return(
       <div>
            {text ? <h1>{`you are searching for ${text}`}</h1>:null}
           
           {item.map((it,id)=>{
             return(<li key={id}>{it}</li> )
           })}
       </div>

   )

}


render(){
    return(<div>

    {this.renderHeader()}

    {this.renderBody()}
    </div>)
}

}

export default Search;