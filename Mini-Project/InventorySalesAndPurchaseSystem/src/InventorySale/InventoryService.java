package InventorySale;

import java.util.*;
import java.sql.*;

public class InventoryService {
	
	private static final String DB_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";


	Scanner scanner = new Scanner(System.in);

	public void addItems(String supplier_name) throws SQLException {
		System.out.println("Enter your Item Details");
		Inventory inventory = new Inventory();
		System.out.print("Enter your item_id : ");
		inventory.setItem_id(scanner.nextLine());
		System.out.print("Enter your item_name : ");
		inventory.setItem_name(scanner.nextLine());
		System.out.print("Enter your Brand : ");
		inventory.setBrand(scanner.nextLine());
		inventory.setSupplier_name(supplier_name);
		System.out.print("Enter your price : ");
		inventory.setPrice(Integer.parseInt(scanner.nextLine()));
		System.out.print("Enter your quantity : ");
		inventory.setQuantity(Integer.parseInt(scanner.nextLine()));
		
		try (Connection connection1 = DriverManager.getConnection(DB_URL, "root", "root");
				PreparedStatement preparedStatement1 = connection1.prepareStatement(
						"INSERT INTO inventory (item_id,item_name, brand, supplier_name, price,quantity) VALUES (?, ?, ?, ?, ?,?)")) {
			preparedStatement1.setString(1, inventory.getItem_id());
			preparedStatement1.setString(2, inventory.getItem_name());
			preparedStatement1.setString(3, inventory.getBrand());
			preparedStatement1.setString(4, inventory.getSupplier_name());
			preparedStatement1.setInt(5, inventory.getPrice());
			preparedStatement1.setInt(6, inventory.getQuantity());


			preparedStatement1.executeUpdate();

			System.out.println("Heyyy "+(inventory.getSupplier_name()) +" Your items successfully Added :)");
		}

	}

}
