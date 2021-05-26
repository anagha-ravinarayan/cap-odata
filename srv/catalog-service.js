const cds = require('@sap/cds');
const { ProductsDB } = cds.entities('odata');

cds.connect.to('sqlite:odata.db');

module.exports = cds.service.impl(async function () {
    const { Products, Orders } = this.entities;
    const service = await cds.connect.to('Northwind');

    // On READ of Products Entity
    this.on('READ', Products, async (request) => {
        // return service.tx(request).run(request.query);
        const data = await service.tx(request).run(request.query);
        await DELETE.from(ProductsDB);      // to bypass the entry already exists error
        await INSERT.into(ProductsDB).entries(...data);
        return data;
    });

    // this.after('READ', Products, (products) => {
    //     // console.log(products);
    //     INSERT.into(ProductsDB).entries(...products);
    // });

    // On READ of Orders Entity
    this.on('READ', Orders, request => {
        return service.tx(request).run(request.query);
    });
});