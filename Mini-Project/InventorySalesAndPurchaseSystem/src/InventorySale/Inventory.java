package InventorySale;

public class Inventory {

	private String item_id;
	private String item_name;
	private String supplier_name;
	private int price;
	private String brand;
	private int quantity;

	public String getItem_id() {
		return item_id;
	}

	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getSupplier_name() {
		return supplier_name;
	}

	public void setSupplier_name(String supplier_name) {
		this.supplier_name = supplier_name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Inventory(String item_id, String item_name, String supplier_name,int price ,String brand , int quantity) {
		super();
		this.item_id = item_id;
		this.item_name = item_name;
		this.brand = brand;
		this.supplier_name = supplier_name;
		this.price = price;
		this.quantity = quantity;
	}

	public Inventory() {
		
	}

}
