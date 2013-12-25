/**
 * @gerardoperez132
 * 24/06/2013
 * Scrip con la logica del buscador de la app
 */
/*
 * Licencia GPL v3
 * Copyright (C) 2013 Gerardo Perez. All Rights Reserved.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any
 * later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses
 */

 var art = 0;		
 
 //Funcion encargada de conparar los parametros e insertar el articulo correspondiente
 var artRango = function(art, art1 , art2, url){
	 
		if (art >= art1 & art <= art2){
			//console.log("FUNCION:"+art1+"-"+art2);
			//Carga el div del id de la pagina con el Numero De Articulo
			$( "#resultado" ).load(url+' #'+"Art"+art);
			//console.log(url+' #'+art);
		}
	 
 }
 
 
 $(document).ready(function() {
		//Funcion que se invoca cada vez que se escribe en el input
		 //.keypress()
		 $( "#search-basic" ).change(function() { 
			 	art = ($( this ).val());
			 	///console.log("VALOR:"+art);
				 	//articulo del 1 a 9
					if (art <= 9){
						//Carga el div del id de la pagina con el Numero De Articulo
						$( "#resultado" ).load('titulo1.html #'+art);
					}//fin if
					
					if (art >= 350){
						//Carga el div del id de la pagina con el Numero De Articulo
						$( "#resultado" ).text('Solo son 350 Articulos :-(');
					}//fin if
					
					//////////////////////////////////////////////
					//articulo del 10 a 15
					artRango(art,10,15,"titulo2Cap1.html");				
					//articulo del 19 a 31
					artRango(art,19,31,"titulo3Cap1.html");
					//articulo del 32 a 42
					artRango(art,32,42,"titulo3Cap2.html");
					//articulo del 43 a 61
					artRango(art,43,61,"titulo3Cap3.html");
					//articulo del 62 a 74
					artRango(art,62,74,"titulo3Cap4.html");
					//articulo del 75 a 61
					artRango(art,75,97,"titulo3Cap5.html");
					//articulo del 98 a 111
					artRango(art,98,111,"titulo3Cap6.html");
					//articulo del 112 a 111
					artRango(art,112,118,"titulo3Cap7.html");
					//articulo del 119 a 126
					artRango(art,119,126,"titulo3Cap8.html");
					//articulo del 127 a 129
					artRango(art,127,129,"titulo3Cap9.html");
					//articulo del 130 a 135
					artRango(art,130,135,"titulo3Cap10.html");
					//articulo del 136 a 155
					artRango(art,136,155,"titulo4Cap1.html");
					//articulo del 156 a 158
					artRango(art,156,158,"titulo4Cap2.html");
					//articulo del 159 a 167
					artRango(art,159,167,"titulo4Cap3.html");
					//articulo del 168 a 184
					artRango(art,168,184,"titulo4Cap4.html");
					//articulo del 185 a 185
					artRango(art,185,185,"titulo4Cap5.html");
					//articulo del 186 a 224
					artRango(art,186,224,"titulo5Cap1.html");
					//articulo del 225 a 252
					artRango(art,225,252,"titulo5Cap2.html");
					//articulo del 253 a 272
					artRango(art,253,272,"titulo5Cap3.html");
					//articulo del 273 a 291
					artRango(art,273,291,"titulo5Cap4.html");
					//articulo del 292 a 298
					artRango(art,292,298,"titulo5Cap5.html");
					//articulo del 299 a 310
					artRango(art,299,310,"titulo6Cap1.html");
					//articulo del 311 a 321
					artRango(art,311,321,"titulo6Cap2.html");
					//articulo del 322 a 325
					artRango(art,322,325,"titulo7Cap1.html");
					//articulo del 326 a 327
					artRango(art,326,327,"titulo7Cap2.html");
					//articulo del 328 a 331
					artRango(art,328,331,"titulo7Cap3.html");
					//articulo del 332 a 332
					artRango(art,332,332,"titulo7Cap4.html");
					//articulo del 333 a 336
					artRango(art,333,336,"titulo8Cap1.html");
					//articulo del 337 a 339
					artRango(art,337,339,"titulo8Cap2.html");
					//articulo del 340 a 341
					artRango(art,340,341,"titulo9Cap1.html");
					//articulo del 342 a 346
					artRango(art,342,346,"titulo9Cap2.html");
					//articulo del 347 a 350
					artRango(art,347,350,"titulo9Cap3.html");
					
					///////////////////////////////////////////////

		 });//fin Change
});//fin ready



 