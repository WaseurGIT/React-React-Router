import './User.css'
const User = ({user}) => {

    const {id, name, email, phone} = user

    return (
        <div >
            <div className="user">
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Contact: {phone}</h4>
            </div>
        </div>
    );
};

export default User;