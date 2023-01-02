import './table.css'

export const ContactsTable = (props) => {
  const contacts = props.Table;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <h4>
                Full Name
              </h4>

            </th>
            <th>
              <h4>
                Phone Number
              </h4>
            </th>
            <th>
              <h4>
                Email
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => {
              
              return <tr key={contact.PhoneNumber}>
                <td>
                  {contact.fullName}
                </td>
                <td>
                  {contact.PhoneNumber}
                </td>
                <td>
                  {contact.email}
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

