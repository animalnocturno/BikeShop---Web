function comprar() {

   window.location = "resumo.html"
   res.innerHTML = ("Funcinou!")

}

function enviar() {

   var msg = document.getElementById("msg")

   var nome = document.getElementById("nome")
   var end = document.getElementById("endereço")
   var email = document.getElementById("email")

   var retorno = document.getElementById("retorno")

   var circulo = document.getElementById("imagem")
   var cabeçalho = document.getElementById("cabeçalho")

   var nm = (nome.value)
   var em = (email.value)
   var ed = (end.value)

   var data = new Date()
   var hora = data.getHours()

   if (nm  == "" || em == "" || ed == "") {
      window.alert("Você precisa preencher todos os campos!")
   } else {
      msg.innerHTML = `MUITO BEM, SEU PEDIDO FOI REALIZADO ÀS ${hora} HORAS, ${nm}. ESTAMOS ENCAMINHANDO PARA ${em}, O CATÁLOGO SOLICITADO.`

      cabeçalho.style.background = "#A2DDFC"
      retorno.style.background = "rgb(33, 33, 204)"
      retorno.style.padding = "5px"
      retorno.style.color = "white"
      
     
      
      retorno.innerHTML = "☝️ CLIQUE NA IMAGEM PARA RETORNAR À PÁGINA PRINCIPAL! ☝️"
      

   }
}