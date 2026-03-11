import "./component.css"

function Input({username, setUsername, handleclick}){


    return(
        <>
            <div className='input flex items-center gap-x-15 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 w-fit'>
                <label htmlFor="username">
                    <h4 className="username text-l rounded-xl">Enter the github Username </h4>
                    <input type="input" placeholder="Username" id="username" className="username text-xl font-medium text-black rounded-xl p-1 " value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                </label>
                <button className="submitButton text-xl font-medium" onClick={handleclick}>Fetch</button>
            </div>
        </>
    );
}

export default Input;