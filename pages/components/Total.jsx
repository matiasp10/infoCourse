export default function Total(props) {
  const { parts } = props;
  return (
    <div>
      <p>
        El total de ejercicios es de:{' '}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  );
}
