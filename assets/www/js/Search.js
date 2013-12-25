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
 var srt = "";
 
//Funcion que se invoca cada vez que se escribe en el input
 //.keypress()
 $( "#search-basic" ).change(function() { 
	 	art = ($( this ).val());
	 
	 console.log(art);

	 	//articulo del 1 a 9
		if (art <= 9){
			//Carga el id del Div de la pagina con el Numero De Articulo
			$( "#resultado" ).load('titulo1.html #'+art);
			 
		};
	
});