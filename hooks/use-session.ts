import { authClient } from "@/lib/auth-client"

export const useGetSession = () => {
    const session = authClient.useSession()
    return session
}