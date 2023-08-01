package InventorySale;

public class Customer implements CustomerOrSupplier{

	private  int Customer_id;
	private String name;
	private Long Mobile_number;
	private String Address;
	private String role;
	private String email;
	private String password;
	public int getCustomer_id() {
		return Customer_id;
	}
	public void setCustomer_id(int customer_id) {
		Customer_id = customer_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getMobile_number() {
		return Mobile_number;
	}
	public void setMobile_number(Long mobile_number) {
		Mobile_number = mobile_number;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Customer(int customer_id, String name, Long mobile_number, String address, String role, String email,
			String password) {
		super();
		Customer_id = customer_id;
		this.name = name;
		Mobile_number = mobile_number;
		Address = address;
		this.role = role;
		this.email = email;
		this.password = password;
	}
	public Customer() {
		
	}
	
	

}
