import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import { LoginForm } from './styles'


export function Login(){

    return(

        <div>
     <Typography variant="h1" aling={'center'}>Login</Typography>
    <LoginForm /*onSubmit={onSubmitLogin}*/>
      <TextField
        label={'Email'}
        type={'email'}
        //onChange={onChangeInput}
       // value={form['email']}
        //name={'email'}
      />
      <TextField
        label={'Senha'}
        type={'password'}
       // onChange={onChangeInput}
       // value={form['password']}
        //name={'password'}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
    </LoginForm>
        </div>

    )
}