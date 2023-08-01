package InventorySale;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Login {

	public static CustomerOrSupplier validate(String email, String password) throws SQLException {

		Connection connection = DB.connect();

		PreparedStatement pStatement = connection.prepareStatement(Query.getRole);

		pStatement.setString(1, email);
		pStatement.setString(2, email);

		ResultSet rs1 = pStatement.executeQuery();
		String role = "";

		while (rs1.next()) {
			role = rs1.getString(1);
		}

		if (role.equals("Customer")) {

			PreparedStatement statement = connection.prepareStatement(Query.validateUser);

			statement.setString(1, email);

			ResultSet rs = statement.executeQuery();

			while (rs.next()) {

				if (rs.getString(7).equals(password)) {
					Customer user = new Customer();
					user.setName(rs.getString(2));
					user.setMobile_number(rs.getLong(3));
					user.setAddress(rs.getString(4));
					user.setRole(rs.getString(5));
					user.setEmail(rs.getString(6));
					user.setPassword(rs.getString(7));

					return user;
				}
			}

		} else {

			PreparedStatement statement = connection.prepareStatement(Query.validateSupplier);

			statement.setString(1, email);

			ResultSet rs = statement.executeQuery();

			while (rs.next()) {

				if (rs.getString(7).equals(password)) {
					Supplier supplier = new Supplier();

					supplier.setSupplier_id(rs.getInt(1));
					supplier.setName(rs.getString(2));
					supplier.setPhoneNumber(rs.getLong(3));
					supplier.setAddress(rs.getString(4));
					supplier.setRole(rs.getString(5));
					supplier.setEmail(rs.getString(6));
					supplier.setPassword(rs.getString(7));

					return supplier;
				}
			}
		}

		return null;
	}
}