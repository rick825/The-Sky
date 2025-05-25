import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Admin/nav/Nav'; 
import Dashboard from '../Admin/dashboard/Dashboard';
import TopNav from '../Admin/nav/TopNav';
import BlogDash from '../Admin/blog/BlogDash';
import BlogEditForm from '../Admin/blog/BlogEditForm';
import ReadBlog from '../Admin/blog/ReadBlog';
import { useAdminContext } from '../context/AdminContext';
import AdminLogin from '../Admin/Signin/AdminLogin';
import AdminPrivateRoute from './AdminPrivateRoute';  // Import your AdminPrivateRoute
import { Navigate } from 'react-router-dom';
import ManageCar from '../Admin/ManageCar/ManageCar';
import ManageRide from '../Admin/ManageRide/ManageRide';
import ManageUser from '../Admin/ManageUser/ManageUser';
import ManageMessages from '../Admin/ManageMessages/ManageMessages';

const AdminLayout = () => {
  const location = useLocation();
  const { admin, users } = useAdminContext();


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {location.pathname !== "/admin/login" && <TopNav />}
      
      <div style={{ display: 'flex',width:"100%", height: location.pathname === '/admin/login' ? 'calc(100vh - 5px)':'calc(100vh - 60px)' }}> {/* Adjust height */}
        {/* Left Side: Navigation */}
        {location.pathname !== "/admin/login" &&<div style={{ width: '250px', flexShrink: 0 }}>
  <Nav />
</div>}
        
        {/* Right Side: Content */}
        <div style={{  flex:1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/admin" element={
              admin ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/admin/login" replace />
            } />
            <Route path="/admin/dashboard" element={
              <AdminPrivateRoute>
                <Dashboard />
              </AdminPrivateRoute>
            } />

            <Route path="/admin/blog" element={
              <AdminPrivateRoute>
                <BlogDash />
              </AdminPrivateRoute>
            } />
            <Route path="/admin/blog/:name" element={
              <AdminPrivateRoute>
                <ReadBlog />
              </AdminPrivateRoute>
            } />
            <Route path="/admin/blog/edit" element={
              <AdminPrivateRoute>
                <BlogEditForm />
              </AdminPrivateRoute>
            } />


             <Route path="/admin/manage-cars" element={
              <AdminPrivateRoute>
                <ManageCar />
              </AdminPrivateRoute>
            } />

            <Route path="/admin/manage-rides" element={
              <AdminPrivateRoute>
                <ManageRide />
              </AdminPrivateRoute>
            } />

            <Route path="/admin/manage-users" element={
              <AdminPrivateRoute>
                <ManageUser />
              </AdminPrivateRoute>
            } />

            
            <Route path="/admin/manage-contacts" element={
              <AdminPrivateRoute>
                <ManageMessages />
              </AdminPrivateRoute>
            } />

            {/* <Route path="/admin/media" element={
              <AdminPrivateRoute>
                <MediaUploader />
              </AdminPrivateRoute>
            } />
            <Route path="/admin/orders" element={
              <AdminPrivateRoute>
                <Orders />
              </AdminPrivateRoute>
            } />

           <Route path="/admin/manage-user" element={
              <AdminPrivateRoute>
                <UserManagement users={users} />
              </AdminPrivateRoute>
            } />

            <Route path="/admin/manage-banner" element={
              <AdminPrivateRoute>
                <Banner users={users} />
              </AdminPrivateRoute>
            } />


            <Route path="/admin/seo" element={
              <AdminPrivateRoute>
                <Seo />
              </AdminPrivateRoute>
            } /> */}

            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
