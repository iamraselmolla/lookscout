import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <section className='py-3 bg-black text-white'>
            <div className="container text-end">
                    <Link className='text-decoration-none text-white fw-bolder px-3' to="/">Home</Link>
                    <Link className='text-decoration-none text-white fw-bolder px-3' to="/adminPanel">Admin Panel</Link>
            </div>
        </section>
    );
};

export default Menu;