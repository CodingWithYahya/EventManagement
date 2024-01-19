package ma.emsi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.emsi.model.ERole;
import ma.emsi.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	Optional<Role> findByName(ERole name);
}