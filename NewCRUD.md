### add new navigation to the main navigation 
```
          <li>
            <NavLink
              to="/x-crud"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              X-CRUD
            </NavLink>
          </li>
```
### add the element to App.js file
```
      {
        path: 'x-crud',
        element: <XRootLayout />,
        // children: [
        //   {
        //     index: true,
        //     element: <StudentCRUDPage />,
        //     loader: eventsLoader3,
        //   },
        //   {
        //     path: ':studentId',
        //     id: 'student-detail',
        //     loader: studentDetailLoader,
        //     children: [
        //       {
        //         index: true,
        //         element: <StudentDetailPage />,
        //         action: deleteStudentAction,
        //       },
        //       {
        //         path: 'edit',
        //         element: <EditStudentPage />,
        //         action: manipulateStudentAction,
        //         loader: checkAuthLoader,
        //       },
        //     ],
        //   },
        //   {
        //     path: 'new',
        //     element: <NewStudentPage />,
        //     action: manipulateStudentAction,
        //     loader: checkAuthLoader,
        //   },
        // ],
      },
```

3.  X_main_crud,js
4.  x_crud_routs.js
5.  x_crud_data.js