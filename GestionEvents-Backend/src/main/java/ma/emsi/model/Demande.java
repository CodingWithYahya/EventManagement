package ma.emsi.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Demande")
public class Demande {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String titre;
	private String description;
	private LocalDate dateDebut;
	private LocalDate dateFin;
	private Integer budget;
	@Column
	private String etat;
	private String type;
	private String local;
	private Boolean moyendetransport;
	private int effectif;

	@ManyToOne
	@JoinColumn(name = "comite_id")
	private ComiteOrganisation comiteOrganisation;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public Demande(int id, String titre, String description, LocalDate dateDebut, LocalDate dateFin, Integer budget,
			String etat, String type, String local, Boolean moyendetransport, int effectif,
			ComiteOrganisation comiteOrganisation, User user) {
		super();
		this.id = id;
		this.titre = titre;
		this.description = description;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.budget = budget;
		this.etat = etat;
		this.type = type;
		this.local = local;
		this.moyendetransport = moyendetransport;
		this.effectif = effectif;
		this.comiteOrganisation = comiteOrganisation;
		this.user = user;
	}

	public LocalDate getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(LocalDate dateDebut) {
		this.dateDebut = dateDebut;
	}

	public LocalDate getDateFin() {
		return dateFin;
	}

	public void setDateFin(LocalDate dateFin) {
		this.dateFin = dateFin;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public Boolean getMoyendetransport() {
		return moyendetransport;
	}

	public void setMoyendetransport(Boolean moyendetransport) {
		this.moyendetransport = moyendetransport;
	}

	public int getEffectif() {
		return effectif;
	}

	public void setEffectif(int effectif) {
		this.effectif = effectif;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getLocalDateDebut() {
		return dateDebut;
	}

	public void setLocalDateDebut(LocalDate dateDebut) {
		this.dateDebut = dateDebut;
	}

	public LocalDate getLocalDateFin() {
		return dateFin;
	}

	public void setLocalDateFin(LocalDate dateFin) {
		this.dateFin = dateFin;
	}

	public Integer getBudget() {
		return budget;
	}

	public void setBudget(Integer budget) {
		this.budget = budget;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ComiteOrganisation getComiteOrganisation() {
		return comiteOrganisation;
	}

	public void setComiteOrganisation(ComiteOrganisation comiteOrganisation) {
		this.comiteOrganisation = comiteOrganisation;
	}

	public Demande() {
		super();
		// TODO Auto-generated constructor stub
	}

}
