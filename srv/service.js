const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    this.on('resolve', async (req) => {
        const tx = cds.tx(req);
        await tx.run(
            UPDATE('Escalations').set({
                'Status_code': 'CMP'
            }).where({
                ID: req.params[0].ID
            })
        );
    });

    this.after('CREATE', 'Escalations', (req) => {
        let { ID, createdBy, description } = req.data;
        const event = this.emit('escalationCreated', { ID, createdBy, description })
        return event
    });
});