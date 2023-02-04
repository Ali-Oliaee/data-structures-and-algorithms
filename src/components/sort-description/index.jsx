import "./styles.scss"

const SortDescription = ({
  description,
  worstCase,
  avgCase,
  bestCase,
  code,
}) => {
  return (
    <div className="sort-description">
      <hr />
      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ?? (
            <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </p>
          )}
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst time complexity</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>
              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>
              <tr>
                <td>Best time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <aside className="SortInfo__Aside">
          <h3>Code</h3>
          {code}
        </aside>
      </div>
    </div>
  )
}

export default SortDescription
