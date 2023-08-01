package InventorySale;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class CustomerService {

	private static final String DB_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";

	public static void addCustomerDetails() throws SQLException {

		Scanner scanner = new Scanner(System.in);

		Customer viewcustomer = new Customer();
		System.out.print("Enter your name : ");
		viewcustomer.setName(scanner.nextLine());
		System.out.print("Enter your phoneNumber : ");
		viewcustomer.setMobile_number(Long.parseLong(scanner.nextLine()));
		System.out.print("Enter your Address : ");
		viewcustomer.setAddress(scanner.nextLine());
		viewcustomer.setRole("Customer");
		System.out.print("Enter your email : ");
		viewcustomer.setEmail(scanner.nextLine());
		System.out.print("Enter your password : ");
		viewcustomer.setPassword(scanner.nextLine());

		try (Connection connection1 = DriverManager.getConnection(DB_URL, "root", "root");
				PreparedStatement preparedStatement1 = connection1.prepareStatement(
						"INSERT INTO customer (name,Mobile_number,Address,role,email,password) VALUES (?, ?, ?, ?, ?, ?)")) {
			preparedStatement1.setString(1, viewcustomer.getName());
			preparedStatement1.setLong(2, viewcustomer.getMobile_number());
			preparedStatement1.setString(3, viewcustomer.getAddress());
			preparedStatement1.setString(4, viewcustomer.getRole());
			preparedStatement1.setString(5, viewcustomer.getEmail());
			preparedStatement1.setString(6, viewcustomer.getPassword());

			preparedStatement1.executeUpdate();

			System.out.println("Customer Successfully Registered :)!!");
		}
	}

}
