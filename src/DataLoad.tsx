import employee from './data/employee.json';

export const DataLoad = () => {
  const userName = employee.name.toUpperCase();
  const salary = employee.salary;
  const years = employee.years;
  const skills = employee.skills;

  return (
    <div>
      <p>dataLoad page</p>
      <ul>
        <li>{userName}</li>
        <li>{salary}</li>
        {years.map((year) => (
          <li key={year}>{year}</li>
        ))}
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
