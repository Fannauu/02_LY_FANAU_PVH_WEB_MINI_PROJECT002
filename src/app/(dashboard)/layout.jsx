import Logo from "@/components/logo";
import "../globals.css";
import UserProfile from "@/components/ui/profiles";
import { WorkspaceSidebar } from "@/components/workspaces/workspace";
import WorkspaceHeader from "@/components/ui/header";
import { workspaceService } from "../../../services/work-space";
import { nameService } from "../../../services/profile";
import FavoriteMenu from "@/components/ui/favorite";
import HeaderComponent from "@/components/ui/headercontainer";
export default async function RootLayout({ children, searchParams }) {
  // console.log("searchParams",await searchParams);
  const workspaceName = (await searchParams)?.workspaceName;
  // console.log("workspaceName", workspaceName);
  //  const workspaceName = await searchParams.workspaceName; // Access the query param here
  //  console.log("Workspace Name from URL:", workspaceName);

  const workspace = await workspaceService();

  const getUser = await nameService();

  // console.log("firstName", getUser);

  // console.log("workspace", workspace);
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12 relative ">
          <div className="col-span-3 ">
            <div className="flex items-center justify-center my-20">
              <Logo />
            </div>
            <div className="h-[300px] overflow-y-auto mr-10">
              {/* {token} */}
              <WorkspaceSidebar workspace={workspace} />
            </div>
            <div className="h-[300px] mr-10 mt-20">
              <FavoriteMenu />
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex items-center my-20 justify-between w-[90%]">
              <div className="">
                <WorkspaceHeader workspaceName={workspaceName} />
              </div>
              <div>
                <UserProfile getUser={getUser} />
              </div>
            </div>
            <div className="grid grid-cols-9 gap-10 w-[90%] ">
              <div className="w-full h-full col-span-9 ">
                <HeaderComponent />
              </div>
              <div className="col-span-9 w-full ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
