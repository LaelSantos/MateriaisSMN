$(document).ready(function(){
   
    // $("#filmes tbody tr:odd").addClass("impar");
    
    // $("#filmes tbody tr:nth-child(3)").addClass("impar");
    
    // $("#filmes tbody tr:nth-child(odd)").addClass("impar");
    $("#filmes tbody tr:nth-child(4n -1)").addClass("impar");
    $("#filmes tbody tr:nth-child(4n)").addClass("impar");
    
});