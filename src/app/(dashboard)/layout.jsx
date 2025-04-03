import Logo from "@/components/logo";
import "../globals.css";
import WorkspaceHeader from "@/components/ui/header";
import UserProfile from "@/components/ui/profiles";
import CardComponent from "@/components/card";
import { workspaceService } from "../../../services/work-space";
import { WorkspaceSidebar } from "@/components/workspaces/workspace";
import NewTaskButton from "@/components/ui/create-button";
export default async function RootLayout({ children }) {
  const workspace = await workspaceService();
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12 relative">
          <div className="col-span-3 ">
            <div className="flex items-center justify-self-center my-20">
              <Logo />
            </div>
            <div className="h-[300px] overflow-y-auto mr-10">
              {/* {token} */}
              <WorkspaceSidebar workspace={workspace} />
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex items-center my-20 justify-between w-[90%]">
              <div className="">
                <WorkspaceHeader />
              </div>
              <div>
                <UserProfile />
              </div>
            </div>

            <div className="grid grid-cols-9 gap-10 w-[90%] ">
              <div className="col-span-9 w-full ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
