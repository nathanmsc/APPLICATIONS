<template>
  
  <Navbar
   expand="lg"
   theme="light"
   style="background-color: #e3f2fd;"
  >
   <Container type="fluid">
    <NavbarBrand to="/">MINDSETCLOUD</NavbarBrand>
    <NavbarToggler />
    <NavbarCollapse>
     <NavbarNavList margin="e-auto b-2 b-lg-0">
      <NavItem>
       <NavLink active to="/home">
        Home
       </NavLink>
      </NavItem>
      <NavItem>
       <NavLink to="/lang-en/components/navbar/">
        Link
       </NavLink>
      </NavItem>
      <NavItemDropdown>
       <NavItemDropdownToggle>Dropdown</NavItemDropdownToggle>
       <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem to="/lang-en/components/navbar/">
         Another action
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>Something else here</DropdownItem>
       </DropdownMenu>
      </NavItemDropdown>
      <NavItem>
       <NavLink disabled>
        Disabled
       </NavLink>
      </NavItem>
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
 