$(document).ready(function(){
    /**
     * Calcula o valor da altura e largura do vídeo em relação às dimensões da tela
     */
    var newX = Math.round(( screen.width * 66.5 ) / 100) + "px"; // Altura
    var newY = Math.round(( screen.height * 66.5 ) / 100) + "px"; // Largura
    var altHistorico = Math.round(( screen.height * 23.14 ) / 100) + "px";
    /**
     * Seta os valores de altura e largura,para o vídeo, em relação a resolução do monitor.
     */
    $("#videoInfo").css("width",newX); // Largura
    $("#videoInfo").css("height",newY); // Altura
    $("#historico").css("height",altHistorico); // Altura do histórico
    
    console.log(`
         ######  ######## ######## ####  ######  
        ##    ## ##          ##     ##  ##    ## 
        ##       ##          ##     ##  ##       
         ######  ######      ##     ##  ##       
              ## ##          ##     ##  ##       
        ##    ## ##          ##     ##  ##    ## 
         ######  ########    ##    ####  ######
                                            
        01010011 01000101 01010100 01001001 01000011
        
        INFORMAÇÃO:
        As dimensões do vídeo foram alteradas para ${ newX } X ${ newY }.
        Estas dimenções são proporcionais a resolução do monitor que é de
        ${ screen.width }px X ${ screen.height }px . A altura do histórico
        foi ajustada para ${ altHistorico } .
    `);
});

