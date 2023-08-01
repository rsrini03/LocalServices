package InventorySale;

import java.sql.Connection;
import java.sql.DriverManager;

public class DB {

	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DATABASE_URL = "jdbc:mysql://localhost:3306/InventorySales?createDatabaseIfNotExist=true";

	static final String USERNAME = "root";
	static final String PASSWORD = "root";

	static Connection conn;

	public static Connection connect() {
		try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
		} catch (Exception e) {
			e.printStackTrace();
			System.err.println(e.getMessage());
		}

		return conn;
	}

}