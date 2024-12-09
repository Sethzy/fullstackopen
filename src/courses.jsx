const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Total = ({ total }) => {
    return (
      <p> <strong> Number of exercises {total}</strong></p>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={total} />
      </div>
    )
  }

  export default Course;