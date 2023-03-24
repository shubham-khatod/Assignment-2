import './Display.css';
const Display = props => {
  return (
    <table>
      <tr>
        <th>First Name </th>
        <th>Last Name</th>
      </tr>
      {props.details.map((obj, index) => {
        return (
          <tr key={index}>
            <td>{obj.firstname}</td>
            <td>{obj.lastName}</td>
          </tr>);
      })}
    </table>
  )
}

export default Display;