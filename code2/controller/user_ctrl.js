import db from '../db/index.js'

export async function getAllUser(req,res){

 try{
  const [rows]=await db.query('select id,username,nikname from ev_users')
  /* console.log(rows) */
  res.send({
    status:0,
    message:'获取用户列表成功',
    data:rows,
  })
 }catch(err){
  res.send({
    status:1,
    message:'获取用户列表失败',
    desc:err.message,
  })
 }

}

