function Enviar(){
let nomeUsuario = document.getElementById('name').value
let emailUsuario = document.getElementById('email').value
let cpfUsuario = document.getElementById('number').value
let dataReserva = document.getElementById('data').value

let lugar = document.querySelector("input[name='lugar']:checked").value

let termoDeUso = document.getElementById('termoDeUso')

if(termoDeUso.checked){
    alert('Tudo certo! Veja suas informações a seguir ')
    window.location.href='ultima.html'
}else{
    alert('Ahh, acho que você esqueceu de confirmar os termos!')
}

alert('Seu nome ' + nomeUsuario + '\n' 
+ 'Seu email é: ' +emailUsuario+ '\n' 
+ 'Seu CPF é: ' +cpfUsuario+ '\n'
+ 'A data da sua reserva foi: ' +dataReserva+ '\n'
+ 'Retirada: ' + lugar)





}

function Voltar(){
window.location.href='formulario.html                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            '

}