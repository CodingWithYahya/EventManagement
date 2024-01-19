package ma.emsi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class MotifRejet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String texte;

	@OneToOne
	private Demande demande;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTexte() {
		return texte;
	}

	public void setTexte(String texte) {
		this.texte = texte;
	}

	public Demande getDemande() {
		return demande;
	}

	public void setDemande(Demande demande) {
		this.demande = demande;
	}

	public MotifRejet(int id, String texte, Demande demande) {
		super();
		this.id = id;
		this.texte = texte;
		this.demande = demande;
	}

	public MotifRejet() {
		super();
		// TODO Auto-generated constructor stub
	}

}
