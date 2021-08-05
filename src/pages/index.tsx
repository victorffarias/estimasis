import { Paper, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import styles from '../../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <Paper elevation={3} className={styles.wrapper}>
          <h2>Sistema de Estimativas da Websis para o MRE</h2>
          <InputLabel shrink id="label-projeto">Projeto</InputLabel>
          <Select label="Projeto" labelId="label-projeto" displayEmpty>
            <MenuItem value="REM">Remoção</MenuItem>
            <MenuItem value="GIP">Gestão de Pessoas</MenuItem>
            <MenuItem value="VOTO">Voto</MenuItem>

          </Select>
          <TextField label="Número da Issue" variant='outlined'/>
          

        </Paper>
      </main>
    </div>
  )
}
