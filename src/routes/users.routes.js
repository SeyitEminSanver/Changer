import { Router } from "express";
import { pool } from "../db.js";
import { GetUsers } from "../controllers/users.controllers.js";
const router=Router()


router.get('/GetUsers',GetUsers)

router.get('/users/:userId',async(req,res)=>{
    const {userId}=req.params
    const {rows}=await pool.query("select * from users where uid=$1",[userId])
      if(rows.length<=0)
        {
            return res.status(404).json({message:"User Not Found"})

        }
    res.json(rows)
})


router.post('/users',(req,res)=>{
    const {name}=req.body
    console.log(name)
    res.send("post users")
})

router.delete('/users/:userId',(req,res)=>{
    const {userId}=req.params

    res.send(userId+"delete users")
})


router.put('/users/:userId',(req,res)=>{
    const {userId}=req.params

    res.send(userId+"put users")
})



export default router;