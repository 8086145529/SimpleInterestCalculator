
import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setInterest]= useState(0)
  const [principle,setPrinciple]= useState(0)
  const [rate,setRate]= useState(0)
  const [year,setYear]= useState(0)
  const [isPrinciplevalid,setIsprinciplevalid] = useState(true)
  const [isRatevalid,setIsratevalid] = useState(true)
  const [isYearvalid,setIsyearvalid] = useState(true)

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely")
    }else{
      setInterest( principle*rate*year/100)
    }
  }

  const validateInput = (e)=>{
    const {value,name} = e.target
    if(!!value.match(/^[0-9]+$/)){
      if (name==="principle") {
      setPrinciple(value)
      setIsprinciplevalid(true) 
      }else if(name==="rate"){
        setRate(value)
        setIsratevalid(true)
      }else{
        setYear(value)
        setIsyearvalid(true)
      }
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsprinciplevalid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsratevalid(false)
      }else{
        setYear(value)
        setIsyearvalid(false)
      }
    }
     
  }

  const handleReset =(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsprinciplevalid(true)
    setIsratevalid(true)
    setIsyearvalid(true)
  
  }

  
  return (
    <div style={{height:"100vh"}} className='d-flex w-100 justify-content-center align-items-center bg-dark'>
      <div style={{width:'500px'}} className=' bg-light rounded p-5'>
        <div className='heading'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate  your simple interest easily</p>
        </div>
        <div style={{height:'150px'}} className='interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-info text-light '>
         <h1>  ₹ {" "} {interest}</h1>
         <p className='fw-bold'>Total Simple Interest</p>
        </div>
        <form onSubmit={handleCalculate} className='mt-5'>
           <div className='mb-3'>
           <TextField value={principle || ""} onChange={(e)=>validateInput(e)} className='w-100' id="outlined-basic" label="Principal Amount" variant="outlined" name='principle' />
           </div>
           {
            !isPrinciplevalid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
           }
           <div className='mb-3'>
           <TextField value={rate || ""}onChange={(e)=>validateInput(e)}className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" name='rate'/>
           </div>
           {
            !isRatevalid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
           }
           <div className='mb-3'>
           <TextField value={year || ""} onChange={(e)=>validateInput(e)} className='w-100' id="outlined-basic" label="Time period (Yr)" variant="outlined" name='year' />
           </div>
           {
            !isYearvalid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
           }
           <Stack direction="row" spacing={2}>
           <Button disabled={isPrinciplevalid && isRatevalid && isYearvalid?false:true} type='submit' style={{width:'200px',height:'50px'}} className='bg-dark' variant="contained">CALCULATE</Button>
           <Button  onClick={handleReset}  style={{width:'200px',height:'50px'}} variant="outlined">RESET</Button>
           </Stack>
        </form>

      
      </div>
    </div>
  );
}

export default App;
