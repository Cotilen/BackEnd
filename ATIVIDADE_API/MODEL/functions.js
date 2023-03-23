const whatsapp = require('./contatos')

const getContatos = function(id) {
    let contatosUsers = {}

    contatosUsers.contatos = whatsapp.contatos["whats-users"][id].contacts

    return contatosUsers
}

module.exports = {
    getContatos
}