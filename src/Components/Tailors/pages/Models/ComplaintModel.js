import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ComplaintModel.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ComplaintModel = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [complaint,setComplaint] = React.useState("")

  const handleForm = (event) =>{
      setComplaint(event.target.value)
  }

  const submitForm = (event) =>{
      event.preventDefault()
      console.log("i am pressed")
  }

  return (
    <div>
      <Button onClick={handleOpen}>Give Complaint</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <p className='textPara'>Give a Complaint !</p>
            <form >
                <input type="text" className='inputs' onChange={() => handleForm()}></input>
                <button className="button" onClick={(e)=>{submitForm()}}>Ok</button>
            </form>
            
        </Box>
      </Modal>
    </div>
  );
}

export default ComplaintModel;
