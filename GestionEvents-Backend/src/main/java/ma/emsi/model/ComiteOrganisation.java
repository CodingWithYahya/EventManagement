package ma.emsi.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class ComiteOrganisation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Integer nombreDePersonnes;

	@ManyToMany
	@JoinTable(name = "comite_organisation_users", joinColumns = @JoinColumn(name = "comite_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
	private List<User> users;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getNombreDePersonnes() {
		return nombreDePersonnes;
	}

	public void setNombreDePersonnes(Integer nombreDePersonnes) {
		this.nombreDePersonnes = nombreDePersonnes;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public ComiteOrganisation(int id, Integer nombreDePersonnes, List<User> users) {
		super();
		this.id = id;
		this.nombreDePersonnes = nombreDePersonnes;
		this.users = users;
	}

	public ComiteOrganisation() {
		super();
	}

}