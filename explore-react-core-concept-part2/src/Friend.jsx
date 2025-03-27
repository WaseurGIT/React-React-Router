import './Friend.css'

export default function Friend({friend}){
    
    const {name, email, website, address} = friend

    return(
        <div className='friend'>
            <h2>Name  : {name}</h2>
            <h4>Email : {email}</h4>
            <h4>City: {address?.city}</h4>
            <h5>Website: {website}</h5>
        </div>
    )
}