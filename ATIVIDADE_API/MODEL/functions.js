const whatsapp = require('./contatos')

const getContatos = function(id) {

    return whatsapp.contatos["whats-users"][id].contacts

}

// getContatos(1)