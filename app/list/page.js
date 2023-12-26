import { connectDB } from "@/utill/database"

export default async function List(){

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    return(

    result.map((a)=>{
        return(       
        <div className="list-bg">
        <div className="list-item">
          <h4>{a.title}</h4>
          <p>{a.content}</p>
        </div>
        </div>)
    })
    )
//    return(    
//     <div className="list-bg">
//     <div className="list-item">
//       <h4>{result[0].title}</h4>
//       <p>{result[0].content}</p>
//     </div>
//     <div className="list-item">
//     <h4>{result[1].title}</h4>
//       <p>{result[1].content}</p>
//     </div>
//     <div className="list-item">
//     <h4>{result[2].title}</h4>
//       <p>{result[2].content}</p>
//     </div>
//   </div>


//  )

    
}