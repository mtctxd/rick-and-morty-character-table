import { Character } from "../models.ts";

type Props = {
    character: Character;
}

const CharacterInTable: React.FC<Props> = ({character}) => {
  return (
    <tr>
      <td>checkbox</td>
      <td>name</td>
      <td>avatar</td>
      <td>origin</td>
      <td>epizod</td>
      <td>status</td>
    </tr>
  );
};

export default CharacterInTable;
