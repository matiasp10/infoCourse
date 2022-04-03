export default function Total(props) {
  const { parts } = props;
  let suma = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <p>El total de ejercicios es de: {suma}</p>
    </div>
  );
}
