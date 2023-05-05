import "./Home.scss";
import Close from "../../assets/icons/close.png";
import {Link} from "react-router-dom";
// import {useState} from 'react';


function Home() {
    return (
        <>
            <div className='container'>
                <img src={Close}
                    alt=' close x icon'
                    className='icon'/>
                <p className="title">Tell us what’s happening?</p>
                <form action="">
                    <textarea type="text" className='input'></textarea>
                    <Link to='/nextpage'>
                        <button 
                            className='button'>
                            <span>Send message</span>
                        </button>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Home;
