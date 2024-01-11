
import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios'

function Loging() {
  const [admins,setAdmins] = useState([]);
  const [controllers,setControllers]=useState([])
  const [pseudo,setPseudo]=useState("")
  const [password,setPassword]=useState("")
  const [errorPseu,setErrorPseu]=useState(true)
  const [errorPass,setErrorPass]=useState(true)

  useEffect(()=>{
    getadmins()
  },[password,pseudo])

  const getadmins=()=>{
    axios.get('http://localhost:3000/api/sarbini/admin/admins')
    .then((res)=>{
      setAdmins(res.data)
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("error",err);
    })
  }

  const getcontrollers=()=>{
    axios.get('http://localhost:3000/api/sarbini/admin/controllers')
    .then((res)=>{
      setControllers(res.data)
      console.log(res.data);
    })
    .catch((err)=>{
      console.log("Error",err)
    })
  }
  //function//
  const hundletext=(set,e)=>{
    set(e.target.value)
  }
  const verif=()=>{
    if (pseudo===""|| password==="") {
      setErrorPass(!errorPass)
      setErrorPseu(!errorPseu)
    }
    for(let i=0;i<admins.length;i++){
      if (pseudo!=admins[i].admin_pseudo&&password!=admins[i].admin_password){
        setErrorPass(!errorPass)
        setErrorPseu(!errorPseu)

    }
  }
  }

  return (
    <div className='bigdiv_logo'>
        <div className='div1_login'>
            <img className='img_logo'  src="https://cdn.discordapp.com/attachments/1191780458074230886/1192873302625099827/Capture_d_ecran_2024-01-04_161046-removebg-preview.png?ex=65aaa8d5&is=659833d5&hm=7388a94ef9dce62cc8861b6718d02c6d276e8dff82567fe09bfcc431654177be&" alt="" />
        </div>
        <div className='div2_login'>
            <h2 className='h2_login'>Sarbini</h2><p className='p_login' >your safety network</p>
            <div className='div3_login' ><h1 className='h1_login' >Login</h1><hr /><p className='p2_login'>sign into your account</p></div>
              {!errorPseu&&<Input status='error' onClick={()=>{setErrorPseu(true)}} size="large" onChange={(e)=>{hundletext(setPseudo,e)}}  className='input_login' placeholder="Pseudo" prefix={<UserOutlined />} />}
              {errorPseu&&<Input  size="large" onChange={(e)=>{hundletext(setPseudo,e)}}  className='input_login' placeholder="Pseudo" prefix={<UserOutlined />} />}
              {!errorPass&&<Input status='error' onClick={()=>{setErrorPass(true)}} size="large" onChange={(e)=>{hundletext(setPassword,e)}} className='input_login' type='password' placeholder="Pasword" />}
              {errorPass&&<Input  size="large" onChange={(e)=>{hundletext(setPassword,e)}} className='input_login' type='password' placeholder="Pasword" />}
            <Flex className='flex_login'   gap="small" wrap="wrap">
            <Button className='button_login' onClick={()=>{verif()}}>Login</Button>

            </Flex>
        </div>
    </div>
  )
}


export default loging
