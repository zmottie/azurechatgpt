import { ProtectedPage } from "@/features/auth/protected-page";
import { ChatMenu } from "@/features/chat/chat-menu/chat-menu";
import { MainMenu } from "@/features/menu/menu";
import { AI_NAME } from "@/features/theme/customise";

export const metadata = {
  title: "Option 4.0 - ChatGPT",
  description: "Private ChatGPT instance dedicated to Option 4.0 employees",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedPage>
      <MainMenu />
      <ChatMenu />
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
