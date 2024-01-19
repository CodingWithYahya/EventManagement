package ma.emsi.jwt.responses;

public class UserInfoResponse {
	private int id;
	private String username;
	private String email;
	private String nom;
	private String prenom;
	private String roles;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public UserInfoResponse(int id, String username, String email, String nom, String prenom, String role) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.nom = nom;
		this.prenom = prenom;
		this.roles = role;
	}

}