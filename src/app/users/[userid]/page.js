async function getUser(id){
    let data = await fetch(`http://18.213.5.239:3000/api/users/${id}`)
    data = await data.json()
    return data.result
}

export default async function Page({params}){
    const user = await getUser(params.userid)
    return(
        <div>
            <h2>
                user detail
            </h2>
            <h4>{user?.name}</h4>
            <h4>{user?.age}</h4>
            <h4>{user?.email}</h4>
            <h4>{user?.id}</h4>
        </div>
    )
}