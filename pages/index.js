import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

export default function Home() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ],
  };
  // const part1 = { name: 'Fundamentals of React', exercises: 10 };
  // const part2 = { name: 'Using props to pass data', exercises: 7 };
  // const part3 = { name: 'State of a component', exercises: 14 };
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
