import React from "react";
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function AdminManageUsers() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Subscriber" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Subscriber" },
  ];

  return (
    <Box p={3}>
      {/* Header Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold" sx={{fontFamily: "FiraSansSemiBold", fontSize: {
          xs: "2rem", 
          sm: "2.1rem",  
          md: "2.3rem",    
          lg: "2.4rem",  },}}>
          Manage Users
        </Typography>

        <Button variant="outlined" sx={{fontFamily: "FiraSans",
            fontWeight: "bold",
            fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },}}>Add User</Button>
      </Box>

      {/* Table Card */}
      <Card sx={{ p: 2 }}>
        <Table
        sx={{
                       "& th": {
        fontFamily: "FiraSansSemiBold",
        fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                       },
                        "& td": {
        fontFamily: "FiraSans",
        fontWeight: "bold",
        fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.2em",  },
        
      },

              }}>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, fontWeight: "bold", fontFamily: "FiraSans", fontSize: {
          xs: "1rem", 
          sm: "1rem",  
          md: "1.1rem",    
          lg: "1rem",  }, }}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{fontWeight: "bold", fontFamily: "FiraSans", fontSize: {
          xs: "1rem", 
          sm: "1rem",  
          md: "1.1rem",    
          lg: "1rem",  },}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Footer */}
      <Typography
        textAlign="center"
        mt={4}
        color="gray"
        fontSize="14px"
      >
        © 2025 YourStore Admin
      </Typography>
    </Box>
  );
}

export default AdminManageUsers;
