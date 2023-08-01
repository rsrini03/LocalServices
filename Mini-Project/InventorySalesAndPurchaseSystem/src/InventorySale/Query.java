package InventorySale;

public class Query {
	
	//Get Role by Email
	static String getRole = "SELECT 'Customer' AS role FROM customer WHERE email = ? UNION SELECT 'Supplier' AS role FROM supplier WHERE email = ?";

	// User Table - CRUD OPERATIONS
	static String insertUser = "INSERT INTO user (username, name, email, password , phoneNumber, dob, address, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

	static String updateUser = "UPDATE customer SET name = ? WHERE customer_id = ?";

	static String deleteUser = "DELETE FROM customer WHERE user_id = ?";

	static String selectUsers = "SELECT * FROM customer";

	static String validateUser = "SELECT * FROM customer WHERE email = ?";
	
	//Supplier Table 
	
	static String insertSupplier = "INSERT INTO supplier (supplier_id, name, email, password , phoneNumber, address, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
	
	static String validateSupplier = "SELECT * FROM supplier WHERE email = ?";

	// Inventory Table - CRUD OPERATIONS

	static String insertItem = "INSERT INTO inventory (item_id, item_name, brand, supplier_name, price, quantity) VALUES (?, ?, ?, ?, ?, ?)";

	static String updateItem = "UPDATE inventory SET quantity = ? WHERE item_id = ?";

	static String deleteItem = "DELETE FROM inventory WHERE inventory_id = ?";

	static String selectItem = "SELECT * FROM inventory";
	
	static String itemExists = "SELECT * FROM inventory WHERE item_id = ?"; 
	
	static String itemQuantity = "SELECT quantity FROM inventory WHERE item_id = ?";

	

}