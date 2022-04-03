import Header from './Header';
import Total from './Total';
import Content from './Content';

export default function Course(props) {
  const { courses } = props;
  return (
    <>
      {courses.map((e) => {
        return (
          <div>
            <Header title={e.name} key={e.id} />
            <Content parts={e.parts} />
            <Total parts={e.parts} />
          </div>
        );
      })}
    </>
  );
}
