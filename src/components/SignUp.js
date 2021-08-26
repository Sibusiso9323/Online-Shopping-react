import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";




import SignUp from "./components/SignUp";


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  
});

const SignUp = () => {
  const classes = useStyles();
  const { register, handleSubmit, formState:{error} } = useForm();

  const onSubmit = async(data)=>{
    console.log(data); 
  }
  return (
 
    <Container maxWidth="sm">

    <div>
     <h2>SignUp </h2>
     <form onSubmit={handleSubmit(onSubmit) }noValidate>

     <TextField id="standard-basic" label="Name" 
     required
     fullWidth
     autoFocus
     {...register( "Name", {required: {value:true, massege:"please enter your name" }})}
     />
      {errors.name && <p>{errors.name.message}</p>}


     <TextField id="standard-basic" label="Email" 
     required
     fullWidth
     autoFocus
     {...register( "Email" ,{required: {value:true, massege:"please enter your Email" }})}
     />
            {errors.email && <p>{errors.email.message}</p>}

     <TextField id="standard-basic" label="Password" 
     required
     fullWidth
     autoFocus
     type="password "
     {...register( "Password", {required: {value:true, massege:"please enter your password" }})}
     />
       {errors.password && <p>{errors.password.message}</p>}

     <TextField id="standard-basic" label="Contact" 
     required
     fullWidth
     autoFocus
     {...register( "Contact", {required: {value:true, massege:"please enter your contact" }})}
     />
        {errors.contact && <p>{errors.contact.message}</p>}




     <Button type="Submit"  className={classes.root} >SignUp</Button>;
     </form>  
    </div>
  
</Container>
  );
}

export default  SignUp;
