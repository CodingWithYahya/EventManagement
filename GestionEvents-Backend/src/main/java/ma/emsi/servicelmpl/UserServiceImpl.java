package ma.emsi.servicelmpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ma.emsi.model.ERole;
import ma.emsi.model.Role;
import ma.emsi.model.User;
import ma.emsi.repository.RoleRepository;
import ma.emsi.repository.UserRepository;
import ma.emsi.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void create(User u) {
		addUser(u, u.getRoleName());
	}

	@Override
	public void update(User u) {
		User m = findById(u.getId());
		if (m != null) {
			m.setEmail(u.getEmail());
			m.setNom(u.getNom());
			m.setPrenom(u.getPrenom());
			m.setTelephone(u.getTelephone());
			m.setUsername(u.getUsername());

			if (!m.getRole().getName().equals(u.getRoleName())) {
				Role newRole = getRoleByName(u.getRoleName());
				if (newRole == null) {
					throw new RuntimeException("Error: New role is not found.");
				}
				m.setRole(newRole);
			}

			if (!passwordEncoder.matches(u.getPassword(), m.getPassword())) {
				m.setPassword(passwordEncoder.encode(u.getPassword()));
			}
			userRepository.save(m);
		}
	}

	private Role getRoleByName(String roleName) {
		switch (roleName.trim().toLowerCase()) {
		case "manager":
			return roleRepository.findByName(ERole.ROLE_MANAGER).orElse(null);
		case "etudiant":
			return roleRepository.findByName(ERole.ROLE_ETUDIANT).orElse(null);
		default:
			return null;
		}
	}

	@Override
	public void delete(int id) {
		userRepository.deleteById(id);
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User findById(int id) {
		return userRepository.findById(id);
	}

	public void addUser(User user, String roleName) {
		if (userRepository.existsByUsername(user.getUsername())) {
			throw new RuntimeException("Error: Username is already taken!");
		}

		if (userRepository.existsByEmail(user.getEmail())) {
			throw new RuntimeException("Error: Email is already in use!");
		}

		Role role;
		switch (roleName.trim()) {
		case "manager":
			role = roleRepository.findByName(ERole.ROLE_MANAGER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			break;
		case "etudiant":
			role = roleRepository.findByName(ERole.ROLE_ETUDIANT)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			break;
		default:
			throw new RuntimeException("Error: Invalid role!");
		}

		user.setRole(role);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}

}