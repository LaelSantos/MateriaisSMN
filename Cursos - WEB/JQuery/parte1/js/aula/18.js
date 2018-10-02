$(document).ready(function(){
        $("span:eq(0)").click(function(){
                $("div").hide(1000);//slow, fasta, fast

        });

        $("span:eq(1)").click(function(){
                $("div").show("slow");//slow, fasta, fast

        });

        $("span:eq(2)").click(function(){
                $("div").toggle(1000);//slow, fasta, fast

        });
  
});


