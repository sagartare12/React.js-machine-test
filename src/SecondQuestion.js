import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'

const SecondQuestion = () => {
const  [data , setData] = useState('')
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://reqres.in/api/users?page=2')
            .then(res=> {
               return res.json()
            })
            .then(datas=>{
                setData(datas.data)
            })
        },1000)
    },[])


console.log(data)
    return (
        <div>
            <h4> Question 2</h4>
        <div style={{display:'flex',flexWrap:'wrap'}}>
           {data &&
               data.map((user)=>(


                <div style={{marginLeft:'auto',marginRight:'auto' , marginTop:'10px',marginBottom:'10px'}}>
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.avatar} />
                    <Card.Body>
                        <Card.Title>First name :{user.first_name}</Card.Title>
                        <Card.Title>Last name :{user.last_name}</Card.Title>
                        <Card.Text>
                        Email : {user.email}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
               ))
           }
</div>

                 
        </div>
    )
}

export default SecondQuestion
