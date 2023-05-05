import "./nextpage.scss";
import Close from "../../assets/icons/close.png"

const Nextpage = () => {
    return(
        <div className='container'>
                <img src={Close}
                    alt=' close x icon'
                    className='icon'/>
                <p className="title">Tell us what’s happening?</p>
                <div className="box">
                    <p className="box__title">Just one minute...</p>
                    <p className="text">Your message could be perceived as ”critical”. Would you like to change it or send as is?</p>
                <div className="button__container">
                    <div>
                        <button className="button1">Leave as is</button>
                    </div>
                    <div>
                        <button className="button2">Make correction</button>
                    </div>
                </div>
                </div>
                <form action="">
                    <textarea type="text" className='input' placeholder="I am upset, my hours on my paycheck are incorrect"></textarea>
                        <button 
                            className='button'>
                            <span>Send message</span>
                        </button>
                </form>
            </div>
    )
}

export default Nextpage;