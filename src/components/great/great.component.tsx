import {FC} from "react";

export const GreatComponent: FC = () => {
  const skills = ["js", "ts", "html", "css"];

  return (
    <div data-testid="test-id-12">
      <p>This is the test course</p>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
