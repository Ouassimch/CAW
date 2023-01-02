import "./table.css"

export const BlogsTable = (props) => {
  const blogs = props.Blog;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <h4>
                Subject
              </h4>

            </th>
            <th>
              <h4>
                Description
              </h4>
            </th>
            <th>
              <h4>
                Date
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((blog) => {
              
              return <tr key={blog.date}>
                <td>
                  {blog.subject}
                </td>
                <td>
                  {blog.description}
                </td>
                <td>
                  {blog.date}
                </td>
              </tr>
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

