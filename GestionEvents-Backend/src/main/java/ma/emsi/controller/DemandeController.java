package ma.emsi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.emsi.model.Demande;
import ma.emsi.model.MotifRejet;
import ma.emsi.model.RejectedDemandeDTO;
import ma.emsi.service.DemandeService;

@RestController
@RequestMapping("gestion_events/demande")
public class DemandeController {

	@Autowired
	private DemandeService demandeService;

	@PostMapping("/add")
	public ResponseEntity<Void> addDemande(@RequestBody Demande demande) {

		demandeService.createDemande(demande);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<Demande> getDemandeById(@PathVariable int id) {
		Demande demande = demandeService.getDemandeById(id);
		return ResponseEntity.ok().body(demande);
	}

	@GetMapping("/getByState/{etat}")
	public ResponseEntity<List<Demande>> getDemandesByEtat(@PathVariable String etat) {
		List<Demande> demandes = demandeService.getDemandesByEtat(etat);
		return ResponseEntity.ok().body(demandes);
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Demande>> getAllDemandes() {
		List<Demande> demandes = demandeService.getAllDemandes();
		return ResponseEntity.ok().body(demandes);
	}

	@GetMapping("/getByTitre/{titre}")
	public ResponseEntity<List<Demande>> searchDemandesByTitre(@PathVariable String titre) {
		List<Demande> demandes = demandeService.searchDemandesByTitre(titre);
		return ResponseEntity.ok().body(demandes);
	}

	@PutMapping("/accepter")
	public ResponseEntity<Void> accepterDemande(@RequestBody Demande demande) {
		Demande d = demandeService.getDemandeById(demande.getId());
		if (d != null) {
			demandeService.AccepterDemande(d);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/rejeter")
	public ResponseEntity<Void> rejeterDemande(@RequestBody RejectedDemandeDTO rejectedDemandeDTO) {
		Demande demande = demandeService.getDemandeById(rejectedDemandeDTO.getDemandeId());
		if (demande != null) {
			MotifRejet motifRejet = new MotifRejet();
			motifRejet.setTexte(rejectedDemandeDTO.getMotifTexte());
			demandeService.RejeterDemande(demande, motifRejet);

			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
