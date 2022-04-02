export default function Total(props) {
  const { exercises1, exercises2, exercises3 } = props;
  return (
    <div>
      <p>
        El total de ejercicios es de: {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  );
}
