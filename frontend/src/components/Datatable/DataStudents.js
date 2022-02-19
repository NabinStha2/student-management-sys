export default function DataStudents({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  //   console.log(columns);
  return (
    <table cellPadding={2} cellSpacing={9}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
