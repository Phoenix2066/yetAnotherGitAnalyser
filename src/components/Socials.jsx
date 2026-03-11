import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareLinkedin, faSquareYoutube, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


function Socials({username, userdata}){
    const [socialData, setSocialData] = useState([]);

    useEffect(() => {
        async function fetchSocials() {
            const response = await fetch(`https://api.github.com/users/${username}/social_accounts`);
            const data = await response.json();
            setSocialData(data);
        }
        fetchSocials();
    }, [username]);
    
    const twitter = socialData.find(item => item.provider === "twitter");
    const linkedin = socialData.find(item => item.provider === "linkedin");
    const youtube = socialData.find(item => item.provider === "youtube");
    const blog = userdata.blog;
    const instagram = socialData.find(item => item.provider === "instagram");

    // Then get the URL
    return(
        <div className='linkSection flex justify-evenly rounded-xl bg-white flex-row w-full h-[10vh] m-0 outline outline-black/5 items-center'>
            {linkedin && (
                <a className='p-2 text-3xl' href={linkedin?.url}><FontAwesomeIcon className='text-neutral-950' icon={faSquareLinkedin} /></a>
            )}
            {twitter && (
                <a className='p-2 text-3xl' href={twitter?.url}><FontAwesomeIcon className='text-neutral-950' icon={faSquareXTwitter} /></a>
            )}
            {youtube && (
                <a className='p-2 text-3xl' href={youtube?.url}><FontAwesomeIcon className='text-neutral-950' icon={faSquareYoutube} /></a>
            )}
            {blog && (
                <a className='p-2 text-3xl' href={blog?.url}><FontAwesomeIcon className='text-neutral-950' icon={faLaptopCode} /></a>
            )}
            {instagram && (
                <a className='p-2 text-3xl' href={instagram?.url}><FontAwesomeIcon className='text-neutral-950' icon={faSquareInstagram} /></a>
            )}
        </div>
    );
}

export default Socials;