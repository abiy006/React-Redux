# inorder to create crud operation ...
1.  Frontend
1.  Add new navigation list item into MainNavigation.js file
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
2.  copy the crud folder and rename to the tartget name
      1.1 rename the file names inside crud folders
3.  copy and rename the crud imports from App.js file
4.  add new children into the main rootlayout and rename to the imported files in App.js file
### add the element to App.js file
```
      {
        path: 'a-crud',
        element: <ARootLayout />,
        children: [
          {
            index: true,
            element: <AmaincrudPage />,
            loader: ALoader,
          },
          {
            path: ':acrudId',
            id: 'acrud-detail',
            loader: ADetailLoader,
            children: [
              {
                index: true,
                element: <ADetailPage />,
                action: deleteAAction,
              },
              {
                path: 'edit',
                element: <EditAPage />,
                action: manipulateAAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <ANewCRUDPage />,
            action: manipulateAAction,
            loader: checkAuthLoader,
          },
        ],
      },
```

2.  Backend
  1.  data
    1.1 copy past and rename the xcrud file to target crud file
    1.2 copy past and rename the util_xcrud file to target crud file
  2.  routes
    2.1 copy past and rename the xcruds file to target crud file
  3.  copy past and rename the xcruds.json file to target crud file
  4.  open app.js file and add the new target crud file paths