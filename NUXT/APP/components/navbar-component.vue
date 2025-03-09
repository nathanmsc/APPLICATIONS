<template>

    <Navbar
     expand="lg"
     theme="dark"
     style="background-color: #010f20;"
    >
     <Container type="fluid">
      <NavbarBrand to="/">MINDSETCLOUD</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
       <NavbarNavList margin="e-auto b-2 b-lg-0">
        <NavItem>
         <NavLink to="/home">
          Home
         </NavLink>
        </NavItem>
        <NavItem>
         <NavLink to="/services">
          Services
         </NavLink>
        </NavItem>
        <NavItemDropdown>
         <NavItemDropdownToggle>Projects</NavItemDropdownToggle>
         <DropdownMenu>
          <DropdownItem to="/dashboard">Dashboard</DropdownItem>
          <DropdownItem to="/stream">Real Time</DropdownItem>
          <DropdownItemDivider />
          <DropdownItem to="iot">IoT</DropdownItem>
         </DropdownMenu>
        </NavItemDropdown>        
       </NavbarNavList>
       <BForm
        flex
        role="search"
       >
        <BFormInput
         margin="e-2"
         type="search"
         placeholder="Search"
        />
        <b-button
         color="outline-light"
         type="submit"
        >
         Search
        </b-button>
       </BForm>
      </NavbarCollapse>
     </Container>
    </Navbar>
    
</template>
<style>
.container-fluid{
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
}
.navbar-brand{
    font-weight: 600;
}

</style>