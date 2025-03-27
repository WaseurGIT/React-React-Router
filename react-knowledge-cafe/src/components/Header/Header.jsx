import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-1 mb-3 max-w-7xl mx-auto'>
            <h1 className='text-2xl text-center text-violet-700 font-bold'>React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;