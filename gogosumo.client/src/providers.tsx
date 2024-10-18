import { ClerkProvider } from "@clerk/clerk-react"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY!

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ClerkProvider publishableKey={publishableKey} afterSignOutUrl={window.location.href}>
                {children}
			</ClerkProvider>
		</>
	)
}
export default Providers
