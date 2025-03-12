<template>
  <footer class="page-footer font-small bg-dark pt-4">
       
     <div class="container-fluid lead text-center muted text-md-left">
       <div class="row">

         <div class="col-md-6 mt-md-0 mt-3">
           <div class="module">
           <h5 class="text-uppercase text-white">Endereço</h5>
           <ul class="list-unstyled text-white">
             <li>
               <span>Edf. Galeria Larissa, Sala 02</span>
             </li>
             <li>
               <span>Rua Boulevard América, nº 34</span>
             </li>
             <li>
               <span>Nazaré - Salvador - BA</span>
             </li>
           </ul>
           </div>
         </div>

         <hr class="clearfix w-100 d-md-none pb-3">
         <div class="col-md-3 mb-md-0 mb-3">
           <h5 class="text-uppercase text-white">Social</h5>
           <ul class="list-unstyled text-white">
             <li>
               <i class="fab fa-linkedin-in fa-2x"></i><span> LinkedIn</span>
             </li>
             <li>
               <i class="fab fa-instagram fa-2x"></i><span> Instagram</span>
             </li>
           </ul>
         </div>
   
         <hr class="clearfix w-100 d-md-none pb-3">
         <div class="col-md-3 mb-md-0 mb-3">
           <!-- Links -->
           <h5 class="text-uppercase text-white">Contato</h5>
           <ul class="list-unstyled text-white">
             <li>
               <i class="fab fa-whatsapp"></i><b> Whatsapp:</b><span> (71) 9935-0102</span>
             </li>
             <li>
               <i class="far fa-envelope"></i><b> E-mail:</b><span> contato@mindsetcloud.net</span>
             </li>
             <li>
               <i class="fa fa-phone"></i><b> Telefone:</b><span> (71) 3371-7013</span>
             </li>
           </ul>
         </div>

       </div>
     </div>
 
      <div class="footer-copyright text-center text-white py-3">
         <!--
         <p>
           <b-img src="~/static/img/visa.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
           <b-img src="~/static/img/master.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
           <b-img src="~/static/img/hiper.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
           <b-img src="~/static/img/elo.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
           <b-img src="~/static/img/boleto.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
         </p>
         -->
         Copyright © mindsetcloud.net - {{year}}
     </div>
     </footer>
 </template>
 <style scoped>
 .page-footer{
     margin: 0px auto;
     
 }
 
 .footer-copyright{
       background:rgba(0,0,0,1);
 
 }
 </style>
 <script>
 export default {
     data(){
       
       const now = new Date();
       return {
         year: now.getFullYear()
       }
     }
 }
 </script>