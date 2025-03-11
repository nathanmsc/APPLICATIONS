<template>
    <footer class="page-footer font-small bg-info pt-4">
       <!-- Footer Links -->
       <div class="container-fluid text-center muted text-md-left">
         <!-- Grid row -->
         <div class="row">
           <!-- Grid column -->
           <div class="col-md-6 mt-md-0 mt-3">
             <!-- Content -->
             <div class="module">
             <h5 class="text-uppercase text-white">Endereço</h5>
             <ul class="list-unstyled text-white">
               <li>
                 <span><a href="https://goo.gl/maps/BS625QHQ4rCrAdZW6" class="endereco"> Edf. Galeria Larissa, Sala 02</a></span>
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
           <!-- Grid column -->
           <hr class="clearfix w-100 d-md-none pb-3">
           <!-- Grid column -->
           <div class="col-md-3 mb-md-0 mb-3">
             <!-- Links -->
             <h5 class="text-uppercase text-white">Social</h5>
             <ul class="list-unstyled text-white">
               <li>
                 <i class="fab fa-linkedin-in fa-2x"></i><a href="https://www.linkedin.com/in/ilaiale" class="social"><span> LinkedIn</span></a>
               </li>
               <li>
                 <i class="fab fa-instagram fa-2x"></i><a href="https://www.instagram.com/ilaialenunes" class="social"><span> Instagram</span></a>
               </li>
             </ul>
           </div>
           <!-- Grid column -->
     
           <!-- Grid column -->
           <div class="col-md-3 mb-md-0 mb-3">
             <!-- Links -->
             <h5 class="text-uppercase text-white">Contato</h5>
             <ul class="list-unstyled text-white">
               <li>
                 <i class="fab fa-whatsapp"></i><b> Whatsapp:</b><a href="https://api.whatsapp.com/send?phone=5571999350102&text=%20" class="contato"><span> (71) 9935-0102</span></a>
               </li>
               <li>
                 <i class="far fa-envelope"></i><b> E-mail:</b><a href="mailto:contato@ilaiale.com" class="contato"><span> ilaiale@gmail.com</span></a>
               </li>
               <li>
                 
                 <i class="fa fa-phone"></i><b> Telefone:</b><a href="tel:55713371-7013" class="contato"><span> (71) 3371-7013</span></a>
               </li>
             </ul>
           </div>
           <!-- Grid column -->
         </div>
         <!-- Grid row -->
       </div>
       <!-- Footer Links -->
     
       <!-- Copyright -->
       <div class="footer-copyright text-center text-white bg-primary py-3">
           <!--
           <p>
             <b-img src="~/static/img/visa.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
             <b-img src="~/static/img/master.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
             <b-img src="~/static/img/hiper.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
             <b-img src="~/static/img/elo.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
             <b-img src="~/static/img/boleto.png" blank-color="#abc" width="48" alt="placeholder"></b-img>
           </p>
           -->
           Copyright © www.ilaiale.com - {{year}}
       </div>
       <!-- Copyright -->
     
     </footer>
     <!-- Footer -->
   </template>
   
   <script>
   export default {
       name: 'Footer',
       data(){
         
         const now = new Date();
         return {
           year: now.getFullYear()
         }
   
       }
   }
   </script>
   
   <style>
   .row {
     font-size: 18px;
     color: #526488;
   }
   
   .col-md-6{
     justify-content: center;
     align-items: center;
     word-spacing: 1px;
   }
   
   .col-md-3{
     justify-content: center;
     align-items: center;
     word-spacing: 1px;
   }
   a.social, a.contato, a.endereco{
     color:rgba(255, 255, 255, 1);
   }
   
   a.social:hover, a.contato:hover, a.endereco:hover{
     color:rgba(255, 255, 255, 0.7);
   }
   
   a.social:link, a.contato:link, a.endereco:link{
     text-decoration:none;
   }
   </style>