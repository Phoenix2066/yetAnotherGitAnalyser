import { useEffect, useState } from "react" 

function Repositories({username, userData}){
    const [repo, setRepo] = useState([]);

    useEffect(()=>{
        async function dataFetch(userData){
            const response = await fetch(userData.repos_url);
            const data = await response.json();
            console.log(data);
            setRepo(data);
        }
        dataFetch(userData);

    }, [userData]);

    return(
        <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 w-full">
            <h2 className="text-2xl text-neutral-950">Repositories</h2>
            <div className="grid grid-cols-4 gap-6 w-full mt-6">
                {repo.map((repos)=>(
                    <div key={repos.id} className="group flex flex-col gap-3 p-4 rounded-xl outline outline-black/10 items-center text-sm ">
                        <a href={repos.html_url} target="_blank" className="flex items-center justify-center bg-white text-black px-3 py-1 rounded-md hover:bg-neutral-200"><h2 className="text-lg text-black font-semibold text-center">{repos.name}</h2></a>
                        <div className="w-full p-3 rounded-lg bg-white text-black outline outline-black/10 min-h-[80px] flex items-center justify-center text-center text-xs">{repos.description}</div>
                        <div className="flex w-full gap-2 items-center">
                            <div className="flex-1 text-[10px] flex flex-wrap items-center justify-center"><Language link={repos.languages_url}/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Repositories;

function Language({link}){
    const [data, setData] = useState({});

    useEffect(()=>{
        async function fetchData(link){
             const response = await fetch(link);
             const result = await response.json();

             setData(result);
        }
        fetchData(link);
    }, [link]);

    return(
        <div className="languages">
            {Object.keys(data).map(key =>{
                return(
                    <span>{key}</span>
                );
            })}
        </div>
    );
}