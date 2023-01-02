import { useEffect , useState } from "react";
import { ContactsTable } from "./ContactsTable";
import {contacts} from "./MyContacts"
import { SearchTable } from "./SearchTable";
import './form.css';


export const ContactsComponent = () => {
   
   const [isClicked, setIsClicked] = useState(false);

   // getting data from storage
   const getData = () => {
      const data = localStorage.getItem('Contacts')
      if (data) {
         return JSON.parse(data)
      } else {
         return contacts
      }
   }
   const getTable = () => {
      const Data = localStorage.getItem('Table')
      if (Data) {
         return JSON.parse(Data)
      } else {
         return []
      }
   }
   
   // Main Array Of Objects
   const [Contacts, setContact] = useState(getData() === [] ? contacts : getData())
   const [Table, setTable] = useState(getTable());

   // search array and function
   const [Query , setQuery] = useState("")
   const search = (Table) => {
      return Table.filter(contact => contact.fullName.toLowerCase().includes(Query) || contact.PhoneNumber.toLowerCase().includes(Query) || contact.email.toLowerCase().includes(Query) );

   }   

   // Input fields state 
   const [fullName, setFullName] = useState("");
   const [PhoneNumber, setPhoneNumber] = useState("");
   const [email, setEmail] = useState("");


   //form submit
   const handleSubmit = (event) => {
      event.preventDefault();
      let contact = {
         fullName,
         PhoneNumber,
         email
      }

      setContact([...Contacts, contact]);
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setIsClicked(false);
   }


   // saving data
   
   useEffect(() => {
      localStorage.setItem('Contacts', JSON.stringify(Contacts))
   }, [Contacts])
   useEffect(() => {
      localStorage.setItem('Table', JSON.stringify(Table))
   }, [Table])



   return (
      <>
         <div >
            <div>
            <button onClick={() => setTable(Contacts)} className="btnTop">display contacts</button>
            <button onClick={() => setIsClicked((prev) => !prev)} className="btnTop">create contact</button>
            </div>
            {isClicked &&
               <form onSubmit={handleSubmit} className="formInput ">
                  <div>
                  <label>Contact Name</label>
                  <input type={"text"} required autoFocus maxLength={20} name="FullName" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                  </div>

                  <div>
                  <label>Phone Number</label>
                  <input type={"number"} required autoFocus maxLength={10} name="PhoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} value={PhoneNumber} />
                  </div>

                  <div>
                  <label>Email</label>
                  <input type={"email"} required autoFocus maxLength={50} name="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>

                  <button type="submit" className="btnTop">Add a new contact</button>
               </form>}
               <div>
               <label>Search</label>
               <input type={"text"} onChange={(e) => setQuery(e.target.value)} className="Search"/>
               {Query === "" ? <ContactsTable Table={Table} /> : <SearchTable Table={search(Table)} />} 
               </div>

         </div>
      </>
   )
}
