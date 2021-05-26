# CAP OData

This CAP Node.js Project is used to access an OData Service ([Northwind](https://services.odata.org/V2/Northwind/Northwind.svc/) used here), get Entity Data (Product used here) and store it in a SQLite persisted DB.

## Steps to get Product Data

1. Complete the local setup mentioned [here](https://cap.cloud.sap/docs/get-started/#local-setup).
2. Initialize CAP project with `cds init` command.
3. Download metadata of the northwind service as a `.edmx` file anywhere in your system.
4. Import the metadata using `cds import [filepath.edmx]`. This creates a `.csn` and a `.edmx` file in `/src/external` folder. It also creates a cds.requires entry for the Northwind service in `package.json`.
5. Create the `catalog-service.cds` and `catalog-service.js` files in `/src` folder and expose the Product entity of the Northwind service for consumption.
6. Add the service URL as the credentials of the cds.requires entry of the Northwind service in `package.json`.
7. Open a new terminal and run `cds watch`.

## Steps to store Product Data
1. Create `schema.cds` file in `/db` folder to expose the Products entity for data creation.
2. Create and Deploy the data model to a persistent DB as mentioned [here](https://cap.cloud.sap/docs/get-started/in-a-nutshell#deploying-persistent-databases). This creates a `.db` file in `root`. It also creates a cds.requires entry for the SQLite db in `package.json`.
3. Modify the `catalog-service.js` file to add the DB insert statements.
4. Open a new terminal and run `cds watch`.


## References

1. https://blogs.sap.com/2020/05/26/cap-consume-external-service-part-1/
2. https://cap.cloud.sap/docs/get-started/in-a-nutshell#deploying-persistent-databases
3. https://cap.cloud.sap/docs/node.js/cds-connect#cdsconnectto--kindurl--service
