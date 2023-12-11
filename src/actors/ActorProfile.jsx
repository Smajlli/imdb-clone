import './ActorProfile.css'

function ActorProfile({actor}) {
    return <>
        <div className='actorProfileContainer'>
            <div className='actorProfileImgContainer'>
                <div className='actorProfileImgGradient'></div>
                <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="actorProfileImg" />
            </div>
            <div className='actorProfileName'>{actor.name}</div>
        </div>
    </>
}

export default ActorProfile;