


import React  from 'react'
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
function App() {

  // const [ something, setSomething] = useState('');
  // const [ addContent , setAddContent] = useState([]);

  // const addSomething = (adda)=>{
  //     adda.preventDefault();
  //     const item={data:something,
  //       id:new Date().toLocaleString()
  //     }
      
  //     setAddContent([...addContent,item])
  //     setSomething('');
  // }

  // console.log(addContent)
  return (
  //  <div>
     
  //    <form><input 
  //    type="text"
  //    placeholder="Enter something..." 
  //    value={something}
  //    onChange={ (e)=>setSomething(e.target.value)}
  //    />
  //    <button type="submit" onClick= {addSomething}> Add something</button>
  //    </form>
  //    <div>
  //     {
        
  //       addContent.map((content)=>(
  //        <div key= {content.id}>
  //         <h6>{content.data}</h6>
         
  //         </div>
         
         
  //       ))
  //     }
  //     </div>
  //  </div>

  //   
  <div>
  <FirstQuestion />
  <hr/>
  <SecondQuestion />
  </div>
  );
 
}

export default App;
