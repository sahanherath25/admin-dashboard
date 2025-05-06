import React from 'react';
import AdminHeader from "@/components/ui/AdminHeader";
import MenuTitle from "@/app/dashboard/components/MenuTitle";
import MenuItems from "@/app/dashboard/components/MenuItems";
import MenuFooter from "@/app/dashboard/components/MenuFooter";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import EmployeeStats from "@/app/dashboard/components/employees/EmployeeState";
import TeamStats from "@/app/dashboard/components/teams/TeamStats";


function AdminPage() {
 return (
     <>
         <Tabs className={"employees"}>
             <TabsList className={"mb-4"}>
                 <TabsTrigger value={"employees"}>Employees</TabsTrigger>
                 <TabsTrigger value={"teams"}>Teams</TabsTrigger>
             </TabsList>
             <TabsContent value={"employees"}>
                 <EmployeeStats/>
             </TabsContent>
             <TabsContent value={"teams"}>
                 <TeamStats/>
             </TabsContent>
         </Tabs>
     </>

 )
}

export default AdminPage;

