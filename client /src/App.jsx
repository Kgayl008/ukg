import './App.scss';
import Close from "../src/assets/icons/close.png"


function App() {
    return (
        <>
          <div className='container'>
          <img src={Close} alt=' close x icon' className='icon'/>
            <p className="title">Tell us what’s happening?</p>
            <form action="">
                <textarea type="text" className='input'></textarea>
                <button className='button'>
                    <span>Send message</span>
                </button>
            </form>
          </div>
        </>
    );
}

export default App;
