package InventorySale;

import java.util.*;
import java.sql.*;

public class InventoryMain {
	static CustomerOrSupplier obj = null;
	private static final String DB_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";

	public static void main(String[] args) throws SQLException {

		Scanner scanner = new Scanner(System.in);

		System.out.println();
		System.out.println("************************INVENTORY SALES AND PURCHASE SYSTEM************************");
		System.out.println();
//			System.out.println("1.CUSTOMER" + "\n2.SUPPLIER");
		System.out.print("Are you a registerd user (Y/N) : ");
		char z = scanner.next().charAt(0);
		scanner.nextLine();

		if (z == 'Y' || z == 'y') {

			System.out.println("\nThats great !! so let's get started !\n");
			System.out.println("************LOGIN******************");
			System.out.print("Enter your email : ");
			String email = scanner.nextLine();
			System.out.print("Enter your password : ");
			String password = scanner.nextLine();

			obj = Login.validate(email, password);

			if (Objects.nonNull(obj)) {

				System.out.println("********** <- Successfully Logged In -> ***********");
				System.out.println();
				System.out.println("********** <- Welcome back " + obj.getName() + " ! -> ***********");

				if (obj.getRole().equals("Customer")) {
					int choice;

					int choice1;

					ArrayList<Inventory> cart = new ArrayList<>();

					do {
						System.out.println();
						System.out.println("***************************MENU LIST*******************************");

						System.out.println(
								"1.View Inventory" + "\n2.Add To cart" + "\n3.View Cart" + "\n4.Purchase" + "\n5.Exit");

						System.out.println("********************************************************************");
						System.out.println();

						System.out.print("Enter your choice (1-5) : ");

						choice1 = Integer.parseInt(scanner.nextLine());

						switch (choice1) {
						case (1):
							List<Inventory> result = InventoryManagement.getAllitems();
							List<Inventory> outOfStock = new ArrayList<>();

							System.out.println(
									"-----------------------------------------------------------------------------------------------------");
							System.out.println(
									"ID    | Name                  | Brand            | Supplier           |    Price        | Quantity");
							System.out.println(
									"-----------------------------------------------------------------------------------------------------");

							for (Inventory item : result) {

								if (item.getQuantity() != 0) {

									String formattedRow = String.format("%-5s | %-21s | %-16s | %-18s | %-16d | %-6d",
											item.getItem_id(), item.getItem_name(), item.getBrand(),
											item.getSupplier_name(), item.getPrice(), item.getQuantity());
									System.out.println(formattedRow);
								} else {
									outOfStock.add(item);
								}

							}
							System.out.println(
									"----------------------------------------------------------------------------------------------------");

							if (outOfStock.size() != 0) {

								
								System.out
								.println("\n************************************ OUT OF STOCK *****************************************\n");
								System.out.println(
										"------------------------------------------------------------------------------------------------");
								System.out.println(
										"ID    | Name               | Brand            | Supplier           |    Price         | Quantity");
								System.out.println(
										"------------------------------------------------------------------------------------------------");

								for (Inventory items : outOfStock) {

									String formattedRows = String.format("%-5s | %-18s | %-16s | %-18s | %-17d | %-6d",
											items.getItem_id(), items.getItem_name(), items.getBrand(),
											items.getSupplier_name(), items.getPrice(), items.getQuantity());
									System.out.println(formattedRows);

								}

								System.out.println(
										"------------------------------------------------------------------------------------------------");
							}

							break;

						case (2):

							System.out.print("Enter the item_id : ");
							String itemid = scanner.nextLine();
							Inventory inventory = InventoryManagement.itemAvailable(itemid);

							if (Objects.nonNull(inventory)) {

								System.out.print("Enter the quantity : ");
								int q = Integer.parseInt(scanner.nextLine());

								if (q <= inventory.getQuantity()) {
									Inventory ivent = new Inventory();
									ivent.setItem_id(inventory.getItem_id());
									ivent.setItem_name(inventory.getItem_name());
									ivent.setBrand(inventory.getBrand());
									ivent.setSupplier_name(inventory.getSupplier_name());
									ivent.setPrice(inventory.getPrice());
									ivent.setQuantity(q);

									int flag = 0;
									for (Inventory val : cart) {
										if (val.getSupplier_name().equals(inventory.getSupplier_name())) {
											flag++;
											val.setQuantity(val.getQuantity() + q);
										}
									}

									if (flag == 0) {
										cart.add(ivent);
									}
									System.out.println(
											"********************************************************************\n");
									System.out.println();

									System.out.println("Item successfully Added :)");
									System.out.println(
											"********************************************************************");
								}

								else {
									System.out.println(
											"********************************************************************\n");
									System.out.println();

									System.out.println("Insufficient Quantity");
								}

							} else {
								System.out.println(
										"********************************************************************\n");

								System.out.println("This item is not available!!!");
							}

							break;

						case (3):

							if (cart.size() == 0) {

								System.out.println(
										"********************************************************************\n");
								System.out.println();

								System.out.println("Your cart is Empty!!!");
							} else {

								System.out.println(
										"------------------------------------------------------------------------------------------");
								System.out.println(
										"ID    | Name            | Brand            | Supplier           | Price(₹)      | Quantity");
								System.out.println(
										"------------------------------------------------------------------------------------------");

								for (Inventory item : cart) {
									String formattedRow = String.format("%-5s | %-15s | %-16s | %-18s | %-13d | %-6d",
											item.getItem_id(), item.getItem_name(), item.getBrand(),
											item.getSupplier_name(), item.getPrice(), item.getQuantity());
									System.out.println(formattedRow);
								}

								System.out.println(
										"------------------------------------------------------------------------------------------");
								int amount = 0;
								for (Inventory val : cart) {
									amount += val.getQuantity() * val.getPrice();

								}
								System.out.println("Total Amount : ₹" + amount);
								System.out.println(
										"-----------------------------------------------------------------------------------------");

							}
							break;

						case (4):
							if (cart.size() == 0) {
								System.out.println(
										"********************************************************************\n");
								System.out.println();

								System.out.println("Cart is Empty :) !!!");
								break;
							}

							if (InventoryManagement.purchaseOrder(cart)) {
								System.out.println(
										"********************************************************************\n");
								System.out.println();

								System.out.println("Succesfully purchased :) !!");

								cart.clear();

							} else {
								System.out.println(
										"********************************************************************\n");
								System.out.println();

								System.out.println("Something went wrong !!");
							}
							break;

						case (5):
							System.out
									.println("********************************************************************\n");

							System.out.println("Bye Bye :)");
							System.exit(choice1);

						default:
							System.out
									.println("********************************************************************\n");
							System.out.println("Invalid Choice :(");

						}
					} while (choice1 != 5);
				} else {
					InventoryService service = new InventoryService();
					int choice;

					do {
						System.out.println("***************************MENU LIST*******************************");

						System.out.println("1.Update Items" + "\n2.Add Items" + "\n3.View Inventory" + "\n4.Exit");

						System.out.println("********************************************************************");
						System.out.println();

						System.out.print("Enter your choice (1-4) : ");
						choice = Integer.parseInt(scanner.nextLine());

						switch (choice) {
						case (1):
							System.out.print("Enter the Item ID : ");
							String item_id = scanner.nextLine();

							Inventory inventory = InventoryManagement.itemAvailable(item_id);

							if (Objects.nonNull(inventory)) {

								System.out.print("Enter the Item Quantity : ");
								int item_quantity = Integer.parseInt(scanner.nextLine());
								if (InventoryManagement.updateStock(item_id, item_quantity)) {
									System.out.println(
											"********************************************************************");
									System.out.println();
									System.out.println("Successfully Item refilled !!");
									System.out.println();
									System.out.println(
											"********************************************************************");
									System.out.println();
								} else {
									System.out.println(
											"********************************************************************");
									System.out.println();
									System.out.println("Enter the details correctly!!!!");
									System.out.println();
									System.out.println(
											"********************************************************************");
									System.out.println();
								}
							}

							else {
								System.out.println("This item is not available!!!");

							}
							break;
						case (2):
							service.addItems(obj.getName());
							break;

						case (3):
							List<Inventory> result = InventoryManagement.getAllitems();
							List<Inventory> outOfStock = new ArrayList<>();

							System.out.println(
									"-------------------------------------------------------------------------------------------------------");
							System.out.println(
									"ID    | Name                  | Brand            | Supplier           |    Price        | Quantity");
							System.out.println(
									"-------------------------------------------------------------------------------------------------------");

							for (Inventory item : result) {

								if (item.getQuantity() != 0) {

									String formattedRow = String.format("%-5s | %-21s | %-16s | %-18s | %-16d | %-6d",
											item.getItem_id(), item.getItem_name(), item.getBrand(),
											item.getSupplier_name(), item.getPrice(), item.getQuantity());
									System.out.println(formattedRow);
								} else {
									outOfStock.add(item);
								}

							}
							System.out.println(
									"-------------------------------------------------------------------------------------------------------");

							if (outOfStock.size() != 0) {

								System.out.println(
										"\n********************************* OUT OF STOCK *************************************\n");

								System.out.println(
										"---------------------------------------------------------------------------------------------------");
								System.out.println(
										"ID    | Name               | Brand            | Supplier           |    Price         | Quantity");
								System.out.println(
										"---------------------------------------------------------------------------------------------------");

								for (Inventory items : outOfStock) {

									String formattedRows = String.format("%-5s | %-18s | %-16s | %-18s | %-17d | %-6d",
											items.getItem_id(), items.getItem_name(), items.getBrand(),
											items.getSupplier_name(), items.getPrice(), items.getQuantity());
									System.out.println(formattedRows);

								}

								System.out.println(
										"---------------------------------------------------------------------------------------------------");
							}

							break;

						case (4):
							System.out
									.println("********************************************************************\n");
							System.out.println("Exited");

							System.out
									.println("\n********************************************************************");
							System.exit(0);

						default:
							System.out
									.println("********************************************************************\n");
							System.out.println();

							System.out.println("Invalid choice");
							break;
						}
					} while (choice != 4);

				}
			} else {

				System.out.println("Invalid credentials !!!");
			}

		} else {
			System.out.println("\n***************REGISTER*************\n");
			System.out.print("Enter your role (customer/supplier) : ");
			String role = scanner.nextLine();

			if (role.equalsIgnoreCase("customer")) {

				CustomerService.addCustomerDetails();

			} else {
				AddSupplier.addSupplierDetails();
			}
		}

//	public static void createSupplierTableIfNotExists() throws SQLException {
//		try (Connection connection = DriverManager.getConnection(DB_URL, "root", "Surya@07");
//				Statement st = connection.createStatement()) {
//			String createTableSupplier = "CREATE TABLE IF NOT EXISTS supplier (" + "Supplier_id INTEGER,"
//					+ "name VARCHAR(50) PRIMARY KEY NOT NULL," + "Mobile_number BIGINT,"
//					+ "address VARCHAR(50) NOT NULL," + "role VARCHAR(10) NOT NULL," + "email VARCHAR(100) NOT NULL,"
//					+ "password VARCHAR(50) NOT NULL)";
//			st.executeUpdate(createTableSupplier);
//		}
//	}
//
//	public static void createCustomerTableIfNotExists() throws SQLException {
//		try (Connection connection = DriverManager.getConnection(DB_URL, "root", "Surya@07");
//				Statement st = connection.createStatement()) {
//			String createTableCustomer = "CREATE TABLE IF NOT EXISTS customer ("
//					+ "Customer_id INTEGER PRIMARY KEY AUTO_INCREMENT," + "name VARCHAR(50) NOT NULL,"
//					+ "Mobile_number BIGINT NOT NULL," + "Address VARCHAR(50) NOT NULL," + "role VARCHAR(30) NOT NULL,"
//					+ "email VARCHAR(100) NOT NULL," + "password VARCHAR(50) NOT NULL)";
//			st.executeUpdate(createTableCustomer);
//		}
//
//	}
//
//	public static void createInventoryTableIfNotExists() throws SQLException {
//		try (Connection connection = DriverManager.getConnection(DB_URL, "root", "Surya@07");
//				Statement st = connection.createStatement()) {
//			String createTableInventory = "CREATE TABLE IF NOT EXISTS Inventory (" + "item_id VARCHAR(20) PRIMARY KEY,"
//					+ "item_name VARCHAR(50) NOT NULL," + "brand VARCHAR(50) NOT NULL,"
//					+ "supplier_name VARCHAR(100) NOT NULL," + "Price INTEGER NOT NULL," + "quantity INT NOT NULL,"
//					+ "FOREIGN KEY (supplier_name) REFERENCES supplier(name))";
//			st.executeUpdate(createTableInventory);
//
//		}
//	}

	}
}