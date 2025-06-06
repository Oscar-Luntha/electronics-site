'use client'
import { UserButton, useUser } from "@clerk/nextjs"
export default function UserDisplay(){
    const {user, isLoaded} = useUser()
    if (!isLoaded || !user) return null;

    return(
        <div className="flex items-center gap-2">
            <UserButton />

            <div className="text-sm text-gray-800 font-medium">
                {user.firstName} { user.lastName}
            </div>
        </div>
    )
}