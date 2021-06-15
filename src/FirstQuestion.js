


import React , {useState} from 'react'
function FirstQuestion() {

  const [ something, setSomething] = useState('');
  const [ addContent , setAddContent] = useState([]);

  const addSomething = (adda)=>{
      adda.preventDefault();
      const item={data:something,
        id:new Date().toLocaleString()
      }
      
      setAddContent([...addContent,item])
      setSomething('');
  }

  console.log(addContent)
  return (
   <div style={{margin:'auto'}}>
     
       <h4>Question 1</h4>
          <form>
          <input style={{marginLeft:'5%'}}
            type="text"
            placeholder="Enter something..." 
            value={something}
            onChange={ (e)=>setSomething(e.target.value)}
          />
          <button type="submit" onClick= {addSomething}> Add something</button>
          </form>
  <div>
      {
        addContent.map((content)=>(
         <div key= {content.id}>
          <h6 style={{marginLeft:'8%'}}>{content.data}</h6>
        </div>
         
        ))
      }
      </div>
   </div>

    );
 
}

export default FirstQuestion;