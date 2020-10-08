import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';

export function HomePage(){

    return(

        <div>
            <Typography variant="h1">Xabia XS </Typography>
            <ButtonsContainer>

             <Link to={'/login'}>          
             <Button variant={'outlined'} color={'secundary'}>Login</Button>
             </Link>

             <Link to={'/cadastro'}> 
             <Button variant={'contained'} color={'primary'}>Cadastro</Button>
             </Link>

            </ButtonsContainer>
        </div>

    )
}

