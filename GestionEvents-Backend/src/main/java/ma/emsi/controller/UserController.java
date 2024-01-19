package ma.emsi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.emsi.model.User;
import ma.emsi.service.UserService;

@RestController
@RequestMapping("/gestion_events")
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping(value = "/user", produces = { "application/json", "application/xml" }, consumes = { "application/json",
			"application/xml" })
	public ResponseEntity<Void> add(@RequestBody User u) {
		userService.create(u);
		return ResponseEntity.noContent().build();
	}

	@GetMapping(value = "/user/id/{id}", produces = { "application/json", "application/xml" }, consumes = {
			"application/json", "application/xml" })
	public ResponseEntity<User> findById(@PathVariable int id) {
		User result = userService.findById(id);
		return ResponseEntity.ok().body(result);
	}

	@GetMapping(value = "/user", produces = { "application/json", "application/xml" })
	public ResponseEntity<List<User>> findAll() {
		List<User> result = userService.findAll();
		return ResponseEntity.ok().body(result);

	}

	@PutMapping(value = "/user", produces = { "application/json", "application/xml" }, consumes = { "application/json",
			"application/xml" })
	public ResponseEntity<Void> update(@RequestBody User u) {
		userService.update(u);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping(value = "/user/{id}", produces = { "application/json", "application/xml" })
	public ResponseEntity<Void> delete(@PathVariable int id) {
		userService.delete(id);
		return ResponseEntity.noContent().build();
	}
}