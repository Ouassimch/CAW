import {Link} from 'react-router-dom'
export const Home = () => {
    return (
    <>
    <h4>I am ouassim ahmed ramy chelghoum, welcome to my homepage</h4>
    <h1>You can browse my page with <Link to={"/contacts"}>Contacts</Link> or <Link to={"/blog"}>Blog</Link> Links </h1>
    </>
    )
}
