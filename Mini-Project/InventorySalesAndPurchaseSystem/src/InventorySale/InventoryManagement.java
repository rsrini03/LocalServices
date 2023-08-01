package InventorySale;

import java.sql.*;
import java.util.*;

public class InventoryManagement {

	public static List<Inventory> getAllitems() throws SQLException {

		List<Inventory> inventory = new ArrayList<>();
		Connection connection = DB.connect();

		Statement statement = connection.createStatement();

		String query = "select * from inventory";

		ResultSet rs = statement.executeQuery(query);

		while (rs.next()) {
			Inventory item = new Inventory(rs.getString(1), rs.getString(2), rs.getString(3), rs.getInt(4),
					rs.getString(5), rs.getInt(6));
			inventory.add(item);
		}

		return inventory;
	}

	public static boolean updateStock(String item_id, int item_quantity) throws SQLException {

		Connection connection = DB.connect();
		PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);

		pstmt.setInt(1, item_quantity);
		pstmt.setString(2, item_id);

		int res = pstmt.executeUpdate();

		if (res == 1) {
			return true;
		}

		return false;
	}

	public static Inventory itemAvailable(String id) throws SQLException {

		Connection connection = DB.connect();

		PreparedStatement ps = connection.prepareStatement(Query.itemExists);

		ps.setString(1, id);
		ResultSet rs = ps.executeQuery();
		Inventory item = null;
 
		while (rs.next()) {
			String item_id = rs.getString(1);
			String name = rs.getString(2);
			String supplier = rs.getString(3);
			int price = rs.getInt(4);
			String brand = rs.getString(5);
			int quantity = rs.getInt(6);

			item = new Inventory(item_id,name,supplier, price,brand, quantity);

		}

		return item;
	}

	public static Boolean purchaseOrder(ArrayList<Inventory> arr) throws SQLException {

		Connection connection = DB.connect();

		int limit = arr.size();

		int count = 0;

		for (Inventory element : arr) {
			PreparedStatement pstmt = connection.prepareStatement(Query.updateItem);

			PreparedStatement statement = connection.prepareStatement(Query.itemQuantity);
			statement.setString(1, element.getItem_id());

			ResultSet rs = statement.executeQuery();

			int original = 0;
			while (rs.next()) {
				original = rs.getInt(1);
			}

			pstmt.setInt(1, original - element.getQuantity());
			pstmt.setString(2, element.getItem_id());
			int res = pstmt.executeUpdate();

			if (res == 1) {
				count++;
			}
		}

		if (count == limit) {
			return true;
		}

		return false;
	}

}
