import './App.scss';

function App() {
    return (
        <>
          <div className='container'>
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
