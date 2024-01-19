package ma.emsi.model;

public class RejectedDemandeDTO {
	private int demandeId;
	private String motifTexte;

	public int getDemandeId() {
		return demandeId;
	}

	public void setDemandeId(int demandeId) {
		this.demandeId = demandeId;
	}

	public String getMotifTexte() {
		return motifTexte;
	}

	public void setMotifTexte(String motifTexte) {
		this.motifTexte = motifTexte;
	}

	public RejectedDemandeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RejectedDemandeDTO(int demandeId, String motifTexte) {
		super();
		this.demandeId = demandeId;
		this.motifTexte = motifTexte;
	}

}
