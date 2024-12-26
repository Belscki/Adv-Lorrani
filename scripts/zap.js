$(document).ready(function() {
    $('#formOrcamento').on('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos
        var nome = $('#nome').val();
        var area = $('#area').val();

        // Verifica se todos os campos obrigatórios foram preenchidos e se a área não é "Vazio"
        if (nome && area && area !== 'Vazio') {
            // Codifica a mensagem para URL
            var mensagem = encodeURIComponent(`Olá Lorrani,
Meu nome é *${nome}* e estou entrando em contato para solicitar um orçamento referente aos serviços na área de *${area}*. Gostaria de saber mais detalhes sobre os custos e os serviços oferecidos para a minha situação.
Agradeço desde já pela atenção e aguardo seu retorno.
Atenciosamente,  
*${nome}*`);

            // Cria a URL do WhatsApp com a mensagem
            var urlWhatsApp = "https://api.whatsapp.com/send?phone=5511980648010&text=" + mensagem;

            // Redireciona para o WhatsApp
            window.location.href = urlWhatsApp;
        } else {
            // Caso o formulário não esteja preenchido corretamente, exibe uma mensagem de erro
            Swal.fire({
                title: "Preencha uma área!",
                icon: "error",
                draggable: true
              });
        }
    });
});