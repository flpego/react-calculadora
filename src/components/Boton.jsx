import "../stylesheet/Boton.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  botonUi: {
    height: 83,
    margin: 7,
    fontSize: 30,
    fontFamily: "Helvetica",
    borderRadius: "5px 10px 10px 20px",
  },
});

function Boton(props) {
  const classes = useStyles();

  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      <Button className={classes.botonUi}>{props.children}</Button>
    </div>
  );
}

export default Boton;
