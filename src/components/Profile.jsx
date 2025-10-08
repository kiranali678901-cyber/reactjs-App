const user = {
    name: 'Kiran',
    imageUrl :'/img/img1.jpg',
    imgSize : 100,
}

function Profile(){

    return(
        <>
        <h2>Your name is {user.name}</h2>
        <img src = {user.imageUrl} alt="User image" style={{width:user.imgSize, height:user.imgSize}}></img>
        </>
    )
}

export default Profile