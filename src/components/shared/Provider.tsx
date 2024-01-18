import { ClerkProvider } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default Provider;
