import { pool } from "../db.js"


 const GetUsers=async(req,res)=>{
    const {rows}=await pool.query("select * from users")
    res.json(rows)
}



export{GetUsers}