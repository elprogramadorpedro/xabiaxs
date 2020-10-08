import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import { CadastroForm } from './styles'


export function Signup(){
    return(
        <div>
     <Typography variant="h1" aling={'center'}>Cadastro</Typography>
    <CadastroForm /*onSubmit={onSubmitLogin}*/>
     <TextField
        label={'name'}
        type={'text'}
        //onChange={onChangeInput}
       // value={form['email']}
        //name={'email'}
      />
        <TextField
        label={'nickname'}
        type={'text'}
        //onChange={onChangeInput}
       // value={form['email']}
        //name={'email'}
      />
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
    </CadastroForm>
        </div>
    )
}