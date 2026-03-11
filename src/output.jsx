import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

import "./component.css"
import Socials from "./components/Socials.jsx"
import Quicklinks from "./components/Quicklinks.jsx"
import Repositories from './components/repositories.jsx';

function Output({username, userdata, handleclick, setUsername}) {

    return (
        <>
            <div className='output flex h-[90vh] w-full'>
                <div className='menu basis-64 flex flex-col items-center gap-x-20 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 w-fit'>
                    <div className='ImageContainer'>
                        <img className="rounded-full" src={userdata.avatar_url} alt="Profile Picture"/>
                    </div>
                    <h1>{userdata.login}</h1>
                    <h2>{userdata.name}</h2>
                    <div className='followers flex w-full items-center'>
                        <div className='flex justify-between basis-64 p-4 rounded-xl outline outline-black/5 items-center'><div>Followers</div><div>{userdata.followers}</div></div>
                        <div className='flex justify-between basis-64 p-4 rounded-xl outline outline-black/5 items-center'><div>Following</div><div>{userdata.following}</div></div>
                    </div>
                    <a className="p-2 rounded-xl outline outline-black/5 items-center text-3xl" href={userdata.html_url}><FontAwesomeIcon className="text-neutral-950" icon={faGithub} /></a>

                    

                </div>
                <div className='infoPane flex flex-col justify-start rounded-xl w-full h-full'>
                    <div className="navbar flex justify-between rounded-xl bg-white flex-row w-full h-[10vh] m-0 outline outline-black/5 items-center">
                        <div>
                            <label htmlFor="username">
                                <input type="input" placeholder="Username" id="username" className="username text-xl font-medium text-black rounded-xl p-1 " value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                            </label>
                            <button className="submitButton text-xl font-medium" onClick={handleclick}>Fetch</button>
                        </div>
                        <a href="index.html" className='hover:animate-spin'><FontAwesomeIcon className="text-neutral-950" icon={faArrowsRotate} /></a>
                    </div>

                    <div className='information flex p-4 justify-between rounded-xl bg-white flex-col w-full h-full m-0 outline outline-black/5 items-center overflow-y-scroll '>
                        <div className='flex flex-row w-full justify-start'>
                            <div className='idCard flex flex-col items-center gap-x-20 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 basis-128'>
                                <h1>{userdata.name}</h1>
                                <div className="flex justify-between rounded-xl bg-white flex-row w-full h-[10vh] m-0 outline outline-black/5 items-center">
                                    <h3>{userdata.login}</h3>
                                    <h3>{userdata.id}</h3>
                                </div>
                                <div className='flex justify-between rounded-xl bg-white flex-row w-full'><p>Created</p> <p>{userdata.created_at}</p></div>
                                <div className='flex justify-between rounded-xl bg-white flex-row w-full'><p>Updated</p> <p>{userdata.updated_at}</p></div>
                                <Socials username={userdata.login} userdata={userdata}/>
                            </div>
                            <div className='flex flex-col items-center gap-x-20 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 w-full'>
                                <Quicklinks username={userdata.login} />
                            </div>
                        </div>
                        <Repositories username={username} userData={userdata} />
                    </div>  
                </div>
            </div>
        </>
    );
}

export default Output;
