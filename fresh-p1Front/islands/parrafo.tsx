import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact/src/index.d.ts";

export type Props = {
  modulo: string;
  title: string;
  text: string;
};

const Parrafo: FunctionComponent<Props> = (props) => {
  const mostrarMas = useSignal(false);
  const texto = useSignal(props.text);

  return (
    <section>
      <h1>{props.modulo}</h1>
      <button onClick={() => mostrarMas.value = !mostrarMas.value}>
        {mostrarMas.value ? "Mostrar menos" : "Mostrar más"}
      </button>
      {mostrarMas.value && (
        <div>
          <h1>{props.title}</h1>
          <p>{texto.value}</p>
          <input
            type="text"
            placeholder="Input de texto"
            class="rectangulo"
            onChange={(e) => {
              texto.value = e.currentTarget.value;
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Parrafo;
