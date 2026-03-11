
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers , faBook, faStar, faCode, faBuilding, faDiagramProject, faBox , faUserCheck } from '@fortawesome/free-solid-svg-icons'


function Quicklinks({username}){
    return(
        <>
            <h2 className='text-4xl text-neutral-950'>QuickLinks</h2>
            <div className='QuickLinks flex justify-evenly flex-wrap text-6xl p-8'>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=following`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faUsers} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Following</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=followers`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faUserCheck} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Followers</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=repositories`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faBook} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Repositories</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=stars`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faStar} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Stars</h3 ></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://gist.github.com/${username}`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faCode} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Gists</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=organizations`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faBuilding} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Organizations</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=projects`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faDiagramProject} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Projects</h3></a>
                <a className="group flex flex-col p-8 rounded-xl outline outline-black/5 items-center text-[1rem] m-[5%] w-[20%] h-[40%] hover:bg-neutral-950 hover:text-neutral-50 transition" href={`https://github.com/${username}?tab=packages`}><FontAwesomeIcon className="text-neutral-950 group-hover:text-neutral-50" icon={faBox} /><h3 className="text-neutral-950 group-hover:text-neutral-50">Packages</h3></a>
                {/* */}
            </div>
        </>
    );

}

export default Quicklinks;