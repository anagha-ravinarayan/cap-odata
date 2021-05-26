using {Northwind as external} from './external/Northwind.csn';

service CatalogService {

    @readonly
    entity Products as projection on external.Products {
        key ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice
    };

    @readonly
    entity Orders   as projection on external.Orders {
        key OrderID, CustomerID, OrderDate, RequiredDate, ShippedDate, ShipName, ShipAddress, ShipCity
        // Customer : Association to Customer on Customer.CustomerID = $self.CustomerID
    };

}
