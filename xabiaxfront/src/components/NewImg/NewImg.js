import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { CadastroForm, Background, GlobalStyle, PositionTypo } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

export function NewImg() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Background>
        <CadastroForm /*onSubmit={onSubmitLogin}*/>
          <PositionTypo>
            <Tooltip title="Add" aria-label="Add">
              <Fab color="secondary">
                <AddIcon />
              </Fab>
            </Tooltip>
          </PositionTypo>

          <TextField
            label={"Subtitle"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />
          <TextField
            label={"Author"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />
          <TextField
            label={"File"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />

          <TextField
            label={"Tags"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />

          <TextField
            label={"Collection"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />

          <Button variant={"contained"} color={"primary"} type={"submit"}>
            Enviar
          </Button>
          <Button variant={"contained"} color={"secundary"} type={"submit"}>
            Imagens
          </Button>
        </CadastroForm>
      </Background>
    </div>
  );
}
