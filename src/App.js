import './App.css';
import  React  from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextareaAutosize from '@mui/material/TextareaAutosize';

function App() {

    const [batch,setbatch] = React.useState('');
  
    const handleChange = (event) => 
      setbatch(event.target.value);
    

  return (
    <div className="App">
     
           <div className="box">
           <h2>Bulk Email </h2>
           <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Batch</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={batch}
          label="batch"
          onChange={handleChange}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>B35 WD ENGLISH</MenuItem>
          <MenuItem value={2}>B36 WD HINDI</MenuItem>
          <MenuItem value={3}>B37 WD TAMIL</MenuItem>
          <MenuItem value={4}>B38 WD ENGLISH</MenuItem>
          <MenuItem value={5}>B39 WD HINDI</MenuItem>
          <MenuItem value={6}>B40 WD TAMIL</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
    <div className='user'>
    <label>To Users:</label>
    </div>
    <div className="userlabel">
    <TextareaAutosize
   minRows={3}
      placeholder="Recepints"
      style={{top:210,background: 242026, color:'whitesmoke',width:900,height:50,position:'fixed', border: "1px solid #fff" }}
    />
    </div>
    {/* Default mail name */}
    <br/>
    <div className='default'>
    <label>From(default Mail name) :</label>
    <br/> 
    <input type="text" name="" required=""/>
    </div>
       {/* CC mail name */}
    <div className='ccmail'>
    <label>cc Mail :</label>
    <br/> 
    <input type="text" name="" required=""/>
    </div>
    <br/>
      <div className='subject'>
        <label>Subject :</label>
        <input type="text" name="" required=""/>
      </div>
      <br/>
    <div className='message'>   
      <label>Message :</label>
       <textarea type="text"/>
        </div>

    <button>Submit</button>

    </div>
       
      
       
      </div>

    

  );
}
export default App;
