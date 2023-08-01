package InventorySale;

import java.sql.*;
import java.util.*;

public class AddSupplier {

	private static final String DB_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";

	public static void addSupplierDetails() throws SQLException {

		Scanner scanner = new Scanner(System.in);
		

		Supplier viewSupplier = new Supplier();
		System.out.print("Enter the id : ");
		viewSupplier.setName(scanner.nextLine());
		System.out.print("Enter your name : ");
		viewSupplier.setName(scanner.nextLine());
		System.out.print("Enter the address : ");
		viewSupplier.setAddress(scanner.nextLine());
		System.out.print("Enter the phoneNumber : ");
		viewSupplier.setPhoneNumber(Long.parseLong(scanner.nextLine()));
		viewSupplier.setRole("supplier");
		System.out.print("Enter the email : ");
		viewSupplier.setEmail(scanner.nextLine());
		System.out.print("Enter the password : ");
		viewSupplier.setPassword(scanner.nextLine());

		try (Connection connection1 = DriverManager.getConnection(DB_URL, "root", "root");
				PreparedStatement preparedStatement1 = connection1.prepareStatement(
						"INSERT INTO supplier (Supplier_id,name,phoneNumber,address,role,email,password) VALUES (?, ?, ?, ?, ?,?,?)")) {
			preparedStatement1.setInt(1, viewSupplier.getSupplier_id());
			preparedStatement1.setString(2, viewSupplier.getName());
			preparedStatement1.setLong(3, viewSupplier.getPhoneNumber());
			preparedStatement1.setString(4, viewSupplier.getAddress());
			preparedStatement1.setString(5, viewSupplier.getRole());
			preparedStatement1.setString(6, viewSupplier.getEmail());
			preparedStatement1.setString(7, viewSupplier.getPassword());

			preparedStatement1.executeUpdate();

			System.out.println("************************************************\n");

			System.out.println(" Supplier Successfully Registered :) !!!");

			System.out.println("\n************************************************");
		}
	}

}
