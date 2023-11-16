import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"

const Profile = async () => {
    const session = await getServerSession(authConfig)
    return (
        <div>
            <h1>Profile</h1>
            <p>email: {session?.user?.email}</p>
        </div>
    )
}

export default Profile