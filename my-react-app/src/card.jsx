import ProfilePic from './assets/image.jpg'

function Card() {
    return (
        <div className="card">
            <img className= "card-image" src={ProfilePic}alt="profile picture"/>
            <h2 className= "card-title">Rigved Doddi</h2>
            <p className= "card-text">
                The Falcon 9 landing sparked my passion for computer engineering, leading me to pursue a degree at North Carolina State University. I've developed skills in embedded systems and machine learning through experiences as a research assistant on an autonomous vehicle project and a full-stack developer. My senior design project combined these technologies to create a smart camera capable of tracking individuals, reinforcing my interest in their integration. I am excited to further explore this intersection in graduate studies, aiming to develop innovative solutions in fields like autonomous vehicles and wearable health devices.
            </p>
        </div>
    );
}

export default Card;
