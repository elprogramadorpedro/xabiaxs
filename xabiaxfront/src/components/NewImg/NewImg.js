import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import {
  CadastroForm,
  PositionTypo,
  DivGaleryCadastroForm,
  GaleryImages,
  informacoesImages,
} from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import CardImg from "../CardImg/CardImg";

export function NewImg(props) {
  const [subtitle, setSubititle] = useState("");

  const [author, setAuthor] = useState("");

  const [file, setFile] = useState("");

  const [tags, setTags] = useState("");

  const [collection, setCollection] = useState("");

  return (
    <div>
      <DivGaleryCadastroForm>
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
            value={subtitle}
            onChange={(event) => setSubititle(event.target.value)}
          />
          <TextField
            label={"Author"}
            type={"text"}
            variant="outlined"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />

          <TextField
            label={"File"}
            type={"text"}
            variant="outlined"
            value={file}
            onChange={(event) => setFile(event.target.value)}
          />

          <TextField
            label={"Tags"}
            type={"text"}
            variant="outlined"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />

          <TextField
            label={"Collection"}
            type={"text"}
            variant="outlined"
            value={collection}
            onChange={(event) => setCollection(event.target.value)}
          />

          <Button variant={"contained"} color={"primary"} type={"submit"}>
            Criar Imagem
          </Button>
          <Button variant={"contained"} color={"secundary"} type={"submit"}>
            Imagens
          </Button>
        </CadastroForm>
        <GaleryImages>
          <CardImg></CardImg>
          <informacoesImages></informacoesImages>
        </GaleryImages>
      </DivGaleryCadastroForm>
    </div>
  );
}
