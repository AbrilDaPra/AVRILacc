import './App.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material';

function App() {

  return (
    <>
      <div>
        <Button color="error" startIcon={<DeleteIcon />}>
          Botoncito
        </Button>
        <DeleteIcon></DeleteIcon>
        
        <IconButton aria-label="ShoppingCartIcon">
          <ShoppingCartIcon></ShoppingCartIcon>
        </IconButton>

        <Grid container>
          <Grid item>

          </Grid>
        </Grid>

      </div>
    </>
  )
}

export default App
