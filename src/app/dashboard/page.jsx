import React from 'react';
import AdminHeader from "@/components/ui/AdminHeader";
import MenuTitle from "@/app/dashboard/components/MenuTitle";
import MenuItems from "@/app/dashboard/components/MenuItems";
import MenuFooter from "@/app/dashboard/components/MenuFooter";

function AdminPage(props) {
 return (
  <section className={"admin   w-full grid grid-cols-[250px_minmax(0,_1fr)]  h-screen"} >

      <aside className={" flex flex-col  row-start-1 row-end-2 bg-muted overflow-auto p-4"}>
          <MenuTitle/>
          <MenuItems/>
          <MenuFooter/>
      </aside>
      <main className={"overflow-auto "}>
          <AdminHeader/>
          <div className="main-content-wrapper">
              Main Content
          </div>

      </main>

  </section>
 );}

export default AdminPage;