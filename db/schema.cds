namespace odata;

entity ProductsDB {
    key ProductID       : Integer;
        ProductName     : String(40);
        SupplierID      : Integer;
        CategoryID      : Integer;
        QuantityPerUnit : String(20);
        UnitPrice       : Decimal(19, 4);
}
