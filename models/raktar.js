module.exports = {
    identity: 'error',
    connection: 'default',
    attributes: {
        date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },
        status: {
            type: 'string',
            enum: ['new', 'assigned', 'success', 'rejected', 'pending'],
            required: true,
        },
        osszeg: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        user: {
            model: 'user',
        },
    }
}